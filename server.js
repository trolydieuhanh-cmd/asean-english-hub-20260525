const http = require("http");
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");
const net = require("net");
const tls = require("tls");
const { spawn } = require("child_process");

const ROOT = __dirname;
loadEnvFile(path.join(ROOT, ".env"));

const PORT = Number(process.env.PORT || 4173);
const HOST = process.env.HOST || "0.0.0.0";
const DATA_FILE = path.resolve(ROOT, process.env.DATA_FILE || path.join("data", "asean-hub.json"));
const MAX_BODY_SIZE = 25 * 1024 * 1024;
const SESSION_COOKIE = "asean_session";
const SESSION_TTL_MS = Number(process.env.SESSION_TTL_HOURS || 12) * 60 * 60 * 1000;
const PASSWORD_ITERATIONS = Number(process.env.PASSWORD_ITERATIONS || 210000);
const APP_SECRET = process.env.APP_SECRET || "dev-only-change-this-secret";
const SYSTEM_EMAIL_FROM = process.env.SYSTEM_EMAIL_FROM || "Asean Hitech System <no-reply@asean-vietnam.com>";
const PUBLIC_APP_URL = process.env.PUBLIC_APP_URL || "https://asean-vietnam.com";
const SENDMAIL_PATH = process.env.SENDMAIL_PATH || "/usr/sbin/sendmail";
const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID || "";
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET || "";
const GOOGLE_REDIRECT_URI = process.env.GOOGLE_REDIRECT_URI || `${PUBLIC_APP_URL.replace(/\/$/, "")}/api/google/oauth/callback`;
const GOOGLE_OAUTH_FILE = path.resolve(ROOT, process.env.GOOGLE_OAUTH_FILE || path.join("data", "google-oauth.json"));
const GOOGLE_MEET_API_ENABLED = String(process.env.GOOGLE_MEET_API_ENABLED || "false").toLowerCase() === "true";
const GOOGLE_MEET_SCOPE = "https://www.googleapis.com/auth/meetings.space.created";
const GOOGLE_OAUTH_SCOPES = ["openid", "email", GOOGLE_MEET_SCOPE];
const sessions = new Map();
const googleOAuthStates = new Map();

const contentTypes = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".webmanifest": "application/manifest+json; charset=utf-8",
  ".mobileconfig": "application/x-apple-aspen-config",
  ".apk": "application/vnd.android.package-archive",
  ".aab": "application/octet-stream",
  ".zip": "application/zip",
  ".png": "image/png",
  ".svg": "image/svg+xml"
};

const server = http.createServer(async (request, response) => {
  try {
    const requestUrl = new URL(request.url, `http://${request.headers.host}`);

    if (requestUrl.pathname === "/api/health" && request.method === "GET") {
      return sendJson(response, 200, { ok: true, storage: DATA_FILE });
    }

    if (requestUrl.pathname === "/api/login" && request.method === "POST") {
      return handleLogin(request, response);
    }

    if (requestUrl.pathname === "/api/logout" && request.method === "POST") {
      return handleLogout(request, response);
    }

    if (requestUrl.pathname === "/api/change-password" && request.method === "POST") {
      return handleChangePassword(request, response);
    }

    if (requestUrl.pathname === "/api/me" && request.method === "GET") {
      const { account } = await requireAuth(request);
      return sendJson(response, 200, { ok: true, account: sanitizeAccount(account) });
    }

    if (requestUrl.pathname === "/api/google/status" && request.method === "GET") {
      return handleGoogleStatus(request, response);
    }

    if (requestUrl.pathname === "/api/google/oauth/start" && request.method === "GET") {
      return handleGoogleOAuthStart(request, response);
    }

    if (requestUrl.pathname === "/api/google/oauth/callback" && request.method === "GET") {
      return handleGoogleOAuthCallback(requestUrl, response);
    }

    if (requestUrl.pathname === "/api/state" && request.method === "GET") {
      const { state, account } = await requireAuth(request);
      return sendJson(response, 200, sanitizeStateForAccount(state, account), { "Cache-Control": "no-store" });
    }

    if (requestUrl.pathname === "/api/state" && request.method === "POST") {
      const { state, account } = await requireAuth(request);
      const parsed = JSON.parse(await readBody(request));
      const emailJobs = [];
      const nextState = account.role === "admin" ? prepareAdminState(parsed, state, emailJobs) : mergeLimitedState(state, parsed, account);
      if (account.role === "admin") {
        if (GOOGLE_MEET_API_ENABLED) await attachGoogleMeetLinks(nextState, state);
      }
      await saveState(nextState);
      sendAccountEmails(emailJobs).catch((error) => {
        console.error("Could not send account notification email:", error.message);
      });
      return sendJson(response, 200, { ok: true, state: sanitizeStateForAccount(nextState, account) });
    }

    if (request.method !== "GET" && request.method !== "HEAD") {
      return sendJson(response, 405, { error: "Method not allowed" });
    }

    return serveStatic(request, response);
  } catch (error) {
    const status = error.statusCode || 500;
    return sendJson(response, status, { error: error.message || "Server error" });
  }
});

server.listen(PORT, HOST, () => {
  console.log(`Asean Holding English Hub running at http://${HOST}:${PORT}`);
  console.log(`Data file: ${DATA_FILE}`);
  if (!process.env.APP_SECRET) console.warn("APP_SECRET is not set. Set a strong secret before production use.");
});

async function handleLogin(request, response) {
  const { email, password } = JSON.parse(await readBody(request));
  const state = await loadState();
  const account = state.accounts.find((item) => String(item.email || "").toLowerCase() === String(email || "").trim().toLowerCase());
  if (!account || account.status !== "active" || !verifyPassword(String(password || ""), account)) {
    return sendJson(response, 401, { error: "Invalid email or password" });
  }

  markAccountOnline(account);
  await saveState(state);

  const sessionId = crypto.randomBytes(32).toString("hex");
  sessions.set(sessionId, {
    accountId: account.id,
    expiresAt: Date.now() + SESSION_TTL_MS
  });

  const sessionToken = signSessionValue(sessionId);
  response.setHeader("Set-Cookie", serializeSessionCookie(request, sessionId));
  return sendJson(response, 200, {
    ok: true,
    sessionToken,
    account: sanitizeAccount(account),
    state: sanitizeStateForAccount(state, account)
  });
}

async function handleLogout(request, response) {
  if (isUnloadBeaconLogout(request)) {
    return sendJson(response, 200, { ok: true, ignored: true });
  }
  const sessionId = readSessionId(request);
  if (sessionId) {
    const session = sessions.get(sessionId);
    sessions.delete(sessionId);
    if (session?.accountId) {
      const state = await loadState();
      const account = state.accounts.find((item) => item.id === session.accountId);
      if (account) {
        markAccountOffline(account);
        await saveState(state);
      }
    }
  }
  response.setHeader("Set-Cookie", clearSessionCookie(request));
  return sendJson(response, 200, { ok: true });
}

function isUnloadBeaconLogout(request) {
  const contentLength = Number(request.headers["content-length"] || 0);
  const contentType = String(request.headers["content-type"] || "");
  return request.method === "POST" && contentLength > 0 && contentType.includes("application/json");
}

async function handleChangePassword(request, response) {
  const { state, account } = await requireAuth(request);
  if (!["teacher", "student"].includes(account.role)) {
    return sendJson(response, 403, { error: "Only teacher and student accounts can change passwords here" });
  }

  const { currentPassword, newPassword } = JSON.parse(await readBody(request));
  const current = String(currentPassword || "");
  const next = String(newPassword || "");
  if (!current || !next || next.length < 8) {
    return sendJson(response, 400, { error: "Current password and a new password of at least 8 characters are required" });
  }
  if (!verifyPassword(current, account)) {
    return sendJson(response, 400, { error: "Current password is incorrect" });
  }

  setAccountPassword(account, next);
  await saveState(state);
  return sendJson(response, 200, { ok: true, account: sanitizeAccount(account) });
}

async function handleGoogleStatus(request, response) {
  await requireAdmin(request);
  const oauth = await loadGoogleOAuth();
  return sendJson(
    response,
    200,
    {
      ok: true,
      configured: googleMeetConfigured(),
      apiEnabled: GOOGLE_MEET_API_ENABLED,
      connected: Boolean(oauth?.refresh_token),
      email: oauth?.email || null,
      redirectUri: GOOGLE_REDIRECT_URI,
      scopes: GOOGLE_OAUTH_SCOPES
    },
    { "Cache-Control": "no-store" }
  );
}

async function handleGoogleOAuthStart(request, response) {
  const { sessionId } = await requireAdmin(request);
  if (!GOOGLE_MEET_API_ENABLED) {
    return sendJson(response, 400, {
      error: "Google Meet API automation is disabled. Use manual Google Meet links in lesson schedules.",
      redirectUri: GOOGLE_REDIRECT_URI
    });
  }
  if (!googleMeetConfigured()) {
    return sendJson(response, 400, {
      error: "Missing GOOGLE_CLIENT_ID or GOOGLE_CLIENT_SECRET",
      redirectUri: GOOGLE_REDIRECT_URI
    });
  }

  pruneGoogleOAuthStates();
  const state = crypto.randomBytes(24).toString("hex");
  googleOAuthStates.set(state, {
    sessionId,
    expiresAt: Date.now() + 10 * 60 * 1000
  });

  const authUrl = googleOAuthUrl(state);
  const acceptsJson = String(request.headers.accept || "").includes("application/json");
  if (acceptsJson) return sendJson(response, 200, { ok: true, authUrl, redirectUri: GOOGLE_REDIRECT_URI });
  response.writeHead(302, { Location: authUrl });
  return response.end();
}

async function handleGoogleOAuthCallback(requestUrl, response) {
  const error = requestUrl.searchParams.get("error");
  if (error) return redirect(response, `/?googleMeet=error&reason=${encodeURIComponent(error)}`);

  const state = requestUrl.searchParams.get("state");
  const code = requestUrl.searchParams.get("code");
  pruneGoogleOAuthStates();
  const stateRecord = state ? googleOAuthStates.get(state) : null;
  if (!stateRecord || !code) return redirect(response, "/?googleMeet=invalid");
  googleOAuthStates.delete(state);

  try {
    const token = await exchangeGoogleCode(code);
    const email = await fetchGoogleUserEmail(token.access_token).catch(() => "");
    await saveGoogleOAuth({
      ...token,
      email,
      connectedAt: new Date().toISOString()
    });
    return redirect(response, "/?googleMeet=connected");
  } catch (exchangeError) {
    console.error("Google OAuth callback failed:", exchangeError.message);
    return redirect(response, `/?googleMeet=error&reason=${encodeURIComponent(exchangeError.message)}`);
  }
}

async function requireAuth(request) {
  const sessionId = readSessionId(request);
  const session = sessionId ? sessions.get(sessionId) : null;
  if (!session || session.expiresAt < Date.now()) {
    if (sessionId) sessions.delete(sessionId);
    const error = new Error("Unauthorized");
    error.statusCode = 401;
    throw error;
  }
  const state = await loadState();
  const account = state.accounts.find((item) => item.id === session.accountId && item.status === "active");
  if (!account) {
    sessions.delete(sessionId);
    const error = new Error("Unauthorized");
    error.statusCode = 401;
    throw error;
  }
  session.expiresAt = Date.now() + SESSION_TTL_MS;
  return { state, account, sessionId };
}

async function requireAdmin(request) {
  const auth = await requireAuth(request);
  if (auth.account.role !== "admin") {
    const error = new Error("Admin access required");
    error.statusCode = 403;
    throw error;
  }
  return auth;
}

async function loadState() {
  const raw = await fs.promises.readFile(DATA_FILE, "utf8");
  const state = JSON.parse(raw);
  if (migrateSecurity(state)) await saveState(state);
  return state;
}

async function saveState(state) {
  migrateSecurity(state);
  await fs.promises.mkdir(path.dirname(DATA_FILE), { recursive: true });
  await fs.promises.writeFile(DATA_FILE, `${JSON.stringify(state, null, 2)}\n`, "utf8");
}

async function attachGoogleMeetLinks(nextState, previousState) {
  if (!googleMeetConfigured() || !(await googleMeetConnected())) return;

  const previousLessons = new Map((previousState.lessons || []).map((lesson) => [lesson.id, lesson]));
  for (const lesson of nextState.lessons || []) {
    if (!shouldCreateGoogleMeetLink(lesson, previousLessons.get(lesson.id))) continue;
    try {
      const meet = await createGoogleMeetSpace(lesson);
      if (!meet?.googleMeetUrl) continue;
      lesson.videoProvider = "google-meet";
      lesson.googleMeetUrl = meet.googleMeetUrl;
      lesson.googleMeetSpaceName = meet.googleMeetSpaceName || "";
      lesson.googleMeetCreatedAt = meet.googleMeetCreatedAt;
    } catch (error) {
      console.error(`Could not create Google Meet link for lesson ${lesson.id}:`, error.message);
    }
  }
}

function shouldCreateGoogleMeetLink(lesson, previousLesson) {
  if (!lesson || lesson.status === "cancelled" || lesson.googleMeetUrl) return false;
  if (!previousLesson) return true;
  return Boolean(lesson.adminStarted && !previousLesson.adminStarted);
}

async function createGoogleMeetSpace(lesson) {
  const accessToken = await googleAccessToken();
  const response = await fetch("https://meet.googleapis.com/v2/spaces", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      config: {
        accessType: process.env.GOOGLE_MEET_ACCESS_TYPE || "OPEN"
      }
    })
  });
  const body = await response.json().catch(() => ({}));
  if (!response.ok) {
    const message = body?.error?.message || `Google Meet API returned ${response.status}`;
    throw new Error(message);
  }
  return {
    googleMeetUrl: body.meetingUri || body.meeting_url || "",
    googleMeetSpaceName: body.name || "",
    googleMeetCreatedAt: new Date().toISOString(),
    lessonTitle: lesson?.title || ""
  };
}

function googleMeetConfigured() {
  return Boolean(GOOGLE_CLIENT_ID && GOOGLE_CLIENT_SECRET);
}

async function googleMeetConnected() {
  const oauth = await loadGoogleOAuth();
  return Boolean(oauth?.refresh_token);
}

function googleOAuthUrl(state) {
  const url = new URL("https://accounts.google.com/o/oauth2/v2/auth");
  url.searchParams.set("client_id", GOOGLE_CLIENT_ID);
  url.searchParams.set("redirect_uri", GOOGLE_REDIRECT_URI);
  url.searchParams.set("response_type", "code");
  url.searchParams.set("access_type", "offline");
  url.searchParams.set("prompt", "consent");
  url.searchParams.set("include_granted_scopes", "true");
  url.searchParams.set("scope", GOOGLE_OAUTH_SCOPES.join(" "));
  url.searchParams.set("state", state);
  return url.toString();
}

async function exchangeGoogleCode(code) {
  return googleTokenRequest({
    code,
    client_id: GOOGLE_CLIENT_ID,
    client_secret: GOOGLE_CLIENT_SECRET,
    redirect_uri: GOOGLE_REDIRECT_URI,
    grant_type: "authorization_code"
  });
}

async function googleAccessToken() {
  const oauth = await loadGoogleOAuth();
  if (!oauth?.refresh_token) throw new Error("Google Meet account is not connected");
  if (oauth.access_token && Number(oauth.expires_at || 0) > Date.now() + 60 * 1000) return oauth.access_token;

  const refreshed = await googleTokenRequest({
    client_id: GOOGLE_CLIENT_ID,
    client_secret: GOOGLE_CLIENT_SECRET,
    refresh_token: oauth.refresh_token,
    grant_type: "refresh_token"
  });
  const next = {
    ...oauth,
    ...refreshed,
    refresh_token: refreshed.refresh_token || oauth.refresh_token,
    refreshedAt: new Date().toISOString()
  };
  await saveGoogleOAuth(next);
  return next.access_token;
}

async function googleTokenRequest(params) {
  const response = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(params)
  });
  const body = await response.json().catch(() => ({}));
  if (!response.ok) {
    const message = body?.error_description || body?.error || `Google token request failed with ${response.status}`;
    throw new Error(message);
  }
  return {
    ...body,
    expires_at: Date.now() + Number(body.expires_in || 3600) * 1000
  };
}

async function fetchGoogleUserEmail(accessToken) {
  const response = await fetch("https://openidconnect.googleapis.com/v1/userinfo", {
    headers: { Authorization: `Bearer ${accessToken}` }
  });
  const body = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(body?.error_description || "Could not fetch Google user info");
  return body.email || "";
}

async function loadGoogleOAuth() {
  try {
    const raw = await fs.promises.readFile(GOOGLE_OAUTH_FILE, "utf8");
    return JSON.parse(raw);
  } catch (error) {
    if (error.code === "ENOENT") return null;
    throw error;
  }
}

async function saveGoogleOAuth(token) {
  await fs.promises.mkdir(path.dirname(GOOGLE_OAUTH_FILE), { recursive: true });
  await fs.promises.writeFile(GOOGLE_OAUTH_FILE, `${JSON.stringify(token, null, 2)}\n`, { mode: 0o600 });
}

function pruneGoogleOAuthStates() {
  const now = Date.now();
  for (const [state, record] of googleOAuthStates.entries()) {
    if (!record || record.expiresAt < now) googleOAuthStates.delete(state);
  }
}

function redirect(response, location) {
  response.writeHead(302, { Location: location });
  response.end();
}

function migrateSecurity(state) {
  let changed = false;
  for (const account of state.accounts || []) {
    if (account.password && !account.passwordHash) {
      setAccountPassword(account, account.password);
      changed = true;
    }
    if (account.password) {
      delete account.password;
      changed = true;
    }
  }
  return changed;
}

function prepareAdminState(incoming, previous, emailJobs = []) {
  const next = clone(incoming);
  const previousAccounts = new Map((previous.accounts || []).map((account) => [account.id, account]));
  for (const account of next.accounts || []) {
    const previousAccount = previousAccounts.get(account.id);
    const plainPassword = String(account.password || "");
    if (!previousAccount && ["teacher", "student"].includes(account.role) && plainPassword) {
      emailJobs.push({
        name: account.name,
        email: account.email,
        role: account.role,
        password: plainPassword
      });
    }
    if (account.password) {
      setAccountPassword(account, account.password);
      delete account.password;
      continue;
    }
    if (previousAccount) {
      account.passwordHash = previousAccount.passwordHash;
      account.passwordSalt = previousAccount.passwordSalt;
      account.passwordIterations = previousAccount.passwordIterations;
      account.passwordUpdatedAt = previousAccount.passwordUpdatedAt;
    }
    delete account.password;
  }
  migrateSecurity(next);
  return next;
}

function mergeLimitedState(current, incoming, account) {
  const next = clone(current);
  const incomingAccount = (incoming.accounts || []).find((item) => item.id === account.id);
  const currentAccount = (next.accounts || []).find((item) => item.id === account.id);
  if (incomingAccount && currentAccount) {
    currentAccount.presence = incomingAccount.presence || currentAccount.presence;
    currentAccount.lastLoginAt = incomingAccount.lastLoginAt || currentAccount.lastLoginAt;
    currentAccount.lastLogoutAt = incomingAccount.lastLogoutAt || currentAccount.lastLogoutAt;
    currentAccount.lastSeenAt = incomingAccount.lastSeenAt || currentAccount.lastSeenAt;
  }

  if (account.role === "student") {
    const studentId = account.profileId;
    const allowedTests = new Map((incoming.placementTests || []).filter((test) => test.studentId === studentId).map((test) => [test.id, test]));
    next.placementTests = (next.placementTests || []).map((test) => {
      const incomingTest = allowedTests.get(test.id);
      if (!incomingTest || test.studentId !== studentId || test.status === "reviewed") return test;
      return {
        ...test,
        status: ["in_progress", "submitted"].includes(incomingTest.status) ? incomingTest.status : test.status,
        answers: incomingTest.answers || test.answers || {},
        answerAudio: incomingTest.answerAudio || test.answerAudio || {},
        startedAt: incomingTest.startedAt || test.startedAt || null,
        submittedAt: incomingTest.submittedAt || test.submittedAt || null
      };
    });
  }

  return next;
}

function sanitizeStateForAccount(state, account) {
  const safeState = clone(state);
  safeState.accounts = (safeState.accounts || []).map(sanitizeAccount);

  if (account.role === "admin") return safeState;

  const lessonScope = (safeState.lessons || []).filter((lesson) => {
    if (account.role === "teacher") return lesson.teacherId === account.profileId;
    if (account.role === "student") return lesson.studentId === account.profileId;
    return false;
  });
  const teacherIds = new Set(lessonScope.map((lesson) => lesson.teacherId));
  const studentIds = new Set(lessonScope.map((lesson) => lesson.studentId));
  if (account.role === "teacher") teacherIds.add(account.profileId);
  if (account.role === "student") studentIds.add(account.profileId);

  safeState.accounts = safeState.accounts.filter((item) => item.id === account.id);
  safeState.teachers = (safeState.teachers || []).filter((teacher) => teacherIds.has(teacher.id));
  safeState.students = (safeState.students || []).filter((student) => studentIds.has(student.id));
  safeState.lessons = lessonScope;
  safeState.notifications = (safeState.notifications || []).filter((notice) => notice.audience === "all" || notice.audience === account.role);
  safeState.placementTests = account.role === "student" ? (safeState.placementTests || []).filter((test) => test.studentId === account.profileId) : [];
  return safeState;
}

function sanitizeAccount(account) {
  const safeAccount = { ...account };
  delete safeAccount.password;
  delete safeAccount.passwordHash;
  delete safeAccount.passwordSalt;
  delete safeAccount.passwordIterations;
  delete safeAccount.passwordUpdatedAt;
  return safeAccount;
}

function setAccountPassword(account, password) {
  const salt = crypto.randomBytes(16).toString("hex");
  account.passwordSalt = salt;
  account.passwordIterations = PASSWORD_ITERATIONS;
  account.passwordHash = hashPassword(password, salt, PASSWORD_ITERATIONS);
  account.passwordUpdatedAt = new Date().toISOString();
}

function verifyPassword(password, account) {
  if (!account.passwordHash && account.password) return password === account.password;
  if (!account.passwordHash || !account.passwordSalt) return false;
  const attempted = hashPassword(password, account.passwordSalt, Number(account.passwordIterations || PASSWORD_ITERATIONS));
  return timingSafeEqual(attempted, account.passwordHash);
}

async function sendAccountEmails(emailJobs) {
  for (const job of emailJobs) {
    await sendAccountCreatedEmail(job);
  }
}

async function sendAccountCreatedEmail(account) {
  const subject = "Your Asean Hitech account / Tai khoan Asean Hitech cua ban";
  const text = accountEmailText(account);
  const html = accountEmailHtml(account);
  const message = {
    from: SYSTEM_EMAIL_FROM,
    to: account.email,
    subject,
    text,
    html
  };
  if (process.env.SMTP_HOST) {
    await sendSmtpMail(message);
    return;
  }
  if (await canUseSendmail()) {
    await sendSendmail(message);
    return;
  }
  console.log(`[email preview] To: ${account.email}\nSubject: ${subject}\n${text}`);
}

function accountEmailText(account) {
  const role = account.role === "teacher" ? "Teacher / Giáo viên" : "Student / Học viên";
  return [
    `Hello ${account.name},`,
    `Xin chào ${account.name},`,
    "",
    "Your account has been created by the administrator.",
    "Tài khoản của bạn đã được quản trị viên tạo trên hệ thống.",
    "",
    `Role / Vai trò: ${role}`,
    `Email: ${account.email}`,
    `Temporary password / Mật khẩu tạm: ${account.password}`,
    `Login page / Trang đăng nhập: ${PUBLIC_APP_URL}`,
    "",
    "Security recommendation: please change this password on your next login to keep your account secure.",
    "Khuyến nghị bảo mật: vui lòng đổi mật khẩu trong lần đăng nhập tiếp theo để bảo đảm an toàn tài khoản.",
    "",
    "Asean Hitech - AI software company for modern businesses.",
    "Asean Hitech - Công ty phần mềm AI cho doanh nghiệp hiện đại.",
    "This is an automated system email. Please do not reply.",
    "Đây là email tự động từ hệ thống, xin vui lòng không trả lời!"
  ].join("\n");
}

function accountEmailHtml(account) {
  const role = account.role === "teacher" ? "Teacher / Giáo viên" : "Student / Học viên";
  return `
    <div style="font-family:Arial,sans-serif;line-height:1.6;color:#1f2933">
      <p>Hello ${escapeHtml(account.name)},<br />Xin chào ${escapeHtml(account.name)},</p>
      <p>Your account has been created by the administrator.<br />Tài khoản của bạn đã được quản trị viên tạo trên hệ thống.</p>
      <table style="border-collapse:collapse;margin:16px 0">
        <tr><td style="padding:6px 12px;border:1px solid #d9e2ec"><strong>Role / Vai trò</strong></td><td style="padding:6px 12px;border:1px solid #d9e2ec">${escapeHtml(role)}</td></tr>
        <tr><td style="padding:6px 12px;border:1px solid #d9e2ec"><strong>Email</strong></td><td style="padding:6px 12px;border:1px solid #d9e2ec">${escapeHtml(account.email)}</td></tr>
        <tr><td style="padding:6px 12px;border:1px solid #d9e2ec"><strong>Temporary password / Mật khẩu tạm</strong></td><td style="padding:6px 12px;border:1px solid #d9e2ec">${escapeHtml(account.password)}</td></tr>
        <tr><td style="padding:6px 12px;border:1px solid #d9e2ec"><strong>Login page / Trang đăng nhập</strong></td><td style="padding:6px 12px;border:1px solid #d9e2ec"><a href="${escapeHtml(PUBLIC_APP_URL)}">${escapeHtml(PUBLIC_APP_URL)}</a></td></tr>
      </table>
      <p><strong>Security recommendation:</strong> please change this password on your next login to keep your account secure.<br /><strong>Khuyến nghị bảo mật:</strong> vui lòng đổi mật khẩu trong lần đăng nhập tiếp theo để bảo đảm an toàn tài khoản.</p>
      <p style="margin-top:24px">Asean Hitech - AI software company for modern businesses.<br />Asean Hitech - Công ty phần mềm AI cho doanh nghiệp hiện đại.<br />This is an automated system email. Please do not reply.<br />Đây là email tự động từ hệ thống, xin vui lòng không trả lời!</p>
    </div>
  `;
}

async function canUseSendmail() {
  if (!SENDMAIL_PATH || SENDMAIL_PATH === "false") return false;
  try {
    await fs.promises.access(SENDMAIL_PATH, fs.constants.X_OK);
    return true;
  } catch (error) {
    return false;
  }
}

function sendSendmail(message) {
  return new Promise((resolve, reject) => {
    const fromAddress = extractEmailAddress(message.from);
    const child = spawn(SENDMAIL_PATH, ["-t", "-i", "-f", fromAddress], {
      stdio: ["pipe", "ignore", "pipe"]
    });
    let stderr = "";
    child.stderr.on("data", (chunk) => {
      stderr += chunk.toString();
    });
    child.on("error", reject);
    child.on("close", (code) => {
      if (code === 0) resolve();
      else reject(new Error(`sendmail exited with code ${code}: ${stderr.trim()}`));
    });
    child.stdin.end(formatEmailMessage(message));
  });
}

async function sendSmtpMail(message) {
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT || 587);
  const secure = String(process.env.SMTP_SECURE || "").toLowerCase() === "true" || port === 465;
  const username = process.env.SMTP_USER || "";
  const password = process.env.SMTP_PASS || "";
  const fromAddress = extractEmailAddress(message.from);
  const client = new SmtpClient({ host, port, secure });
  await client.connect();
  try {
    await client.command(`EHLO ${process.env.SMTP_HELO || "localhost"}`, 250);
    if (!secure && process.env.SMTP_STARTTLS !== "false") {
      await client.command("STARTTLS", 220);
      client.upgradeToTls(host);
      await client.command(`EHLO ${process.env.SMTP_HELO || "localhost"}`, 250);
    }
    if (username && password) {
      await client.command("AUTH LOGIN", 334);
      await client.command(Buffer.from(username).toString("base64"), 334);
      await client.command(Buffer.from(password).toString("base64"), 235);
    }
    await client.command(`MAIL FROM:<${fromAddress}>`, 250);
    await client.command(`RCPT TO:<${message.to}>`, [250, 251]);
    await client.command("DATA", 354);
    await client.command(formatEmailMessage(message), 250, true);
    await client.command("QUIT", 221).catch(() => {});
  } finally {
    client.close();
  }
}

class SmtpClient {
  constructor({ host, port, secure }) {
    this.host = host;
    this.port = port;
    this.secure = secure;
    this.buffer = "";
    this.waiters = [];
    this.socket = null;
  }

  connect() {
    return new Promise((resolve, reject) => {
      const socket = this.secure ? tls.connect(this.port, this.host, { servername: this.host }) : net.connect(this.port, this.host);
      this.attachSocket(socket);
      socket.once("error", reject);
      this.waitFor([220]).then(resolve, reject);
    });
  }

  attachSocket(socket) {
    this.socket = socket;
    socket.setEncoding("utf8");
    socket.on("data", (chunk) => {
      this.buffer += chunk;
      this.flushWaiters();
    });
    socket.on("error", (error) => {
      this.rejectWaiters(error);
    });
  }

  upgradeToTls(host) {
    this.socket.removeAllListeners("data");
    this.socket.removeAllListeners("error");
    const secureSocket = tls.connect({ socket: this.socket, servername: host });
    this.buffer = "";
    this.attachSocket(secureSocket);
  }

  async command(line, expectedCodes, isData = false) {
    this.socket.write(isData ? `${line}\r\n.\r\n` : `${line}\r\n`);
    return this.waitFor(Array.isArray(expectedCodes) ? expectedCodes : [expectedCodes]);
  }

  waitFor(expectedCodes) {
    return new Promise((resolve, reject) => {
      this.waiters.push({ expectedCodes, resolve, reject });
      this.flushWaiters();
    });
  }

  flushWaiters() {
    if (!this.waiters.length) return;
    const response = completeSmtpResponse(this.buffer);
    if (!response) return;
    this.buffer = this.buffer.slice(response.length);
    const code = Number(response.slice(0, 3));
    const waiter = this.waiters.shift();
    if (waiter.expectedCodes.includes(code)) waiter.resolve(response);
    else waiter.reject(new Error(`SMTP command failed: ${response.trim()}`));
    this.flushWaiters();
  }

  rejectWaiters(error) {
    while (this.waiters.length) this.waiters.shift().reject(error);
  }

  close() {
    if (this.socket) this.socket.end();
  }
}

function completeSmtpResponse(buffer) {
  const lines = buffer.split(/\r?\n/);
  let consumed = 0;
  for (const line of lines) {
    if (!line) break;
    consumed += line.length + 2;
    if (/^\d{3} /.test(line)) return buffer.slice(0, consumed);
  }
  return "";
}

function formatEmailMessage({ from, to, subject, text, html }) {
  const boundary = `asean-${crypto.randomBytes(12).toString("hex")}`;
  const messageId = `<${Date.now()}.${crypto.randomBytes(8).toString("hex")}@asean-vietnam.com>`;
  return [
    `From: ${from}`,
    `To: ${to}`,
    `Subject: ${encodeMimeHeader(subject)}`,
    `Date: ${new Date().toUTCString()}`,
    `Message-ID: ${messageId}`,
    "Auto-Submitted: auto-generated",
    "MIME-Version: 1.0",
    `Content-Type: multipart/alternative; boundary="${boundary}"`,
    "",
    `--${boundary}`,
    "Content-Type: text/plain; charset=utf-8",
    "Content-Transfer-Encoding: 8bit",
    "",
    text,
    `--${boundary}`,
    "Content-Type: text/html; charset=utf-8",
    "Content-Transfer-Encoding: 8bit",
    "",
    html,
    `--${boundary}--`
  ]
    .join("\r\n")
    .replace(/^\./gm, "..");
}

function encodeMimeHeader(value) {
  return /^[\x00-\x7F]*$/.test(value) ? value : `=?UTF-8?B?${Buffer.from(value).toString("base64")}?=`;
}

function extractEmailAddress(value) {
  const match = String(value).match(/<([^>]+)>/);
  return (match ? match[1] : value).trim();
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function hashPassword(password, salt, iterations) {
  return crypto.pbkdf2Sync(password, salt, iterations, 32, "sha256").toString("hex");
}

function timingSafeEqual(left, right) {
  const leftBuffer = Buffer.from(String(left), "hex");
  const rightBuffer = Buffer.from(String(right), "hex");
  return leftBuffer.length === rightBuffer.length && crypto.timingSafeEqual(leftBuffer, rightBuffer);
}

function markAccountOnline(account) {
  const now = new Date().toISOString();
  account.presence = "online";
  account.lastLoginAt = now;
  account.lastSeenAt = now;
}

function markAccountOffline(account) {
  const now = new Date().toISOString();
  account.presence = "offline";
  account.lastLogoutAt = now;
  account.lastSeenAt = now;
}

function readSessionId(request) {
  const authHeader = String(request.headers.authorization || "");
  if (authHeader.toLowerCase().startsWith("bearer ")) {
    const sessionId = readSignedSessionValue(authHeader.slice(7).trim());
    if (sessionId) return sessionId;
  }
  const cookies = parseCookies(request.headers.cookie || "");
  const signedValue = cookies[SESSION_COOKIE];
  return readSignedSessionValue(signedValue);
}

function readSignedSessionValue(signedValue) {
  if (!signedValue) return null;
  const [sessionId, signature] = signedValue.split(".");
  if (!sessionId || !signature) return null;
  const expected = signSessionId(sessionId);
  return timingSafeText(signature, expected) ? sessionId : null;
}

function serializeSessionCookie(request, sessionId) {
  const secure = isHttpsRequest(request) ? "; Secure" : "";
  return `${SESSION_COOKIE}=${signSessionValue(sessionId)}; Path=/; HttpOnly; SameSite=Lax; Max-Age=${Math.floor(SESSION_TTL_MS / 1000)}${secure}`;
}

function clearSessionCookie(request) {
  const secure = isHttpsRequest(request) ? "; Secure" : "";
  return `${SESSION_COOKIE}=; Path=/; HttpOnly; SameSite=Lax; Max-Age=0${secure}`;
}

function signSessionId(sessionId) {
  return crypto.createHmac("sha256", APP_SECRET).update(sessionId).digest("hex");
}

function signSessionValue(sessionId) {
  return `${sessionId}.${signSessionId(sessionId)}`;
}

function timingSafeText(left, right) {
  const leftBuffer = Buffer.from(String(left));
  const rightBuffer = Buffer.from(String(right));
  return leftBuffer.length === rightBuffer.length && crypto.timingSafeEqual(leftBuffer, rightBuffer);
}

function parseCookies(cookieHeader) {
  return Object.fromEntries(
    cookieHeader
      .split(";")
      .map((item) => item.trim())
      .filter(Boolean)
      .map((item) => {
        const index = item.indexOf("=");
        return index === -1 ? [item, ""] : [item.slice(0, index), item.slice(index + 1)];
      })
  );
}

function isHttpsRequest(request) {
  return request.headers["x-forwarded-proto"] === "https";
}

function clone(value) {
  return JSON.parse(JSON.stringify(value));
}

function loadEnvFile(filePath) {
  if (!fs.existsSync(filePath)) return;
  const lines = fs.readFileSync(filePath, "utf8").split(/\r?\n/);
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const separatorIndex = trimmed.indexOf("=");
    if (separatorIndex === -1) continue;
    const key = trimmed.slice(0, separatorIndex).trim();
    const value = trimmed.slice(separatorIndex + 1).trim().replace(/^['"]|['"]$/g, "");
    if (key && process.env[key] === undefined) process.env[key] = value;
  }
}

function readBody(request) {
  return new Promise((resolve, reject) => {
    let body = "";
    request.on("data", (chunk) => {
      body += chunk;
      if (body.length > MAX_BODY_SIZE) {
        const error = new Error("Request body too large");
        error.statusCode = 413;
        request.destroy(error);
      }
    });
    request.on("end", () => resolve(body));
    request.on("error", reject);
  });
}

function serveStatic(request, response) {
  const requestUrl = new URL(request.url, `http://${request.headers.host}`);
  const requestedPathname = decodeURIComponent(requestUrl.pathname);
  const pathname =
    requestedPathname === "/"
      ? "/index.html"
      : requestedPathname.endsWith("/")
        ? `${requestedPathname}index.html`
        : requestedPathname;
  if (pathname.startsWith("/data/")) {
    return sendJson(response, 403, { error: "Data files are only available through the API" });
  }
  const filePath = path.normalize(path.join(ROOT, pathname));

  if (!filePath.startsWith(ROOT)) {
    return sendJson(response, 403, { error: "Forbidden" });
  }

  fs.readFile(filePath, (error, data) => {
    if (error) {
      if (path.extname(filePath)) {
        return sendJson(response, 404, { error: "Not found" });
      }
      return fs.readFile(path.join(ROOT, "index.html"), (indexError, indexData) => {
        if (indexError) return sendJson(response, 404, { error: "Not found" });
        response.writeHead(200, { "Content-Type": contentTypes[".html"] });
        response.end(request.method === "HEAD" ? undefined : indexData);
      });
    }

    const ext = path.extname(filePath);
    response.writeHead(200, {
      "Content-Type": contentTypes[ext] || "application/octet-stream",
      "Cache-Control": ext === ".html" ? "no-store" : "public, max-age=300"
    });
    response.end(request.method === "HEAD" ? undefined : data);
  });
}

function sendJson(response, status, body, headers = {}) {
  response.writeHead(status, {
    "Content-Type": "application/json; charset=utf-8",
    ...headers
  });
  response.end(JSON.stringify(body));
}

const STORAGE_KEY = "asean-english-hub-state-v1";
const SESSION_KEY = "asean-english-hub-current-account";
const AUTH_TOKEN_KEY = "asean-english-hub-session-token";
const CSRF_TOKEN_KEY = "asean-english-hub-csrf-token";
const LANGUAGE_KEY = "asean-english-hub-language";
const NEXA_ASSISTANT_KEY = "asean-english-hub-nexa-assistant";
const SYNC_INTERVAL_MS = 3000;
const LOGO_SRC = "assets/asean-holding-logo.png";
const COPYRIGHT_TEXT = "Bản quyền thuộc về Công ty cổ phần Asean Holding.";
const LANGUAGES = {
  vi: "Tiếng Việt",
  en: "English"
};
const EN_TRANSLATIONS = {
  "Asean Holding English Hub": "Asean Holding English Hub",
  "Tiếng Việt": "Vietnamese",
  "English": "English",
  "Ngôn ngữ": "Language",
  "Nexa AI": "Nexa AI",
  "Trợ lý Nexa AI": "Nexa AI Assistant",
  "Hỏi Nexa AI": "Ask Nexa AI",
  "Nhập câu hỏi về cách sử dụng phần mềm...": "Enter a question about how to use this software...",
  "Nexa AI chỉ hướng dẫn sử dụng phần mềm này và không trả lời nội dung ngoài phạm vi.": "Nexa AI only guides users on this software and does not answer out-of-scope content.",
  "Bản quyền thuộc về Công ty cổ phần Asean Holding.": "Copyright belongs to Asean Holding Joint Stock Company.",
  "Quản lý lớp tiếng Anh online toàn cầu": "Global online English class management",
  "Theo dõi giáo viên Philippines, học viên quốc tế, lịch học, giờ dạy, học phí và phòng video từ một màn hình duy nhất.": "Track Filipino teachers, international students, schedules, teaching hours, tuition and video rooms from one screen.",
  "Giáo viên đang hoạt động": "Active teachers",
  "Học viên nhiều múi giờ": "Students across time zones",
  "Buổi học được quản lý": "Managed lessons",
  "Đăng nhập hệ thống": "System login",
  "Vui lòng đăng nhập bằng tài khoản được admin cấp để sử dụng hệ thống.": "Please sign in with the account provided by admin.",
  "Mật khẩu": "Password",
  "Đăng nhập": "Sign in",
  "Email hoặc mật khẩu không đúng, hoặc tài khoản đã bị khóa.": "Email or password is incorrect, or the account has been locked.",
  "Điều hướng": "Navigation",
  "Máy chủ VPS đang kết nối": "VPS server connected",
  "Chế độ local/demo": "Local/demo mode",
  "Dữ liệu lưu qua API /api/state.": "Data is saved through /api/state.",
  "Dữ liệu lưu trên trình duyệt cho đến khi chạy server.js.": "Data is stored in this browser until server.js is running.",
  "Đăng xuất": "Sign out",
  "Tải dữ liệu JSON": "Download JSON data",
  "Sao lưu": "Backup",
  "Không tìm thấy màn hình phù hợp.": "No matching screen found.",
  "Không có lớp đang gọi": "No live classes",
  "Tổng quan": "Overview",
  "Lịch học": "Schedule",
  "Thông báo": "Notifications",
  "Hồ sơ": "Profile",
  "Tài khoản": "Accounts",
  "Tài chính": "Finance",
  "Test đầu vào": "Placement tests",
  "Cài đặt": "Settings",
  "Tiền dạy": "Teaching pay",
  "Học phí": "Tuition",
  "Tổng quan vận hành": "Operations overview",
  "Xếp lịch học": "Schedule lessons",
  "Quản lý tài khoản": "Account management",
  "Tiền dạy giáo viên": "Teacher pay",
  "Thông báo nhắc nhở": "Reminders",
  "Trung tâm video call": "Video call center",
  "Cài đặt hệ thống": "System settings",
  "Admin quản lý": "Admin",
  "Giáo viên": "Teacher",
  "Học viên": "Student",
  "Tất cả": "All",
  "Không áp dụng": "Not applicable",
  "Chưa có hoạt động": "No activity yet",
  "Lịch học gần nhất": "Recent lessons",
  "Admin có thể mở phòng video, đánh dấu hoàn thành hoặc hủy buổi học.": "Admin can open video rooms, mark lessons completed or cancel lessons.",
  "Xếp lịch": "Schedule",
  "Tài chính nhanh": "Finance snapshot",
  "Đang quản lý tại Philippines": "Managed in the Philippines",
  "Học viên toàn cầu": "Global students",
  "Lớp hôm nay": "Today's classes",
  "Theo múi giờ hệ thống": "Based on the system time zone",
  "Lợi nhuận tạm tính": "Estimated profit",
  "Doanh thu trừ lương giáo viên": "Revenue minus teacher pay",
  "Trả giáo viên": "Teacher payable",
  "Thu học viên": "Student receivable",
  "Số giờ học": "Study hours",
  "Tổng giờ hợp lệ": "Total valid hours",
  "Phải trả GV": "Teacher payable",
  "Phải thu HV": "Student receivable",
  "Theo đơn giá học viên": "Based on student rates",
  "Số giờ hợp lệ": "Valid hours",
  "Biên lợi nhuận": "Profit margin",
  "Trước chi phí vận hành": "Before operating costs",
  "Số liệu tính theo các buổi chưa hủy.": "Figures are based on non-cancelled lessons.",
  "Quy tắc video call": "Video call rules",
  "Giáo viên và học viên chỉ vào được phòng khi admin mở lớp từ trung tâm video.": "Teachers and students can only enter once admin opens the class from the video center.",
  "Phòng học video": "Video classroom",
  "Admin có thể mở nhiều lớp cùng lúc. Mỗi buổi học có một phòng riêng và vẫn hoạt động độc lập.": "Admin can open multiple classes at the same time. Each lesson has its own independent room.",
  "Nền tảng": "Platform",
  "Phòng dự phòng": "Fallback room",
  "Lớp này dùng Google Meet": "This class uses Google Meet",
  "Giáo viên và học viên bấm nút bên dưới để mở phòng học trong tab mới. Link này đã được lưu vào lịch học của buổi này.": "Teachers and students click the button below to open the classroom in a new tab. This link is saved in this lesson schedule.",
  "Mở Google Meet": "Open Google Meet",
  "Google Meet link đã lưu trong lịch học": "Google Meet link saved in the schedule",
  "Đang dùng phòng video dự phòng": "Using fallback video room",
  "Chọn một phòng đang mở": "Choose an open room",
  "Chưa có phòng học đang mở": "No classroom is open",
  "Bấm Vào lại ở lớp cần theo dõi để mở đúng phòng video.": "Click rejoin on the class you want to monitor.",
  "Khi admin bấm mở lớp, giáo viên và học viên của buổi đó sẽ thấy nút vào phòng video.": "When admin opens a class, its teacher and student will see the video room entry button.",
  "Lớp có thể mở": "Classes that can be opened",
  "Lớp của bạn": "Your classes",
  "Admin có thể mở thêm lớp dù đang có lớp khác hoạt động.": "Admin can open another class even while other classes are active.",
  "Bạn chỉ vào được phòng khi admin đã bắt đầu buổi học.": "You can enter only after admin starts the lesson.",
  "Tạo lịch học": "Create lesson",
  "Sửa phân công và lịch học": "Edit assignment and schedule",
  "Xếp giáo viên, học viên, số giờ và đơn giá cho từng buổi học.": "Assign teacher, student, hours and rates for each lesson.",
  "Xếp giáo viên dạy từng học viên, chọn giờ học và hệ thống sẽ cảnh báo nếu giáo viên hoặc học viên bị trùng lịch.": "Assign teachers to students, choose lesson times and the system will warn if a teacher or student has a schedule conflict.",
  "Tên buổi học": "Lesson name",
  "Ngày học": "Lesson date",
  "Giờ bắt đầu": "Start time",
  "Số giờ": "Hours",
  "Tiền giáo viên/buổi": "Teacher pay/session",
  "Học phí học viên/buổi": "Student tuition/session",
  "Link Google Meet": "Google Meet link",
  "Không bắt buộc. Admin có thể tạo link trên Google Meet rồi dán vào đây để hệ thống không dùng API.": "Optional. Admin can create a link on Google Meet and paste it here so the system does not use an API.",
  "Link Google Meet phải có dạng https://meet.google.com/...": "Google Meet link must look like https://meet.google.com/...",
  "Đã gắn link Google Meet": "Google Meet link attached",
  "Chưa gắn link Google Meet": "No Google Meet link attached",
  "Ghi chú": "Notes",
  "Lưu lịch học": "Save lesson",
  "Cập nhật lịch học": "Update lesson",
  "Hủy sửa": "Cancel editing",
  "Khi lưu lịch, hệ thống sẽ kiểm tra các buổi chưa hủy có cùng khoảng thời gian. Nếu giáo viên hoặc học viên bị trùng lịch, admin sẽ nhận cảnh báo trước khi tiếp tục.": "When saving, the system checks non-cancelled lessons with overlapping times. If a teacher or student has a conflict, admin will receive a warning before continuing.",
  "Trung tâm video": "Video center",
  "Phân công giáo viên - học viên": "Teacher-student assignments",
  "Một giáo viên có thể dạy nhiều học viên và một học viên có thể học nhiều giáo viên, miễn là lịch không trùng nhau.": "One teacher can teach many students, and one student can study with many teachers, as long as schedules do not overlap.",
  "Chưa phân công giáo viên": "No teacher assigned",
  "Chưa có lịch sắp tới": "No upcoming lesson",
  "Đổi giáo viên hoặc giờ học bằng nút Sửa ở từng buổi trong danh sách lịch học.": "Change the teacher or lesson time with the Edit button on each lesson in the schedule list.",
  "Danh sách buổi học": "Lesson list",
  "Quản lý trạng thái, phòng học và các khoản tạm tính theo từng buổi.": "Manage status, classroom and estimated amounts for each lesson.",
  "Tạo tài khoản": "Create account",
  "Admin tạo tài khoản cho quản trị viên, giáo viên và học viên.": "Admin creates accounts for administrators, teachers and students.",
  "Phân quyền": "Role",
  "Họ tên": "Full name",
  "Mật khẩu tạm": "Temporary password",
  "Quốc gia": "Country",
  "Thành phố": "City",
  "Múi giờ": "Time zone",
  "Đơn giá/giờ": "Rate/hour",
  "Trình độ hoặc chuyên môn": "Level or specialty",
  "Mục tiêu học hoặc ghi chú": "Learning goal or notes",
  "Danh sách giáo viên, quốc gia, chuyên môn và mức lương.": "Teacher list, country, specialties and pay rate.",
  "Danh sách học viên, mục tiêu học và học phí.": "Student list, learning goals and tuition.",
  "Tài khoản hệ thống": "System accounts",
  "Khóa hoặc mở lại tài khoản khi cần.": "Lock or unlock accounts when needed.",
  "Đóng": "Close",
  "Trạng thái": "Status",
  "Đang hoạt động": "Active",
  "Đã khóa": "Locked",
  "Lương/giờ": "Pay/hour",
  "Chuyên môn": "Specialty",
  "Trình độ": "Level",
  "Mục tiêu học": "Learning goal",
  "Lưu thay đổi": "Save changes",
  "Xóa tài khoản": "Delete account",
  "Google Meet không dùng API": "Google Meet without API",
  "Admin tạo link trực tiếp trên Google Meet rồi dán vào từng buổi học. Hệ thống chỉ lưu link và mở khi bấm Vào lớp, không dùng Google Cloud API hoặc token tính phí.": "Admin creates the link directly in Google Meet and pastes it into each lesson. The system only stores the link and opens it when users click Join class, without Google Cloud API or billable tokens.",
  "Bảng lương giáo viên": "Teacher payroll",
  "Gộp theo giáo viên: số buổi, số giờ dạy, số tiền tạm tính.": "Grouped by teacher: sessions, teaching hours and estimated pay.",
  "Xuất Excel": "Export Excel",
  "Xuất CSV": "Export CSV",
  "Công nợ học viên": "Student receivables",
  "Gộp theo học viên: lịch học, số giờ và số tiền cần thu.": "Grouped by student: lessons, hours and amount to collect.",
  "Tài khoản giáo viên chưa gắn hồ sơ.": "This teacher account is not linked to a profile.",
  "Tài khoản học viên chưa gắn hồ sơ.": "This student account is not linked to a profile.",
  "Lịch dạy sắp tới": "Upcoming teaching schedule",
  "Giáo viên có thể mở lớp khi đến giờ học theo lịch admin đã tạo.": "Teachers can open the class when it is time for a scheduled lesson created by admin.",
  "Học viên phụ trách": "Assigned students",
  "Số buổi, số giờ và tiền tạm tính theo từng học viên.": "Sessions, hours and estimated pay by student.",
  "Thời khóa biểu": "Timetable",
  "Lịch học, giáo viên, số giờ và trạng thái vào lớp.": "Lessons, teachers, hours and class entry status.",
  "Giáo viên của bạn": "Your teachers",
  "Danh sách giáo viên đã hoặc đang phụ trách.": "Teachers who have taught or are assigned to you.",
  "Chưa có giáo viên phụ trách.": "No assigned teacher yet.",
  "Lịch dạy": "Teaching schedule",
  "Theo dõi thời khóa biểu, số giờ và trạng thái lớp.": "Track timetable, hours and class status.",
  "Chi tiết tiền dạy": "Pay details",
  "Mỗi buổi học có số tiền giáo viên riêng do admin nhập.": "Each lesson has its own teacher payment entered by admin.",
  "Chi tiết học phí": "Tuition details",
  "Học phí được tính theo số tiền từng buổi do admin nhập.": "Tuition is calculated from the per-session amount entered by admin.",
  "Tính năng test đầu vào chỉ dành cho admin và học viên.": "Placement tests are only available to admin and students.",
  "Tạo test đầu vào": "Create placement test",
  "Chọn học viên và mẫu có sẵn, hệ thống sẽ lưu bài test vào tài khoản admin và học viên.": "Choose a student and template; the test will be saved for both admin and student.",
  "Mẫu bài test": "Test template",
  "Tên bài test": "Test name",
  "Thời gian làm bài (phút)": "Duration (minutes)",
  "Hạn hoàn thành": "Due date",
  "Giao bài test": "Assign test",
  "Mẫu test có sẵn": "Available test templates",
  "Admin có thể tạo mẫu mới hoặc chỉnh sửa các mẫu đang dùng để giao bài test đầu vào.": "Admin can create new templates or edit existing templates for placement tests.",
  "Tạo mẫu": "Create template",
  "Bài test của học viên": "Student tests",
  "Admin xem đáp án, cập nhật điểm đánh giá và lộ trình giảng dạy riêng cho từng học viên.": "Admin reviews answers, scores and teaching paths for each student.",
  "Chưa có bài test đầu vào nào.": "No placement tests yet.",
  "Test đầu vào của bạn": "Your placement tests",
  "Hoàn thành bài test để admin đánh giá và xây dựng lộ trình học phù hợp.": "Complete the test so admin can evaluate and build a suitable learning path.",
  "Admin chưa giao bài test đầu vào.": "Admin has not assigned a placement test yet.",
  "Sửa mẫu": "Edit template",
  "Chỉnh sửa mẫu test": "Edit test template",
  "Tạo mẫu test mới": "Create new test template",
  "Mỗi dòng câu hỏi sẽ trở thành một câu trả lời tự luận trong bài test của học viên.": "Each question line becomes a written-answer item in the student's test.",
  "Tên mẫu": "Template name",
  "Trình độ mục tiêu": "Target level",
  "Thời gian (phút)": "Duration (minutes)",
  "Mô tả": "Description",
  "Lưu mẫu test": "Save test template",
  "Tạo mẫu test": "Create test template",
  "Hủy sửa": "Cancel editing",
  "Audio phần Nghe": "Listening audio",
  "Chưa có audio cho phần nghe.": "No listening audio yet.",
  "Câu hỏi": "Questions",
  "Mỗi dòng là một câu hỏi": "One question per line",
  "Đáp án học viên": "Student answers",
  "Đánh giá và lộ trình": "Evaluation and learning path",
  "Nộp bài test": "Submit test",
  "Quay lại danh sách": "Back to list",
  "Chọn đáp án": "Choose an answer",
  "Bắt đầu ghi âm": "Start recording",
  "Dừng ghi": "Stop recording",
  "Chưa có bản ghi.": "No recording yet.",
  "Bản ghi nói của học viên": "Student speaking recording",
  "Học viên chưa bắt đầu bài test.": "The student has not started the test.",
  "Học viên đang làm bài test.": "The student is taking the test.",
  "Chưa trả lời": "No answer",
  "Nhận xét đầu vào": "Placement feedback",
  "Lộ trình giảng dạy đề xuất": "Suggested teaching path",
  "Lưu đánh giá": "Save evaluation",
  "Điểm trung bình": "Average score",
  "Ngày nộp": "Submitted date",
  "Nhận xét từ admin": "Feedback from admin",
  "Lộ trình học đề xuất": "Suggested learning path",
  "Đang chờ đánh giá": "Waiting for review",
  "Admin sẽ cập nhật điểm và lộ trình học sau khi xem bài làm.": "Admin will update scores and learning path after reviewing the submission.",
  "Tạo thông báo nhắc nhở": "Create reminder",
  "Gửi thông báo cho toàn hệ thống, giáo viên hoặc học viên.": "Send a notice to the whole system, teachers or students.",
  "Người nhận": "Recipients",
  "Tiêu đề": "Title",
  "Nội dung": "Content",
  "Gửi thông báo": "Send notice",
  "Các nhắc nhở từ admin về lịch học, phòng video và báo cáo lớp.": "Admin reminders about schedules, video rooms and class reports.",
  "Chưa có thông báo phù hợp.": "No matching notifications.",
  "Phòng học video": "Video classroom",
  "Admin có thể mở nhiều lớp cùng lúc. Mỗi buổi học có một phòng riêng và vẫn hoạt động độc lập.": "Admin can open multiple classes at the same time. Each lesson has its own room and works independently.",
  "Kết thúc lớp này": "End this class",
  "Buổi học": "Lesson",
  "Chọn một phòng đang mở": "Choose an open room",
  "Chưa có phòng học đang mở": "No classroom is currently open",
  "Bấm Vào lại ở lớp cần theo dõi để mở đúng phòng video.": "Click Re-enter on the class you need to monitor to open the correct video room.",
  "Khi admin bấm mở lớp, giáo viên và học viên của buổi đó sẽ thấy nút vào phòng video.": "When admin opens a class, that lesson's teacher and student will see the video room button.",
  "Lớp có thể mở": "Classes available to open",
  "Lớp của bạn": "Your classes",
  "Admin có thể mở thêm lớp dù đang có lớp khác hoạt động.": "Admin can open more classes even while other classes are active.",
  "Bạn chỉ vào được phòng khi admin đã bắt đầu buổi học.": "You can only enter once admin has started the lesson.",
  "Vào lại": "Re-enter",
  "Đang xem": "Viewing",
  "Dừng": "Stop",
  "Cấu hình máy chủ": "Server configuration",
  "Dữ liệu có thể lưu trên VPS của admin qua server.js.": "Data can be saved on the admin VPS through server.js.",
  "Trạng thái lưu trữ": "Storage status",
  "Đang kết nối API /api/state, thay đổi sẽ ghi vào data/asean-hub.json trên máy chủ.": "Connected to /api/state; changes will be saved to data/asean-hub.json on the server.",
  "Hiện đang ở chế độ local/demo. Chạy node server.js để dùng lưu trữ trên máy chủ.": "Currently in local/demo mode. Run node server.js to use server storage.",
  "Triển khai VPS": "VPS deployment",
  "Đặt mã nguồn lên VPS, chạy lệnh node server.js, mở cổng 4173 hoặc cấu hình PORT, sau đó trỏ domain và bật HTTPS.": "Place the source on the VPS, run node server.js, open port 4173 or configure PORT, then point the domain and enable HTTPS.",
  "Bước sản phẩm thật": "Production steps",
  "Khi vận hành thật nên thay mật khẩu demo bằng đăng nhập bảo mật, mã hóa mật khẩu, phân quyền API và database như PostgreSQL.": "For real operation, replace demo passwords with secure login, password hashing, API authorization and a database such as PostgreSQL.",
  "Đơn giá mặc định": "Default rates",
  "Áp dụng khi tạo lịch hoặc tài khoản mới nếu chưa nhập đơn giá riêng.": "Used when creating lessons or accounts if no custom rate is entered.",
  "Tiền tệ": "Currency",
  "Lương giáo viên mặc định/giờ": "Default teacher pay/hour",
  "Học phí mặc định/giờ": "Default tuition/hour",
  "Lưu cấu hình": "Save settings",
  "Tài khoản chưa gắn hồ sơ.": "This account is not linked to a profile.",
  "Hồ sơ cá nhân": "Personal profile",
  "Thông tin tài khoản được admin quản lý.": "Account information is managed by admin.",
  "Đổi mật khẩu": "Change password",
  "Giáo viên và học viên có thể tự đổi mật khẩu truy cập tài khoản.": "Teachers and students can change their own account password.",
  "Mật khẩu hiện tại": "Current password",
  "Mật khẩu mới": "New password",
  "Nhập lại mật khẩu mới": "Confirm new password",
  "Cập nhật mật khẩu": "Update password",
  "Mật khẩu mới phải có ít nhất 8 ký tự.": "The new password must be at least 8 characters.",
  "Mật khẩu mới nhập lại chưa khớp.": "The new password confirmation does not match.",
  "Mật khẩu hiện tại không đúng.": "The current password is incorrect.",
  "Đã đổi mật khẩu. Vui lòng dùng mật khẩu mới cho lần đăng nhập tiếp theo.": "Password changed. Please use the new password for your next login.",
  "Chưa có buổi học nào.": "No lessons yet.",
  "Thời gian": "Time",
  "Tạm tính": "Estimated",
  "Tạm tính theo lịch chưa hủy": "Estimated from non-cancelled lessons",
  "Thao tác": "Actions",
  "Khu vực": "Location",
  "Lương": "Pay",
  "Mục tiêu": "Goal",
  "Trực tuyến": "Presence",
  "Ngày tạo": "Created date",
  "Số buổi": "Sessions",
  "Đã dạy": "Taught",
  "Tạm tính phải trả": "Estimated payable",
  "Đã học": "Studied",
  "Tạm tính phải thu": "Estimated receivable",
  "Chưa có học viên được phân công.": "No assigned students yet.",
  "Sửa": "Edit",
  "Khóa": "Lock",
  "Mở": "Unlock",
  "Xóa": "Delete",
  "Vào lớp": "Enter class",
  "Chờ admin": "Waiting for admin",
  "Mở lớp": "Open class",
  "Hoàn thành": "Complete",
  "Đặt lại": "Reset",
  "Hủy": "Cancel",
  "Xóa buổi học": "Delete lesson",
  "Xóa buổi học này khỏi hệ thống?": "Delete this lesson from the system?",
  "Đã xếp lịch": "Scheduled",
  "Đã hủy": "Cancelled",
  "Đang gọi": "Live call",
  "Đã giao": "Assigned",
  "Đang làm": "In progress",
  "Đã nộp": "Submitted",
  "Đã đánh giá": "Reviewed",
  "Nghe": "Listening",
  "Nói": "Speaking",
  "Đọc": "Reading",
  "Đọc hiểu": "Reading comprehension",
  "Hiểu": "Comprehension",
  "Hiểu và phản hồi": "Comprehension and response",
  "Hiểu và phản biện": "Comprehension and reasoning",
  "Phát âm": "Pronunciation",
  "Nhập hướng dẫn, đoạn đọc/nghe mô phỏng hoặc tiêu chí đánh giá...": "Enter instructions, simulated reading/listening text or scoring criteria...",
  "Bạn có thể ghi chú ngắn câu trả lời, phần chính hãy bấm mic để ghi âm...": "You can note a short answer; use the mic button for the main spoken response...",
  "Nhập câu trả lời bằng tiếng Anh hoặc ghi chú phát âm...": "Enter an English answer or pronunciation notes...",
  "Ví dụ: IELTS speaking - Visa interview": "Example: IELTS speaking - Visa interview",
  "Mục tiêu học, tài liệu cần chuẩn bị, yêu cầu riêng...": "Learning goals, materials to prepare, special requests...",
  "Giáo viên: lương, học viên: học phí": "Teacher: pay, student: tuition",
  "Du học, phỏng vấn, giao tiếp...": "Study abroad, interview, communication...",
  "Để trống để dùng tên mẫu": "Leave blank to use template name",
  "Ví dụ: Business English Entry Test": "Example: Business English Entry Test",
  "Mất kết nối máy chủ, dữ liệu tạm lưu trên thiết bị này.": "Server connection lost; data is temporarily saved on this device.",
  "Phiên đăng nhập đã hết hạn. Vui lòng đăng nhập lại.": "Your session has expired. Please sign in again.",
  "Chỉ admin được thực hiện thao tác này.": "Only admin can perform this action.",
  "Thông tin lịch học chưa hợp lệ.": "Lesson information is invalid.",
  "Vui lòng nhập đủ họ tên, email và mật khẩu.": "Please enter full name, email and password.",
  "Vui lòng nhập đủ họ tên và email.": "Please enter full name and email.",
  "Không tìm thấy buổi học cần sửa.": "Could not find the lesson to edit.",
  "Đã cập nhật phân công và lịch học.": "Assignment and schedule updated.",
  "Tạo lịch lặp hằng tuần": "Create weekly recurring schedule",
  "Tạo nhanh nhiều buổi học theo tuần cho cùng một giáo viên và học viên.": "Quickly create multiple weekly lessons for the same teacher and student.",
  "Số tuần": "Weeks",
  "Ngày học trong tuần": "Class days in the week",
  "Tạo lịch lặp": "Create recurring schedule",
  "Import lịch CSV": "Import schedule CSV",
  "Dán nhiều dòng lịch học, hệ thống sẽ tạo hàng loạt và bỏ qua dòng bị trùng lịch.": "Paste multiple lesson rows; the system will create them in bulk and skip schedule conflicts.",
  "Dữ liệu CSV": "CSV data",
  "Import CSV": "Import CSV",
  "Bạn có lịch học mới": "You have a new lesson",
  "Lịch học đã được cập nhật": "Lesson schedule updated",
  "CSV cần có dòng tiêu đề và ít nhất một dòng dữ liệu.": "CSV needs a header row and at least one data row.",
  "Vào lớp": "Join class",
  "Xem lịch": "View schedule",
  "Admin đã mở phòng video cho lớp học.": "Admin opened the video room for this class.",
  "Cảnh báo trùng lịch": "Schedule conflict warning",
  "Bạn vẫn muốn lưu lịch học này?": "Do you still want to save this lesson?",
  "Email này đã tồn tại trong hệ thống.": "This email already exists in the system.",
  "Đã tạo tài khoản mới. Hệ thống sẽ gửi email song ngữ chứa mật khẩu tạm và khuyến nghị đổi mật khẩu cho giáo viên/học viên.": "Account created. The system will send a bilingual email with the temporary password and password-change recommendation to the teacher/student.",
  "Chỉ sửa trực tiếp tài khoản giáo viên hoặc học viên tại đây.": "Only teacher or student accounts can be edited here.",
  "Không tìm thấy tài khoản cần sửa.": "Could not find the account to edit.",
  "Tài khoản chưa gắn hồ sơ phù hợp.": "This account is not linked to a matching profile.",
  "Chỉ có thể xóa tài khoản giáo viên hoặc học viên tại đây.": "Only teacher or student accounts can be deleted here.",
  "Không thể xóa tài khoản đang đăng nhập.": "Cannot delete the currently signed-in account.",
  "Vui lòng chọn học viên và mẫu test hợp lệ.": "Please choose a valid student and test template.",
  "Không tìm thấy bài test phù hợp.": "Could not find a matching test.",
  "Trình duyệt chưa hỗ trợ ghi âm microphone.": "This browser does not support microphone recording.",
  "Đang có một bản ghi khác. Hãy dừng bản ghi hiện tại trước.": "Another recording is in progress. Please stop it first.",
  "Không thể mở microphone. Hãy kiểm tra quyền truy cập mic của trình duyệt.": "Cannot open the microphone. Please check the browser microphone permission.",
  "Để trống nếu giữ mật khẩu hiện tại": "Leave blank to keep the current password",
  "Không thể nộp bài test này.": "Cannot submit this test.",
  "Bài test chưa có đáp án để đánh giá.": "This test has no answers to evaluate.",
  "Vui lòng nhập tên, mô tả và ít nhất một câu hỏi cho mẫu test.": "Please enter a title, description and at least one question for the template.",
  "Chỉ admin hoặc giáo viên của buổi học có quyền bắt đầu video call.": "Only admin or the assigned teacher can start this video call.",
  "Không thể mở phòng cho buổi học này.": "Cannot open a room for this lesson.",
  "Chỉ admin có quyền kết thúc video call.": "Only admin can end a video call.",
  "Không tìm thấy lớp đang mở.": "No open class found.",
  "Admin chưa mở phòng cho buổi học này.": "Admin has not opened a room for this lesson.",
  "Chỉ admin được xuất báo cáo Excel.": "Only admin can export the Excel report.",
  "Đã tạo lịch học mới.": "New lesson created.",
  "Đã tạo tài khoản mới.": "New account created.",
  "Đã cập nhật tài khoản.": "Account updated.",
  "Đã xóa tài khoản và dữ liệu liên quan.": "Account and related data deleted.",
  "Đã giao bài test đầu vào cho học viên.": "Placement test assigned to the student.",
  "Đã lưu bài test.": "Test saved.",
  "Đã nộp bài test cho admin đánh giá.": "Test submitted for admin review.",
  "Đã lưu đánh giá và lộ trình cho học viên.": "Evaluation and learning path saved for the student.",
  "Đã cập nhật mẫu test.": "Test template updated.",
  "Đã tạo mẫu test mới.": "New test template created.",
  "Đã gửi thông báo.": "Notification sent.",
  "Đã lưu cấu hình.": "Settings saved.",
  "Đã mở phòng video cho lớp học.": "Video room opened for the class.",
  "Đã kết thúc phòng video của lớp này.": "The video room for this class has ended.",
  "Đã cập nhật trạng thái buổi học.": "Lesson status updated.",
  "Đã xóa buổi học.": "Lesson deleted.",
  "Đã cập nhật trạng thái tài khoản.": "Account status updated."
};
const PLACEMENT_TEST_TEMPLATES = [
  {
    id: "template-foundation-a1-a2",
    title: "Foundation English Placement",
    level: "A1-A2",
    durationMinutes: 45,
    description: "Đánh giá nền tảng nghe, nói, đọc hiểu và phát âm cho học viên mới bắt đầu hoặc mất gốc.",
    sections: [
      {
        key: "listening",
        title: "Nghe",
        prompt: "Học viên đọc tình huống như một đoạn nghe mô phỏng, sau đó chọn đáp án phù hợp.",
        questions: [
          {
            id: "l1",
            type: "select",
            question: "Audio prompt: Anna says she studies English every Tuesday and Thursday evening. When does Anna study English?",
            options: ["Monday and Friday", "Tuesday and Thursday evening", "Every morning"],
            answer: "Tuesday and Thursday evening",
            points: 10
          },
          {
            id: "l2",
            type: "select",
            question: "Audio prompt: The class starts at 7:30 PM and finishes at 8:30 PM. How long is the class?",
            options: ["30 minutes", "1 hour", "2 hours"],
            answer: "1 hour",
            points: 10
          }
        ]
      },
      {
        key: "speaking",
        title: "Nói",
        prompt: "Học viên trả lời bằng tiếng Anh. Admin có thể phỏng vấn trực tiếp hoặc yêu cầu học viên ghi câu trả lời.",
        questions: [
          {
            id: "s1",
            type: "textarea",
            question: "Introduce yourself in 4-5 sentences: name, city, job/study, and why you want to learn English.",
            points: 10
          },
          {
            id: "s2",
            type: "textarea",
            question: "Describe your daily routine using simple present tense.",
            points: 10
          }
        ]
      },
      {
        key: "reading",
        title: "Đọc hiểu",
        prompt: "Read: Minh works in Hanoi. He needs English for emails and short meetings. He can read simple messages but feels nervous when speaking.",
        questions: [
          {
            id: "r1",
            type: "select",
            question: "Why does Minh need English?",
            options: ["For emails and meetings", "For cooking", "For travel only"],
            answer: "For emails and meetings",
            points: 10
          },
          {
            id: "r2",
            type: "select",
            question: "What is difficult for Minh?",
            options: ["Speaking", "Reading simple messages", "Writing his name"],
            answer: "Speaking",
            points: 10
          }
        ]
      },
      {
        key: "comprehension",
        title: "Hiểu và phản hồi",
        prompt: "Kiểm tra khả năng hiểu yêu cầu và phản hồi đúng ngữ cảnh.",
        questions: [
          {
            id: "c1",
            type: "textarea",
            question: "A customer asks: 'Can we move the meeting to Friday?' Write a short polite reply.",
            points: 10
          }
        ]
      },
      {
        key: "pronunciation",
        title: "Phát âm",
        prompt: "Admin yêu cầu học viên đọc to các câu sau và ghi nhận lỗi âm cuối, trọng âm, nối âm.",
        questions: [
          {
            id: "p1",
            type: "textarea",
            question: "Read aloud: 'I usually practice English in the evening because I want to speak clearly.' Note any words you find difficult.",
            points: 10
          }
        ]
      }
    ]
  },
  {
    id: "template-communication-a2-b1",
    title: "Communication Placement",
    level: "A2-B1",
    durationMinutes: 60,
    description: "Đánh giá khả năng giao tiếp công việc, phản xạ câu hỏi, đọc hiểu email và phát âm các âm dễ nhầm.",
    sections: [
      {
        key: "listening",
        title: "Nghe",
        prompt: "Học viên đọc đoạn nghe mô phỏng hoặc admin đọc đoạn này trong buổi kiểm tra.",
        questions: [
          {
            id: "l1",
            type: "select",
            question: "Audio prompt: The client wants a short update before noon and a full report by 5 PM. What does the client need first?",
            options: ["A full report", "A short update", "A new contract"],
            answer: "A short update",
            points: 10
          },
          {
            id: "l2",
            type: "textarea",
            question: "Summarize the request in one English sentence.",
            points: 10
          }
        ]
      },
      {
        key: "speaking",
        title: "Nói",
        prompt: "Học viên trả lời bằng tiếng Anh, ưu tiên độ trôi chảy và khả năng triển khai ý.",
        questions: [
          {
            id: "s1",
            type: "textarea",
            question: "Talk about a recent work or study challenge. What happened and how did you solve it?",
            points: 10
          },
          {
            id: "s2",
            type: "textarea",
            question: "Role-play: Ask a colleague to clarify a task you do not understand.",
            points: 10
          }
        ]
      },
      {
        key: "reading",
        title: "Đọc hiểu",
        prompt: "Read: Thank you for joining the trial class. Based on your speaking goal, we recommend two conversation lessons per week and one pronunciation review every Friday.",
        questions: [
          {
            id: "r1",
            type: "select",
            question: "How many conversation lessons are recommended each week?",
            options: ["One", "Two", "Five"],
            answer: "Two",
            points: 10
          },
          {
            id: "r2",
            type: "select",
            question: "What happens every Friday?",
            options: ["Pronunciation review", "Grammar test", "Payment reminder"],
            answer: "Pronunciation review",
            points: 10
          }
        ]
      },
      {
        key: "comprehension",
        title: "Hiểu và phản hồi",
        prompt: "Đánh giá khả năng hiểu ý chính và trả lời có tổ chức.",
        questions: [
          {
            id: "c1",
            type: "textarea",
            question: "Write 3 learning priorities for a student who wants business communication.",
            points: 10
          }
        ]
      },
      {
        key: "pronunciation",
        title: "Phát âm",
        prompt: "Tập trung âm /θ/, /ð/, âm cuối và trọng âm câu.",
        questions: [
          {
            id: "p1",
            type: "textarea",
            question: "Read aloud: 'This Thursday, they will think about three things together.' Note difficult sounds.",
            points: 10
          }
        ]
      }
    ]
  },
  {
    id: "template-academic-b1-b2",
    title: "IELTS / Academic Placement",
    level: "B1-B2",
    durationMinutes: 75,
    description: "Đánh giá học viên có mục tiêu IELTS, du học hoặc phỏng vấn học thuật.",
    sections: [
      {
        key: "listening",
        title: "Nghe",
        prompt: "Admin có thể đọc prompt như phần listening ngắn, học viên ghi ý chính và chi tiết.",
        questions: [
          {
            id: "l1",
            type: "textarea",
            question: "Audio prompt: A student discusses choosing Canada because of program quality, post-graduation work options, and safety. Write the three reasons.",
            points: 10
          },
          {
            id: "l2",
            type: "select",
            question: "Which reason is related to career after graduation?",
            options: ["Program quality", "Post-graduation work options", "Safety"],
            answer: "Post-graduation work options",
            points: 10
          }
        ]
      },
      {
        key: "speaking",
        title: "Nói",
        prompt: "Mô phỏng IELTS Speaking Part 2 và Part 3.",
        questions: [
          {
            id: "s1",
            type: "textarea",
            question: "Describe an English learning goal you want to achieve. Explain why it matters and how you will measure progress.",
            points: 10
          },
          {
            id: "s2",
            type: "textarea",
            question: "Do you think online learning can be as effective as offline learning? Give reasons and examples.",
            points: 10
          }
        ]
      },
      {
        key: "reading",
        title: "Đọc hiểu",
        prompt: "Read: A structured learning plan should diagnose current ability, define measurable goals, assign weekly practice, and review progress every month.",
        questions: [
          {
            id: "r1",
            type: "select",
            question: "What should happen before defining a learning plan?",
            options: ["Diagnose current ability", "Review progress every year", "Skip weekly practice"],
            answer: "Diagnose current ability",
            points: 10
          },
          {
            id: "r2",
            type: "textarea",
            question: "Paraphrase the sentence: 'review progress every month'.",
            points: 10
          }
        ]
      },
      {
        key: "comprehension",
        title: "Hiểu và phản biện",
        prompt: "Kiểm tra khả năng tổ chức ý, lập luận và liên kết câu.",
        questions: [
          {
            id: "c1",
            type: "textarea",
            question: "Write a short paragraph recommending a 4-week study plan for an IELTS learner.",
            points: 10
          }
        ]
      },
      {
        key: "pronunciation",
        title: "Phát âm",
        prompt: "Tập trung word stress, sentence stress và clarity khi trả lời dài.",
        questions: [
          {
            id: "p1",
            type: "textarea",
            question: "Read aloud: 'A measurable objective helps learners maintain motivation and evaluate improvement.' Note difficult words.",
            points: 10
          }
        ]
      }
    ]
  }
];

let state = null;
let currentAccountId = null;
let activeView = "dashboard";
let editingAccountId = null;
let editingTemplateId = null;
let editingLessonId = null;
let selectedVideoLessonId = null;
let recordingState = null;
let auditLog = [];
let auditLogLoaded = false;
let nexaAssistantMessages = [];
let nexaRulesScrollTop = 0;
let serverOnline = false;
let toastTimer = null;
let syncTimer = null;
let syncInFlight = false;
let pendingSyncRender = false;
let currentLanguage = localStorage.getItem(LANGUAGE_KEY) || "vi";

const app = document.getElementById("app");

document.addEventListener("DOMContentLoaded", init);

async function init() {
  app.addEventListener("click", handleClick);
  app.addEventListener("change", handleChange);
  app.addEventListener("submit", handleSubmit);
  app.addEventListener("scroll", handleScroll, true);
  window.addEventListener("beforeunload", markCurrentAccountOfflineOnUnload);
  currentAccountId = sessionStorage.getItem(SESSION_KEY);
  await restoreServerSession();
  await loadState();
  if (!currentAccount() && serverOnline) {
    await restoreServerSession();
    if (currentAccountId) await loadState();
  }
  if (!currentAccount()) {
    currentAccountId = null;
    clearSessionStorage();
  }
  if (currentAccount()) {
    markAccountOnline(currentAccount());
    persistState();
  }
  render();
  startRealtimeSync();
  registerServiceWorker();
}

async function restoreServerSession() {
  if (!canUseServerApi()) return false;
  try {
    const response = await fetch("/api/me", {
      cache: "no-store",
      credentials: "include",
      headers: authHeaders()
    });
    serverOnline = true;
    if (!response.ok) {
      if (response.status === 401 && !sessionStorage.getItem(SESSION_KEY)) currentAccountId = null;
      return false;
    }
    const payload = await response.json();
    currentAccountId = payload.account?.id || currentAccountId || null;
    if (currentAccountId) sessionStorage.setItem(SESSION_KEY, currentAccountId);
    return Boolean(currentAccountId);
  } catch (error) {
    return false;
  }
}

async function loadState() {
  const localRaw = localStorage.getItem(STORAGE_KEY);

  if (canUseServerApi()) {
    try {
      const response = await fetch("/api/state", {
        cache: "no-store",
        credentials: "include",
        headers: authHeaders()
      });
      if (response.ok) {
        state = normalizeState(await response.json());
        serverOnline = true;
        localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
        return;
      }
      if (response.status === 401) {
        serverOnline = true;
        currentAccountId = null;
        clearSessionStorage();
        state = normalizeState(makeSeedState());
        return;
      }
    } catch (error) {
      serverOnline = false;
    }
  }

  if (localRaw) {
    try {
      state = normalizeState(JSON.parse(localRaw));
      return;
    } catch (error) {
      localStorage.removeItem(STORAGE_KEY);
    }
  }

  try {
    const response = await fetch("data/asean-hub.json", { cache: "no-store" });
    if (response.ok) {
      state = normalizeState(await response.json());
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
      return;
    }
  } catch (error) {
    serverOnline = false;
  }

  state = normalizeState(makeSeedState());
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function canUseServerApi() {
  return location.protocol === "http:" || location.protocol === "https:";
}

function authHeaders(extra = {}) {
  const headers = { ...extra };
  const token = sessionStorage.getItem(AUTH_TOKEN_KEY);
  const csrfToken = sessionStorage.getItem(CSRF_TOKEN_KEY);
  if (token) headers.Authorization = `Bearer ${token}`;
  if (csrfToken) headers["X-CSRF-Token"] = csrfToken;
  return headers;
}

function clearSessionStorage() {
  sessionStorage.removeItem(SESSION_KEY);
  sessionStorage.removeItem(AUTH_TOKEN_KEY);
  sessionStorage.removeItem(CSRF_TOKEN_KEY);
}

function normalizeState(input) {
  const normalized = input || {};
  normalized.version = normalized.version || 1;
  normalized.settings = normalized.settings || {};
  normalized.accounts = Array.isArray(normalized.accounts) ? normalized.accounts : [];
  normalized.teachers = Array.isArray(normalized.teachers) ? normalized.teachers : [];
  normalized.students = Array.isArray(normalized.students) ? normalized.students : [];
  normalized.lessons = Array.isArray(normalized.lessons) ? normalized.lessons : [];
  normalized.notifications = Array.isArray(normalized.notifications) ? normalized.notifications : [];
  normalized.placementTemplates = Array.isArray(normalized.placementTemplates) && normalized.placementTemplates.length ? normalized.placementTemplates : clonePlacementTemplates();
  normalized.placementTests = Array.isArray(normalized.placementTests) ? normalized.placementTests : [];
  normalized.callState = normalizeCallState(normalized.callState, normalized.lessons);
  normalized.settings.currency = normalized.settings.currency || "USD";
  normalized.settings.defaultTeacherRate = Number(normalized.settings.defaultTeacherRate || 8);
  normalized.settings.defaultStudentRate = Number(normalized.settings.defaultStudentRate || 14);
  normalized.accounts.forEach(normalizeAccountPresence);
  if (!normalized.placementTests.length && normalized.students.length) {
    normalized.placementTests = samplePlacementTests(normalized.students);
  }
  normalized.placementTemplates.forEach(normalizePlacementTemplate);
  normalized.placementTests.forEach((test) => normalizePlacementTest(test, normalized.placementTemplates));
  return normalized;
}

function normalizeCallState(callState, lessons = []) {
  const existing = callState || {};
  const ids = new Set();
  if (Array.isArray(existing.activeLessonIds)) {
    existing.activeLessonIds.forEach((id) => {
      if (id) ids.add(String(id));
    });
  }
  if (existing.activeLessonId) ids.add(String(existing.activeLessonId));
  lessons.forEach((lesson) => {
    if (lesson.adminStarted) ids.add(lesson.id);
  });

  const activeLessonIds = [...ids].filter((id) => {
    const lesson = lessons.find((item) => item.id === id);
    return lesson && lesson.status !== "cancelled";
  });
  lessons.forEach((lesson) => {
    lesson.adminStarted = activeLessonIds.includes(lesson.id);
  });

  const activeLessonId = activeLessonIds.includes(existing.activeLessonId) ? existing.activeLessonId : activeLessonIds[0] || null;
  return {
    activeLessonId,
    activeLessonIds,
    startedBy: existing.startedBy || null,
    startedAt: existing.startedAt || null
  };
}

function makeSeedState() {
  return {
    version: 1,
    settings: {
      companyName: "Asean Holding",
      currency: "USD",
      defaultTeacherRate: 8,
      defaultStudentRate: 14,
      vpsNote: "Dữ liệu demo đang lưu ở localStorage hoặc data/asean-hub.json."
    },
    accounts: [
      {
        id: "acc-admin",
        role: "admin",
        name: "Asean Holding Admin",
        email: "admin@aseanholding.com",
        password: "admin123",
        status: "active",
        createdAt: "2026-05-19T08:00:00.000Z"
      },
      {
        id: "acc-teacher-maria",
        role: "teacher",
        profileId: "teacher-maria",
        name: "Maria Santos",
        email: "maria.santos@aseanholding.com",
        password: "teach123",
        status: "active",
        createdAt: "2026-05-19T08:05:00.000Z"
      },
      {
        id: "acc-student-linh",
        role: "student",
        profileId: "student-linh",
        name: "Nguyen Linh",
        email: "linh.nguyen@example.com",
        password: "learn123",
        status: "active",
        createdAt: "2026-05-19T08:07:00.000Z"
      }
    ],
    teachers: [
      {
        id: "teacher-maria",
        name: "Maria Santos",
        email: "maria.santos@aseanholding.com",
        country: "Philippines",
        city: "Cebu",
        timezone: "Asia/Manila",
        ratePerHour: 8,
        specialties: ["IELTS Speaking", "Business English", "Pronunciation"],
        rating: 4.9,
        status: "active",
        avatarColor: "#0f766e"
      }
    ],
    students: [
      {
        id: "student-linh",
        name: "Nguyen Linh",
        email: "linh.nguyen@example.com",
        country: "Vietnam",
        city: "Ha Noi",
        timezone: "Asia/Ho_Chi_Minh",
        level: "B1",
        goal: "Phỏng vấn du học Canada",
        studentRatePerHour: 14,
        status: "active",
        avatarColor: "#2563eb"
      }
    ],
    lessons: [
      {
        id: "lesson-001",
        teacherId: "teacher-maria",
        studentId: "student-linh",
        title: "IELTS speaking - Study abroad interview",
        date: "2026-05-19",
        startTime: "20:00",
        durationHours: 1,
        teacherRatePerHour: 8,
        studentRatePerHour: 14,
        status: "scheduled",
        roomId: "asean-lesson-001",
        adminStarted: false,
        notes: "Tập trung trả lời câu hỏi visa và mục tiêu học tập."
      }
    ],
    notifications: [
      {
        id: "notice-001",
        audience: "all",
        title: "Quy định vào lớp",
        message: "Vui lòng vào phòng trước giờ học 5 phút để kiểm tra camera, microphone và tài liệu.",
        createdBy: "acc-admin",
        createdAt: "2026-05-19T09:00:00.000Z"
      }
    ],
    placementTemplates: clonePlacementTemplates(),
    placementTests: samplePlacementTests([{ id: "student-linh" }]),
    callState: {
      activeLessonId: null,
      activeLessonIds: [],
      startedBy: null,
      startedAt: null
    }
  };
}

function normalizePlacementTemplate(template) {
  template.id = template.id || makeId("template");
  template.title = template.title || "Placement Test";
  template.level = template.level || "A1-B1";
  template.durationMinutes = Number(template.durationMinutes || 60);
  template.description = template.description || "";
  template.sections = Array.isArray(template.sections) && template.sections.length ? template.sections : cloneTestSections(PLACEMENT_TEST_TEMPLATES[0].sections);
  template.sections.forEach((section) => {
    section.key = section.key || "comprehension";
    section.title = section.title || placementSkillLabel(section.key);
    section.prompt = section.prompt || "";
    section.audioDataUrl = section.audioDataUrl || "";
    section.audioName = section.audioName || "";
    section.questions = Array.isArray(section.questions) && section.questions.length ? section.questions : [];
    section.questions.forEach((question, index) => {
      question.id = question.id || `${section.key}-${index + 1}`;
      question.type = question.type || "textarea";
      question.question = question.question || "";
      question.points = Number(question.points || 10);
    });
  });
  return template;
}

function normalizePlacementTest(test, templates = placementTemplates()) {
  const template = placementTemplate(test.templateId, templates) || templates[0] || PLACEMENT_TEST_TEMPLATES[0];
  test.id = test.id || makeId("placement");
  test.templateId = test.templateId || template.id;
  test.title = test.title || template.title;
  test.level = test.level || template.level;
  test.durationMinutes = Number(test.durationMinutes || template.durationMinutes || 45);
  test.status = test.status || "assigned";
  test.sections = Array.isArray(test.sections) && test.sections.length ? test.sections : cloneTestSections(template.sections);
  test.answers = test.answers && typeof test.answers === "object" ? test.answers : {};
  test.answerAudio = test.answerAudio && typeof test.answerAudio === "object" ? test.answerAudio : {};
  test.scores = normalizePlacementScores(test.scores);
  test.feedback = test.feedback || "";
  test.teachingPlan = test.teachingPlan || "";
  test.createdAt = test.createdAt || new Date().toISOString();
  return test;
}

function clonePlacementTemplates() {
  return JSON.parse(JSON.stringify(PLACEMENT_TEST_TEMPLATES));
}

function normalizeAccountPresence(account) {
  account.presence = account.presence === "online" ? "online" : "offline";
  account.lastSeenAt = account.lastSeenAt || account.createdAt || "";
  account.lastLoginAt = account.lastLoginAt || "";
  account.lastLogoutAt = account.lastLogoutAt || "";
  return account;
}

function normalizePlacementScores(scores = {}) {
  return {
    listening: Number(scores.listening || 0),
    speaking: Number(scores.speaking || 0),
    reading: Number(scores.reading || 0),
    comprehension: Number(scores.comprehension || 0),
    pronunciation: Number(scores.pronunciation || 0)
  };
}

function samplePlacementTests(students = [{ id: "student-linh" }]) {
  const availableStudents = students.filter((student) => student?.id).slice(0, 3);
  return availableStudents.map((student, index) => {
    const template = PLACEMENT_TEST_TEMPLATES[index] || PLACEMENT_TEST_TEMPLATES[0];
    const status = index === 0 ? "assigned" : index === 1 ? "submitted" : "reviewed";
    const scores =
      status === "assigned"
        ? {}
        : {
            listening: index === 1 ? 6 : 8,
            speaking: index === 1 ? 5 : 7,
            reading: index === 1 ? 7 : 8,
            comprehension: index === 1 ? 6 : 7,
            pronunciation: index === 1 ? 5 : 7
          };
    return normalizePlacementTest({
      id: `placement-sample-${index + 1}`,
      templateId: template.id,
      studentId: student.id,
      title: template.title,
      level: template.level,
      durationMinutes: template.durationMinutes,
      status,
      sections: cloneTestSections(template.sections),
      answers:
        status === "assigned"
          ? {}
          : {
              listening_l1: "A short update",
              speaking_s1: "I want to improve English for work and meetings. I need more speaking practice.",
              reading_r1: "Two",
              comprehension_c1: "Practice speaking twice a week, review pronunciation, and learn business vocabulary.",
              pronunciation_p1: "Thursday and three are difficult sounds."
            },
      scores,
      feedback: status === "reviewed" ? "Học viên hiểu ý chính tốt, cần tăng độ trôi chảy và phát âm âm cuối." : "",
      teachingPlan: status === "reviewed" ? defaultTeachingPlan(normalizePlacementScores(scores), template.level) : "",
      createdAt: "2026-05-22T02:00:00.000Z",
      startedAt: status === "assigned" ? null : "2026-05-22T02:10:00.000Z",
      submittedAt: status === "assigned" ? null : "2026-05-22T02:45:00.000Z",
      reviewedAt: status === "reviewed" ? "2026-05-22T03:00:00.000Z" : null
    });
  });
}

async function persistState(message) {
  if (serverOnline) {
    try {
      const response = await fetch("/api/state", {
        method: "POST",
        credentials: "include",
        headers: authHeaders({ "Content-Type": "application/json" }),
        body: JSON.stringify(state)
      });
      if (!response.ok) throw new Error("Cannot save state");
      const payload = await response.json().catch(() => null);
      if (payload?.state) {
        state = normalizeState(payload.state);
      }
      stripClientSecrets(state);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (error) {
      serverOnline = false;
      localStorage.setItem(STORAGE_KEY, JSON.stringify(stripClientSecrets(JSON.parse(JSON.stringify(state)))));
      showToast("Mất kết nối máy chủ, dữ liệu tạm lưu trên thiết bị này.");
    }
  } else {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }

  if (message) showToast(message);
}

function startRealtimeSync() {
  if (syncTimer) window.clearInterval(syncTimer);
  if (!canUseServerApi()) return;
  syncTimer = window.setInterval(() => syncStateFromServer(), SYNC_INTERVAL_MS);
  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "visible") syncStateFromServer({ forceRender: true });
  });
  window.addEventListener("focus", () => syncStateFromServer({ forceRender: true }));
  document.addEventListener("focusout", () => {
    if (pendingSyncRender) {
      window.setTimeout(() => {
        if (pendingSyncRender && !isUserEditingForm()) {
          pendingSyncRender = false;
          render();
        }
      }, 100);
    }
  });
}

async function syncStateFromServer(options = {}) {
  if (syncInFlight || !canUseServerApi() || !currentAccountId) return;
  if (pendingSyncRender && !isUserEditingForm()) {
    pendingSyncRender = false;
    render();
  }
  syncInFlight = true;
  const accountBefore = currentAccount();
  const previousState = state;
  const previousLiveIds = scopedLessonIds(previousState, accountBefore, (lesson) => lessonIsLiveInState(lesson, previousState));
  const previousLessonIds = scopedLessonIds(previousState, accountBefore);
  try {
    const response = await fetch("/api/state", {
      cache: "no-store",
      credentials: "include",
      headers: authHeaders()
    });
    if (response.status === 401) {
      stopRealtimeSync();
      currentAccountId = null;
      clearSessionStorage();
      serverOnline = true;
      showToast("Phiên đăng nhập đã hết hạn. Vui lòng đăng nhập lại.");
      render();
      return;
    }
    if (!response.ok) throw new Error("Cannot sync state");
    const nextState = normalizeState(await response.json());
    serverOnline = true;
    const beforeSignature = JSON.stringify(previousState);
    const afterSignature = JSON.stringify(nextState);
    if (beforeSignature === afterSignature && !options.forceRender) return;
    state = nextState;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    const accountAfter = currentAccount();
    if (!accountAfter) {
      currentAccountId = null;
      clearSessionStorage();
      stopRealtimeSync();
      render();
      return;
    }
    notifyRealtimeChanges(previousLiveIds, previousLessonIds, accountAfter);
    if (isUserEditingForm() && !options.forceRender) {
      pendingSyncRender = true;
      return;
    }
    pendingSyncRender = false;
    render();
  } catch (error) {
    serverOnline = false;
  } finally {
    syncInFlight = false;
  }
}

function stopRealtimeSync() {
  if (syncTimer) window.clearInterval(syncTimer);
  syncTimer = null;
  pendingSyncRender = false;
}

function isUserEditingForm() {
  const element = document.activeElement;
  return Boolean(element && element.closest("form") && ["INPUT", "TEXTAREA", "SELECT"].includes(element.tagName));
}

function notifyRealtimeChanges(previousLiveIds, previousLessonIds, account) {
  if (!account || account.role === "admin") return;
  const liveLessons = sortedLessons(visibleLessonsForAccount(state, account).filter((lesson) => lessonIsLiveInState(lesson, state)));
  const newLiveLessons = liveLessons.filter((lesson) => !previousLiveIds.has(lesson.id));
  if (newLiveLessons.length) {
    const lesson = newLiveLessons[0];
    showToast(`Admin đã mở lớp: ${lesson.title}. Bấm Video call để vào lớp.`);
  }

  const newScheduledLessons = sortedLessons(
    visibleLessonsForAccount(state, account).filter((lesson) => lesson.status !== "cancelled" && !previousLessonIds.has(lesson.id))
  );
  if (newScheduledLessons.length) {
    const lesson = newScheduledLessons[0];
    showToast(`Bạn có lịch học mới: ${lesson.title} - ${formatDate(lesson.date, "short")} ${lesson.startTime}.`);
  }
}

function scopedLessonIds(targetState, account, predicate = () => true) {
  return new Set(visibleLessonsForAccount(targetState, account).filter(predicate).map((lesson) => lesson.id));
}

function visibleLessonsForAccount(targetState, account) {
  if (!targetState || !account) return [];
  const lessons = targetState.lessons || [];
  if (account.role === "admin") return lessons;
  if (account.role === "teacher") return lessons.filter((lesson) => lesson.teacherId === account.profileId);
  if (account.role === "student") return lessons.filter((lesson) => lesson.studentId === account.profileId);
  return [];
}

function notificationVisibleForUser(notice, user) {
  if (!notice || !user) return false;
  if (user.role === "admin") return true;
  if (notice.targetAccountId) return notice.targetAccountId === user.id;
  if (user.role === "teacher" && notice.targetTeacherId) return notice.targetTeacherId === user.profileId;
  if (user.role === "student" && notice.targetStudentId) return notice.targetStudentId === user.profileId;
  return notice.audience === "all" || notice.audience === user.role;
}

function lessonIsLiveInState(lesson, targetState) {
  const activeIds = Array.isArray(targetState?.callState?.activeLessonIds) ? targetState.callState.activeLessonIds : [];
  return Boolean(lesson && lesson.status !== "cancelled" && (lesson.adminStarted || activeIds.includes(lesson.id)));
}

function stripClientSecrets(targetState) {
  (targetState.accounts || []).forEach((account) => {
    delete account.password;
    delete account.passwordHash;
    delete account.passwordSalt;
    delete account.passwordIterations;
    delete account.passwordUpdatedAt;
  });
  return targetState;
}

function render() {
  if (!currentAccount()) {
    renderLogin();
    return;
  }
  renderShell();
}

function renderLogin() {
  app.innerHTML = `
    <main class="login-layout">
      <section class="login-visual" aria-label="Asean Holding English Hub">
        <div class="brand-mark">
          <div class="brand-logo">${companyLogo()}</div>
          <div>
            <div>Asean Holding</div>
            <div class="meta-subtitle">English Hub</div>
          </div>
        </div>
        <div class="visual-copy">
          <h1>Quản lý lớp tiếng Anh online toàn cầu</h1>
          <p>Theo dõi giáo viên Philippines, học viên quốc tế, lịch học, giờ dạy, học phí và phòng video từ một màn hình duy nhất.</p>
        </div>
        <div class="visual-stats">
          <div class="visual-stat"><strong>${state.teachers.length}</strong><span>Giáo viên đang hoạt động</span></div>
          <div class="visual-stat"><strong>${state.students.length}</strong><span>Học viên nhiều múi giờ</span></div>
          <div class="visual-stat"><strong>${state.lessons.length}</strong><span>Buổi học được quản lý</span></div>
        </div>
      </section>
      <section class="login-panel">
        <div class="login-card">
          <h2>Đăng nhập hệ thống</h2>
          <p>Vui lòng đăng nhập bằng tài khoản được admin cấp để sử dụng hệ thống.</p>
          ${languageSelector("login-language", "language-switcher")}
          <form id="login-form" class="form-stack">
            <div id="login-error" class="error-box"></div>
            <div class="field">
              <label for="login-email">Email</label>
              <input class="input" id="login-email" name="email" type="email" autocomplete="username" required />
            </div>
            <div class="field">
              <label for="login-password">Mật khẩu</label>
              <input class="input" id="login-password" name="password" type="password" autocomplete="current-password" required />
            </div>
            <button class="btn btn-primary" type="submit">${icon("log-in")} Đăng nhập</button>
          </form>
          <p class="copyright-note">${COPYRIGHT_TEXT}</p>
        </div>
      </section>
    </main>
  `;
  refreshIcons();
  applyLanguage();
  restoreNexaRulesScroll();
}

function languageSelector(id, extraClass = "") {
  return `
    <div class="${safe(extraClass)}">
      <label for="${safe(id)}">Ngôn ngữ</label>
      <select class="select" id="${safe(id)}" data-language-select>
        ${Object.entries(LANGUAGES)
          .map(([code, label]) => `<option value="${safe(code)}" ${currentLanguage === code ? "selected" : ""}>${safe(label)}</option>`)
          .join("")}
      </select>
    </div>
  `;
}

function renderShell() {
  const user = currentAccount();
  const isAdmin = user.role === "admin";
  if (user.status !== "active") {
    logout();
    return;
  }
  if (!navItems(user.role).some((item) => item.id === activeView)) {
    activeView = defaultView(user.role);
  }

  app.innerHTML = `
    <div class="shell">
      <aside class="sidebar">
        <div class="brand-mark">
          <div class="brand-logo">${companyLogo()}</div>
          <div>
            <div>Asean Holding</div>
            <div class="meta-subtitle">English Hub</div>
          </div>
        </div>
        <div class="role-pill">
          ${brandedAvatar(user.name, user.role === "admin" ? "#0f766e" : profileColor(user), "avatar-small")}
          <div>
            <div class="meta-title">${safe(user.name)}</div>
            <div class="meta-subtitle">${safe(roleLabel(user.role))}</div>
          </div>
        </div>
        <nav class="nav-list" aria-label="Điều hướng">
          ${navItems(user.role)
            .map(
              (item) => `
                <button class="nav-btn ${item.id === activeView ? "active" : ""}" type="button" data-action="nav" data-view="${safe(item.id)}">
                  ${icon(item.icon)}
                  <span>${safe(item.label)}</span>
                  ${navBadge(item.id)}
                </button>
              `
            )
            .join("")}
        </nav>
        <div class="sidebar-footer">
          ${languageSelector("app-language", "language-switcher compact")}
          ${
            isAdmin
              ? `
                <div class="info-box">
                  <strong>${serverOnline ? "Máy chủ VPS đang kết nối" : "Chế độ local/demo"}</strong>
                  <div class="meta-subtitle">${serverOnline ? "Dữ liệu lưu qua API /api/state." : "Dữ liệu lưu trên trình duyệt cho đến khi chạy server.js."}</div>
                </div>
              `
              : ""
          }
          <div class="copyright-note">${COPYRIGHT_TEXT}</div>
          <button class="btn btn-secondary" type="button" data-action="logout">${icon("log-out")} Đăng xuất</button>
        </div>
      </aside>
      <main class="main">
        <header class="topbar">
          <div>
            <h1>${safe(viewTitle(activeView, user.role))}</h1>
            <p>${safe(todayText())}</p>
          </div>
          <div class="topbar-actions">
            ${activeCallBadge()}
            ${
              isAdmin
                ? `<button class="btn btn-secondary" type="button" data-action="download-json" title="Tải dữ liệu JSON">${icon("database")} Sao lưu</button>`
                : ""
            }
          </div>
        </header>
        <div class="content">
          ${renderRealtimeAlerts()}
          ${renderView()}
        </div>
      </main>
    </div>
  `;
  refreshIcons();
  applyLanguage();
}

function navBadge(viewId) {
  const user = currentAccount();
  if (!user) return "";
  if (viewId === "video") {
    const count = visibleLessonsForAccount(state, user).filter((lesson) => lessonIsLiveInState(lesson, state)).length;
    return count ? `<span class="nav-badge">${safe(String(count))}</span>` : "";
  }
  if (viewId === "schedule" && user.role !== "admin") {
    const count = visibleLessonsForAccount(state, user).filter((lesson) => lesson.status === "scheduled").length;
    return count ? `<span class="nav-badge muted">${safe(String(count))}</span>` : "";
  }
  return "";
}

function renderRealtimeAlerts() {
  const user = currentAccount();
  if (!user || user.role === "admin") return "";
  const lessons = sortedLessons(visibleLessonsForAccount(state, user).filter((lesson) => lesson.status !== "cancelled"));
  const liveLessons = lessons.filter((lesson) => lessonIsLiveInState(lesson, state));
  const nextLesson = lessons.find((lesson) => lesson.status === "scheduled");
  if (!liveLessons.length && !nextLesson) return "";

  return `
    <section class="attention-panel">
      ${
        liveLessons.length
          ? liveLessons
              .map(
                (lesson) => `
                  <article class="attention-item urgent">
                    <div>
                      <div class="meta-title">${icon("radio")} Admin đã mở lớp: ${safe(lesson.title)}</div>
                      <div class="meta-subtitle">${safe(formatDate(lesson.date))} ${safe(lesson.startTime)} - ${formatNumber(lesson.durationHours)} giờ</div>
                    </div>
                    <button class="btn btn-primary btn-small" type="button" data-action="join-call" data-id="${safe(lesson.id)}">${icon("video")} Vào lớp</button>
                  </article>
                `
              )
              .join("")
          : ""
      }
      ${
        nextLesson
          ? `
            <article class="attention-item">
              <div>
                <div class="meta-title">${icon("calendar-clock")} Lịch học sắp tới: ${safe(nextLesson.title)}</div>
                <div class="meta-subtitle">${safe(formatDate(nextLesson.date))} ${safe(nextLesson.startTime)} - ${formatNumber(nextLesson.durationHours)} giờ</div>
              </div>
              <button class="btn btn-secondary btn-small" type="button" data-action="nav" data-view="schedule">${icon("calendar-days")} Xem lịch</button>
            </article>
          `
          : ""
      }
    </section>
  `;
}

function renderView() {
  const user = currentAccount();
  if (user.role === "admin") {
    if (activeView === "dashboard") return renderAdminDashboard();
    if (activeView === "schedule") return renderAdminSchedule();
    if (activeView === "people") return renderPeopleAdmin();
    if (activeView === "finance") return renderFinanceAdmin();
    if (activeView === "placement") return renderPlacementTests();
    if (activeView === "notifications") return renderNotifications();
    if (activeView === "video") return renderVideoCenter();
    if (activeView === "audit") return renderAuditAdmin();
    if (activeView === "settings") return renderSettings();
  }

  if (user.role === "teacher") {
    if (activeView === "dashboard") return renderTeacherDashboard();
    if (activeView === "schedule") return renderRoleSchedule("teacher");
    if (activeView === "finance") return renderTeacherFinance();
    if (activeView === "notifications") return renderNotifications();
    if (activeView === "video") return renderVideoCenter();
    if (activeView === "assistant") return renderNexaAssistant();
    if (activeView === "profile") return renderProfile();
  }

  if (user.role === "student") {
    if (activeView === "dashboard") return renderStudentDashboard();
    if (activeView === "schedule") return renderRoleSchedule("student");
    if (activeView === "payments") return renderStudentPayments();
    if (activeView === "placement") return renderPlacementTests();
    if (activeView === "notifications") return renderNotifications();
    if (activeView === "video") return renderVideoCenter();
    if (activeView === "assistant") return renderNexaAssistant();
    if (activeView === "profile") return renderProfile();
  }

  return `<div class="empty">Không tìm thấy màn hình phù hợp.</div>`;
}

function renderAdminDashboard() {
  const billable = state.lessons.filter((lesson) => lesson.status !== "cancelled");
  const totalPayable = sum(billable.map(lessonTeacherAmount));
  const totalReceivable = sum(billable.map(lessonStudentAmount));
  const todayLessons = sortedLessons().filter((lesson) => lesson.date === todayISO());
  const upcoming = sortedLessons().filter((lesson) => lesson.status === "scheduled").slice(0, 5);

  return `
    <section class="grid grid-4">
      ${metric("Giáo viên", state.teachers.length, "Đang quản lý tại Philippines", "users")}
      ${metric("Học viên", state.students.length, "Học viên toàn cầu", "globe-2")}
      ${metric("Lớp hôm nay", todayLessons.length, "Theo múi giờ hệ thống", "calendar-days")}
      ${metric("Lợi nhuận tạm tính", money(totalReceivable - totalPayable), "Doanh thu trừ lương giáo viên", "line-chart")}
    </section>
    <section class="grid grid-3">
      <div class="panel span-2">
        <div class="panel-header">
          <div class="panel-title">
            <h2>Lịch học gần nhất</h2>
            <p>Admin có thể mở phòng video, đánh dấu hoàn thành hoặc hủy buổi học.</p>
          </div>
          <button class="btn btn-primary" type="button" data-action="nav" data-view="schedule">${icon("plus")} Xếp lịch</button>
        </div>
        ${renderTimeline(upcoming, "Chưa có buổi học sắp tới.")}
      </div>
      <div class="panel">
        <div class="panel-header">
          <div class="panel-title">
            <h2>Tài chính nhanh</h2>
            <p>Số liệu tính theo các buổi chưa hủy.</p>
          </div>
        </div>
        <div class="kpi-strip finance-quick">
          <div class="kpi"><span>Trả giáo viên</span><strong>${money(totalPayable)}</strong></div>
          <div class="kpi"><span>Thu học viên</span><strong>${money(totalReceivable)}</strong></div>
          <div class="kpi"><span>Số giờ</span><strong>${formatNumber(sum(billable.map((lesson) => lesson.durationHours)))}</strong></div>
        </div>
        <div class="notice" style="margin-top: 14px;">
          <h3>Quy tắc video call</h3>
          <p>Admin hoặc giáo viên phụ trách có thể mở lớp từ lịch đã được admin tạo.</p>
        </div>
      </div>
    </section>
  `;
}

function renderAdminSchedule() {
  const editingLesson = state.lessons.find((lesson) => lesson.id === editingLessonId);
  return `
    <section class="panel">
      <div class="panel-header">
        <div class="panel-title">
          <h2>${editingLesson ? "Sửa phân công và lịch học" : "Tạo lịch học"}</h2>
          <p>Xếp giáo viên dạy từng học viên, chọn giờ học và hệ thống sẽ cảnh báo nếu giáo viên hoặc học viên bị trùng lịch.</p>
        </div>
      </div>
      <form id="lesson-form" class="form-grid" ${editingLesson ? `data-lesson-id="${safe(editingLesson.id)}"` : ""}>
        <div class="field wide">
          <label for="lesson-title">Tên buổi học</label>
          <input class="input" id="lesson-title" name="title" required value="${safe(editingLesson?.title || "")}" placeholder="Ví dụ: IELTS speaking - Visa interview" />
        </div>
        <div class="field">
          <label for="lesson-date">Ngày học</label>
          <input class="input" id="lesson-date" name="date" type="date" required value="${safe(editingLesson?.date || todayISO())}" />
        </div>
        <div class="field">
          <label for="lesson-time">Giờ bắt đầu</label>
          <input class="input" id="lesson-time" name="startTime" type="time" required value="${safe(editingLesson?.startTime || "20:00")}" />
        </div>
        <div class="field">
          <label for="lesson-teacher">Giáo viên</label>
          <select class="select" id="lesson-teacher" name="teacherId" required>
            ${state.teachers.map((teacher) => `<option value="${safe(teacher.id)}" ${editingLesson?.teacherId === teacher.id ? "selected" : ""}>${safe(teacher.name)}</option>`).join("")}
          </select>
        </div>
        <div class="field">
          <label for="lesson-student">Học viên</label>
          <select class="select" id="lesson-student" name="studentId" required>
            ${state.students.map((student) => `<option value="${safe(student.id)}" ${editingLesson?.studentId === student.id ? "selected" : ""}>${safe(student.name)}</option>`).join("")}
          </select>
        </div>
        <div class="field">
          <label for="lesson-duration">Số giờ</label>
          <input class="input" id="lesson-duration" name="durationHours" type="number" min="0.25" step="0.25" required value="${safe(String(editingLesson?.durationHours || 1))}" />
        </div>
        <div class="field">
          <label for="teacher-amount">Tiền giáo viên/buổi</label>
          <input class="input" id="teacher-amount" name="teacherLessonAmount" type="number" min="0" step="0.5" required value="${editingLesson ? safe(String(lessonTeacherAmount(editingLesson))) : ""}" placeholder="${safe(String(state.settings.defaultTeacherRate))}" />
        </div>
        <div class="field">
          <label for="student-amount">Học phí học viên/buổi</label>
          <input class="input" id="student-amount" name="studentLessonAmount" type="number" min="0" step="0.5" required value="${editingLesson ? safe(String(lessonStudentAmount(editingLesson))) : ""}" placeholder="${safe(String(state.settings.defaultStudentRate))}" />
        </div>
        <div class="field full">
          <label for="lesson-meet-url">Link Google Meet</label>
          <input class="input" id="lesson-meet-url" name="googleMeetUrl" type="url" inputmode="url" value="${safe(googleMeetUrl(editingLesson) || editingLesson?.googleMeetUrl || "")}" placeholder="https://meet.google.com/abc-defg-hij" />
          <div class="help-text">Không bắt buộc. Admin có thể tạo link trên Google Meet rồi dán vào đây để hệ thống không dùng API.</div>
        </div>
        <div class="field full">
          <label for="lesson-notes">Ghi chú</label>
          <textarea class="textarea" id="lesson-notes" name="notes" placeholder="Mục tiêu học, tài liệu cần chuẩn bị, yêu cầu riêng...">${safe(editingLesson?.notes || "")}</textarea>
        </div>
        <div class="full conflict-note">
          Khi lưu lịch, hệ thống sẽ kiểm tra các buổi chưa hủy có cùng khoảng thời gian. Nếu giáo viên hoặc học viên bị trùng lịch, admin sẽ nhận cảnh báo trước khi tiếp tục.
        </div>
        <div class="full button-row">
          <button class="btn btn-primary" type="submit">${icon(editingLesson ? "save" : "calendar-plus")} ${editingLesson ? "Cập nhật lịch học" : "Lưu lịch học"}</button>
          ${editingLesson ? `<button class="btn btn-secondary" type="button" data-action="cancel-edit-lesson">${icon("x")} Hủy sửa</button>` : ""}
          <button class="btn btn-secondary" type="button" data-action="nav" data-view="video">${icon("video")} Trung tâm video</button>
        </div>
      </form>
    </section>
    ${renderBulkScheduleTools()}
    <section class="panel">
      <div class="panel-header">
        <div class="panel-title">
          <h2>Phân công giáo viên - học viên</h2>
          <p>Một giáo viên có thể dạy nhiều học viên và một học viên có thể học nhiều giáo viên, miễn là lịch không trùng nhau.</p>
        </div>
      </div>
      ${renderTeachingAssignments()}
    </section>
    <section class="panel">
      <div class="panel-header">
        <div class="panel-title">
          <h2>Danh sách buổi học</h2>
          <p>Quản lý trạng thái, phòng học và các khoản tạm tính theo từng buổi.</p>
        </div>
      </div>
      ${renderLessonsTable(sortedLessons(), true)}
    </section>
  `;
}

function renderBulkScheduleTools() {
  return `
    <section class="grid grid-2">
      <div class="panel">
        <div class="panel-header">
          <div class="panel-title">
            <h2>Tạo lịch lặp hằng tuần</h2>
            <p>Tạo nhanh nhiều buổi học theo tuần cho cùng một giáo viên và học viên.</p>
          </div>
        </div>
        <form id="recurring-lesson-form" class="form-grid">
          <div class="field wide">
            <label for="recurring-title">Tên buổi học</label>
            <input class="input" id="recurring-title" name="title" required placeholder="Ví dụ: IELTS speaking - Visa interview" />
          </div>
          <div class="field">
            <label for="recurring-teacher">Giáo viên</label>
            <select class="select" id="recurring-teacher" name="teacherId" required>
              ${state.teachers.map((teacher) => `<option value="${safe(teacher.id)}">${safe(teacher.name)}</option>`).join("")}
            </select>
          </div>
          <div class="field">
            <label for="recurring-student">Học viên</label>
            <select class="select" id="recurring-student" name="studentId" required>
              ${state.students.map((student) => `<option value="${safe(student.id)}">${safe(student.name)}</option>`).join("")}
            </select>
          </div>
          <div class="field">
            <label for="recurring-start-date">Ngày bắt đầu</label>
            <input class="input" id="recurring-start-date" name="startDate" type="date" required value="${safe(todayISO())}" />
          </div>
          <div class="field">
            <label for="recurring-weeks">Số tuần</label>
            <input class="input" id="recurring-weeks" name="weeks" type="number" min="1" max="52" value="4" required />
          </div>
          <div class="field">
            <label for="recurring-time">Giờ bắt đầu</label>
            <input class="input" id="recurring-time" name="startTime" type="time" value="20:00" required />
          </div>
          <div class="field">
            <label for="recurring-duration">Số giờ</label>
            <input class="input" id="recurring-duration" name="durationHours" type="number" min="0.25" step="0.25" value="1" required />
          </div>
          <div class="field">
            <label for="recurring-teacher-amount">Tiền giáo viên/buổi</label>
            <input class="input" id="recurring-teacher-amount" name="teacherLessonAmount" type="number" min="0" step="0.5" required />
          </div>
          <div class="field">
            <label for="recurring-student-amount">Học phí học viên/buổi</label>
            <input class="input" id="recurring-student-amount" name="studentLessonAmount" type="number" min="0" step="0.5" required />
          </div>
          <div class="field full">
            <label>Ngày học trong tuần</label>
            <div class="weekday-picker">
              ${weekdayOptions()
                .map(
                  (day) => `
                    <label class="check-item">
                      <input type="checkbox" name="weekdays" value="${day.value}" ${day.value === new Date(`${todayISO()}T00:00:00`).getDay() ? "checked" : ""} />
                      <span>${day.label}</span>
                    </label>
                  `
                )
                .join("")}
            </div>
          </div>
          <div class="field full">
            <label for="recurring-meet-url">Link Google Meet</label>
            <input class="input" id="recurring-meet-url" name="googleMeetUrl" type="url" inputmode="url" placeholder="https://meet.google.com/abc-defg-hij" />
          </div>
          <div class="field full">
            <label for="recurring-notes">Ghi chú</label>
            <textarea class="textarea" id="recurring-notes" name="notes"></textarea>
          </div>
          <div class="full button-row">
            <button class="btn btn-primary" type="submit">${icon("calendar-plus")} Tạo lịch lặp</button>
          </div>
        </form>
      </div>
      <div class="panel">
        <div class="panel-header">
          <div class="panel-title">
            <h2>Import lịch CSV</h2>
            <p>Dán nhiều dòng lịch học, hệ thống sẽ tạo hàng loạt và bỏ qua dòng bị trùng lịch.</p>
          </div>
        </div>
        <form id="csv-lesson-form" class="form-stack">
          <div class="field">
            <label for="csv-lessons">Dữ liệu CSV</label>
            <textarea class="textarea code-textarea" id="csv-lessons" name="csv" required placeholder="title,date,startTime,durationHours,teacherEmail,studentEmail,teacherLessonAmount,studentLessonAmount,googleMeetUrl,notes&#10;IELTS Speaking,2026-06-01,20:00,1,maria@example.com,student@example.com,10,18,,Lesson note"></textarea>
          </div>
          <button class="btn btn-primary" type="submit">${icon("upload")} Import CSV</button>
        </form>
      </div>
    </section>
  `;
}

function renderPeopleAdmin() {
  const editingAccount = state.accounts.find((account) => account.id === editingAccountId);
  return `
    <section class="panel">
      <div class="panel-header">
        <div class="panel-title">
          <h2>Tạo tài khoản</h2>
          <p>Admin tạo tài khoản cho quản trị viên, giáo viên và học viên.</p>
        </div>
      </div>
      <form id="account-form" class="form-grid">
        <div class="field">
          <label for="account-role">Phân quyền</label>
          <select class="select" id="account-role" name="role" required>
            <option value="teacher">Giáo viên</option>
            <option value="student">Học viên</option>
            <option value="admin">Admin</option>
          </select>
        </div>
        <div class="field">
          <label for="account-name">Họ tên</label>
          <input class="input" id="account-name" name="name" required />
        </div>
        <div class="field">
          <label for="account-email">Email</label>
          <input class="input" id="account-email" name="email" type="email" required />
        </div>
        <div class="field">
          <label for="account-password">Mật khẩu tạm</label>
          <input class="input" id="account-password" name="password" required value="Welcome123" />
        </div>
        <div class="field">
          <label for="account-country">Quốc gia</label>
          <input class="input" id="account-country" name="country" placeholder="Philippines, Vietnam..." />
        </div>
        <div class="field">
          <label for="account-city">Thành phố</label>
          <input class="input" id="account-city" name="city" />
        </div>
        <div class="field">
          <label for="account-timezone">Múi giờ</label>
          <input class="input" id="account-timezone" name="timezone" placeholder="Asia/Manila" />
        </div>
        <div class="field">
          <label for="account-rate">Đơn giá/giờ</label>
          <input class="input" id="account-rate" name="rate" type="number" min="0" step="0.5" placeholder="Giáo viên: lương, học viên: học phí" />
        </div>
        <div class="field wide">
          <label for="account-level">Trình độ hoặc chuyên môn</label>
          <input class="input" id="account-level" name="level" placeholder="B1, IELTS Speaking, Business English..." />
        </div>
        <div class="field wide">
          <label for="account-goal">Mục tiêu học hoặc ghi chú</label>
          <input class="input" id="account-goal" name="goal" placeholder="Du học, phỏng vấn, giao tiếp..." />
        </div>
        <div class="full button-row">
          <button class="btn btn-primary" type="submit">${icon("user-plus")} Tạo tài khoản</button>
        </div>
      </form>
    </section>
    ${editingAccount ? renderEditAccountPanel(editingAccount) : ""}
    <section class="grid grid-2">
      <div class="panel">
        <div class="panel-header">
          <div class="panel-title">
            <h2>Giáo viên</h2>
            <p>Danh sách giáo viên, quốc gia, chuyên môn và mức lương.</p>
          </div>
        </div>
        ${renderTeachersTable()}
      </div>
      <div class="panel">
        <div class="panel-header">
          <div class="panel-title">
            <h2>Học viên</h2>
            <p>Danh sách học viên, mục tiêu học và học phí.</p>
          </div>
        </div>
        ${renderStudentsTable()}
      </div>
    </section>
    <section class="panel">
      <div class="panel-header">
        <div class="panel-title">
          <h2>Tài khoản hệ thống</h2>
          <p>Khóa hoặc mở lại tài khoản khi cần.</p>
        </div>
      </div>
      ${renderAccountsTable()}
    </section>
  `;
}

function renderTeachingAssignments() {
  if (!state.students.length) return `<div class="empty">Chưa có học viên.</div>`;
  return `
    <div class="assignment-grid">
      ${state.students
        .map((student) => {
          const lessons = sortedLessons(lessonsForStudent(student.id).filter((lesson) => lesson.status !== "cancelled"));
          const teacherIds = [...new Set(lessons.map((lesson) => lesson.teacherId))];
          const teacherNames = teacherIds.map((id) => getTeacher(id)?.name || "N/A");
          const nextLesson = lessons.find((lesson) => lesson.status === "scheduled");
          return `
            <article class="assignment-card">
              <div>
                <div class="meta-title">${safe(student.name)}</div>
                <div class="meta-subtitle">${safe(student.email)} - ${safe(student.goal || "Chưa có mục tiêu")}</div>
              </div>
              <div class="tag-list">
                ${
                  teacherNames.length
                    ? teacherNames.map((name) => `<span class="tag">${safe(name)}</span>`).join("")
                    : `<span class="tag">Chưa phân công giáo viên</span>`
                }
              </div>
              <div class="assignment-stats">
                <span>${lessons.length} buổi</span>
                <span>${formatNumber(sum(lessons.map((lesson) => lesson.durationHours)))} giờ</span>
                <span>${nextLesson ? `${safe(formatDate(nextLesson.date, "short"))} ${safe(nextLesson.startTime)}` : "Chưa có lịch sắp tới"}</span>
              </div>
              <p class="meta-subtitle">Đổi giáo viên hoặc giờ học bằng nút Sửa ở từng buổi trong danh sách lịch học.</p>
            </article>
          `;
        })
        .join("")}
    </div>
  `;
}

function renderEditAccountPanel(account) {
  if (!["teacher", "student"].includes(account.role)) return "";
  const profile = profileForAccount(account);
  if (!profile) return "";
  const isTeacher = account.role === "teacher";
  const rate = isTeacher ? profile.ratePerHour : profile.studentRatePerHour;
  const levelValue = isTeacher ? (profile.specialties || []).join(", ") : profile.level || "";
  const goalValue = isTeacher ? "" : profile.goal || "";

  return `
    <section class="panel edit-panel">
      <div class="panel-header">
        <div class="panel-title">
          <h2>Sửa ${safe(roleLabel(account.role))}</h2>
          <p>Cập nhật đồng bộ thông tin đăng nhập và hồ sơ ${isTeacher ? "giáo viên" : "học viên"}.</p>
        </div>
        <button class="btn btn-secondary btn-small" type="button" data-action="cancel-edit-account">${icon("x")} Đóng</button>
      </div>
      <form id="edit-account-form" class="form-grid" data-account-id="${safe(account.id)}">
        <div class="field">
          <label for="edit-account-name">Họ tên</label>
          <input class="input" id="edit-account-name" name="name" required value="${safe(account.name)}" />
        </div>
        <div class="field">
          <label for="edit-account-email">Email</label>
          <input class="input" id="edit-account-email" name="email" type="email" required value="${safe(account.email)}" />
        </div>
        <div class="field">
          <label for="edit-account-password">Mật khẩu</label>
          <input class="input" id="edit-account-password" name="password" placeholder="Để trống nếu giữ mật khẩu hiện tại" />
        </div>
        <div class="field">
          <label for="edit-account-status">Trạng thái</label>
          <select class="select" id="edit-account-status" name="status">
            <option value="active" ${account.status === "active" ? "selected" : ""}>Đang hoạt động</option>
            <option value="locked" ${account.status === "locked" ? "selected" : ""}>Đã khóa</option>
          </select>
        </div>
        <div class="field">
          <label for="edit-account-country">Quốc gia</label>
          <input class="input" id="edit-account-country" name="country" value="${safe(profile.country || "")}" />
        </div>
        <div class="field">
          <label for="edit-account-city">Thành phố</label>
          <input class="input" id="edit-account-city" name="city" value="${safe(profile.city || "")}" />
        </div>
        <div class="field">
          <label for="edit-account-timezone">Múi giờ</label>
          <input class="input" id="edit-account-timezone" name="timezone" value="${safe(profile.timezone || "")}" />
        </div>
        <div class="field">
          <label for="edit-account-rate">${isTeacher ? "Lương/giờ" : "Học phí/giờ"}</label>
          <input class="input" id="edit-account-rate" name="rate" type="number" min="0" step="0.5" value="${safe(String(rate || 0))}" />
        </div>
        <div class="field wide">
          <label for="edit-account-level">${isTeacher ? "Chuyên môn" : "Trình độ"}</label>
          <input class="input" id="edit-account-level" name="level" value="${safe(levelValue)}" />
        </div>
        ${
          isTeacher
            ? ""
            : `
              <div class="field wide">
                <label for="edit-account-goal">Mục tiêu học</label>
                <input class="input" id="edit-account-goal" name="goal" value="${safe(goalValue)}" />
              </div>
            `
        }
        <div class="full button-row">
          <button class="btn btn-primary" type="submit">${icon("save")} Lưu thay đổi</button>
          <button class="btn btn-warning" type="button" data-action="delete-account" data-id="${safe(account.id)}">${icon("trash-2")} Xóa tài khoản</button>
        </div>
      </form>
    </section>
  `;
}

function renderFinanceAdmin() {
  const billable = state.lessons.filter((lesson) => lesson.status !== "cancelled");
  const payable = sum(billable.map(lessonTeacherAmount));
  const receivable = sum(billable.map(lessonStudentAmount));

  return `
    <section class="grid grid-4">
      ${metric("Phải trả GV", money(payable), "Tạm tính theo lịch chưa hủy", "wallet")}
      ${metric("Phải thu HV", money(receivable), "Theo tiền từng buổi", "receipt")}
      ${metric("Số giờ học", formatNumber(sum(billable.map((lesson) => lesson.durationHours))), "Tổng giờ hợp lệ", "clock-3")}
      ${metric("Biên lợi nhuận", money(receivable - payable), "Trước chi phí vận hành", "chart-no-axes-combined")}
    </section>
    <section class="panel">
      <div class="panel-header">
        <div class="panel-title">
          <h2>Bảng lương giáo viên</h2>
          <p>Gộp theo giáo viên: số buổi, số giờ dạy, số tiền theo từng buổi.</p>
        </div>
        <div class="button-row">
          <button class="btn btn-primary" type="button" data-action="export-finance-excel">${icon("file-spreadsheet")} Xuất Excel</button>
          <button class="btn btn-secondary" type="button" data-action="export-finance">${icon("download")} Xuất CSV</button>
        </div>
      </div>
      ${renderTeacherPayrollTable()}
    </section>
    <section class="panel">
      <div class="panel-header">
        <div class="panel-title">
          <h2>Công nợ học viên</h2>
          <p>Gộp theo học viên: lịch học, số giờ và số tiền theo từng buổi.</p>
        </div>
      </div>
      ${renderStudentReceivableTable()}
    </section>
  `;
}

function renderTeacherDashboard() {
  const teacher = teacherForCurrentUser();
  if (!teacher) return `<div class="empty">Tài khoản giáo viên chưa gắn hồ sơ.</div>`;
  const lessons = lessonsForTeacher(teacher.id).filter((lesson) => lesson.status !== "cancelled");
  const completed = lessons.filter((lesson) => lesson.status === "completed");
  const upcoming = lessons.filter((lesson) => lesson.status === "scheduled").slice(0, 5);
  const studentCount = new Set(lessons.map((lesson) => lesson.studentId)).size;

  return `
    <section class="grid grid-4">
      ${metric("Học viên", studentCount, "Đang hoặc đã học", "users")}
      ${metric("Buổi đã dạy", completed.length, "Chỉ tính trạng thái hoàn thành", "check-circle-2")}
      ${metric("Giờ đã dạy", formatNumber(sum(completed.map((lesson) => lesson.durationHours))), "Tổng giờ hoàn thành", "clock")}
      ${metric("Tiền tạm tính", money(sum(lessons.map(lessonTeacherAmount))), "Bao gồm lịch chưa hủy", "wallet")}
    </section>
    <section class="grid grid-3">
      <div class="panel span-2">
        <div class="panel-header">
          <div class="panel-title">
            <h2>Lịch dạy sắp tới</h2>
            <p>Giáo viên có thể mở lớp khi đến giờ học theo lịch admin đã tạo.</p>
          </div>
        </div>
        ${renderTimeline(upcoming, "Hiện chưa có lịch dạy sắp tới.")}
      </div>
      <div class="panel">
        <div class="panel-header">
          <div class="panel-title">
            <h2>Học viên phụ trách</h2>
            <p>Số buổi, số giờ và tiền tạm tính theo từng học viên.</p>
          </div>
        </div>
        ${renderTeacherStudentSummary(teacher.id)}
      </div>
    </section>
  `;
}

function renderStudentDashboard() {
  const student = studentForCurrentUser();
  if (!student) return `<div class="empty">Tài khoản học viên chưa gắn hồ sơ.</div>`;
  const lessons = lessonsForStudent(student.id).filter((lesson) => lesson.status !== "cancelled");
  const completed = lessons.filter((lesson) => lesson.status === "completed");
  const upcoming = lessons.filter((lesson) => lesson.status === "scheduled").slice(0, 5);
  const teachers = [...new Set(lessons.map((lesson) => lesson.teacherId))]
    .map((id) => getTeacher(id))
    .filter(Boolean);

  return `
    <section class="grid grid-4">
      ${metric("Buổi đã học", completed.length, "Các lớp đã hoàn thành", "check-circle")}
      ${metric("Giờ đã học", formatNumber(sum(completed.map((lesson) => lesson.durationHours))), "Tổng thời lượng", "clock-3")}
      ${metric("Lịch sắp tới", upcoming.length, "Các lớp chưa hủy", "calendar")}
      ${metric("Học phí tạm tính", money(sum(lessons.map(lessonStudentAmount))), "Theo tiền từng buổi", "receipt")}
    </section>
    <section class="grid grid-3">
      <div class="panel span-2">
        <div class="panel-header">
          <div class="panel-title">
            <h2>Thời khóa biểu</h2>
            <p>Lịch học, giáo viên, số giờ và trạng thái vào lớp.</p>
          </div>
        </div>
        ${renderTimeline(upcoming, "Hiện chưa có lịch học sắp tới.")}
      </div>
      <div class="panel">
        <div class="panel-header">
          <div class="panel-title">
            <h2>Giáo viên của bạn</h2>
            <p>Danh sách giáo viên đã hoặc đang phụ trách.</p>
          </div>
        </div>
        ${teachers.length ? teachers.map(renderTeacherCard).join("") : `<div class="empty">Chưa có giáo viên phụ trách.</div>`}
      </div>
    </section>
  `;
}

function renderRoleSchedule(role) {
  const lessons = role === "teacher" ? lessonsForTeacher(teacherForCurrentUser()?.id) : lessonsForStudent(studentForCurrentUser()?.id);
  return `
    <section class="panel">
      <div class="panel-header">
        <div class="panel-title">
          <h2>${role === "teacher" ? "Lịch dạy" : "Lịch học"}</h2>
          <p>Theo dõi thời khóa biểu, số giờ và trạng thái lớp.</p>
        </div>
      </div>
      ${renderLessonsTable(sortedLessons(lessons), false)}
    </section>
  `;
}

function renderTeacherFinance() {
  const teacher = teacherForCurrentUser();
  if (!teacher) return `<div class="empty">Tài khoản giáo viên chưa gắn hồ sơ.</div>`;
  const lessons = lessonsForTeacher(teacher.id).filter((lesson) => lesson.status !== "cancelled");
  const total = sum(lessons.map(lessonTeacherAmount));
  return `
    <section class="grid grid-3">
      ${metric("Tổng tiền tạm tính", money(total), "Theo các buổi chưa hủy", "wallet")}
      ${metric("Số buổi", lessons.length, "Đã xếp hoặc đã dạy", "book-open")}
      ${metric("Số giờ", formatNumber(sum(lessons.map((lesson) => lesson.durationHours))), "Tổng thời lượng", "clock")}
    </section>
    <section class="panel">
      <div class="panel-header">
        <div class="panel-title">
          <h2>Chi tiết tiền dạy</h2>
          <p>Mỗi buổi học có số tiền giáo viên riêng do admin nhập.</p>
        </div>
      </div>
      ${renderLessonsTable(sortedLessons(lessons), false, "teacher")}
    </section>
  `;
}

function renderStudentPayments() {
  const student = studentForCurrentUser();
  if (!student) return `<div class="empty">Tài khoản học viên chưa gắn hồ sơ.</div>`;
  const lessons = lessonsForStudent(student.id).filter((lesson) => lesson.status !== "cancelled");
  const total = sum(lessons.map(lessonStudentAmount));
  return `
    <section class="grid grid-3">
      ${metric("Học phí tạm tính", money(total), "Theo tiền từng buổi", "receipt")}
      ${metric("Số buổi", lessons.length, "Chưa hủy", "book-open")}
      ${metric("Số giờ", formatNumber(sum(lessons.map((lesson) => lesson.durationHours))), "Tổng thời lượng", "clock")}
    </section>
    <section class="panel">
      <div class="panel-header">
        <div class="panel-title">
          <h2>Chi tiết học phí</h2>
          <p>Học phí được tính theo số tiền từng buổi do admin nhập.</p>
        </div>
      </div>
      ${renderLessonsTable(sortedLessons(lessons), false, "student")}
    </section>
  `;
}

function renderPlacementTests() {
  const user = currentAccount();
  if (user.role === "admin") return renderPlacementAdmin();
  if (user.role === "student") return renderPlacementStudent();
  return `<div class="empty">Tính năng test đầu vào chỉ dành cho admin và học viên.</div>`;
}

function renderPlacementAdmin() {
  const templates = placementTemplates();
  const editingTemplate = templates.find((template) => template.id === editingTemplateId);
  const tests = sortedPlacementTests();
  const submitted = tests.filter((test) => test.status === "submitted" || test.status === "reviewed");
  const pending = tests.filter((test) => test.status === "assigned" || test.status === "in_progress");
  const reviewed = tests.filter((test) => test.status === "reviewed");
  const average = submitted.length ? Math.round(sum(submitted.map(placementAverageScore)) / submitted.length) : 0;

  return `
    <section class="grid grid-4">
      ${metric("Bài test", tests.length, "Đã tạo cho học viên", "clipboard-check")}
      ${metric("Chờ học viên", pending.length, "Đã giao hoặc đang làm", "timer")}
      ${metric("Đã nộp", submitted.length, "Có đáp án lưu lại", "file-check-2")}
      ${metric("Điểm TB", `${average}/10`, "Theo 5 kỹ năng", "gauge")}
    </section>
    <section class="grid grid-3">
      <div class="panel">
        <div class="panel-header">
          <div class="panel-title">
            <h2>Tạo test đầu vào</h2>
            <p>Chọn học viên và mẫu có sẵn, hệ thống sẽ lưu bài test vào tài khoản admin và học viên.</p>
          </div>
        </div>
        <form id="placement-test-form" class="form-stack">
          <div class="field">
            <label for="placement-student">Học viên</label>
            <select class="select" id="placement-student" name="studentId" required>
              ${state.students.map((student) => `<option value="${safe(student.id)}">${safe(student.name)} - ${safe(student.level || "N/A")}</option>`).join("")}
            </select>
          </div>
          <div class="field">
            <label for="placement-template">Mẫu bài test</label>
            <select class="select" id="placement-template" name="templateId" required>
              ${templates.map((template) => `<option value="${safe(template.id)}">${safe(template.title)} (${safe(template.level)})</option>`).join("")}
            </select>
          </div>
          <div class="field">
            <label for="placement-title">Tên bài test</label>
            <input class="input" id="placement-title" name="title" placeholder="Để trống để dùng tên mẫu" />
          </div>
          <div class="field">
            <label for="placement-duration">Thời gian làm bài (phút)</label>
            <input class="input" id="placement-duration" name="durationMinutes" type="number" min="15" step="5" value="60" />
          </div>
          <div class="field">
            <label for="placement-due-date">Hạn hoàn thành</label>
            <input class="input" id="placement-due-date" name="dueDate" type="date" value="${safe(todayISO())}" />
          </div>
          <button class="btn btn-primary" type="submit">${icon("clipboard-plus")} Giao bài test</button>
        </form>
      </div>
      <div class="panel span-2">
        <div class="panel-header">
          <div class="panel-title">
            <h2>Mẫu test có sẵn</h2>
            <p>Admin có thể tạo mẫu mới hoặc chỉnh sửa các mẫu đang dùng để giao bài test đầu vào.</p>
          </div>
          <button class="btn btn-primary" type="button" data-action="new-placement-template">${icon("plus")} Tạo mẫu</button>
        </div>
        ${renderPlacementTemplateEditor(editingTemplate)}
        <div class="template-grid">
          ${templates.map(renderPlacementTemplateCard).join("")}
        </div>
      </div>
    </section>
    <section class="panel">
      <div class="panel-header">
        <div class="panel-title">
          <h2>Bài test của học viên</h2>
          <p>Admin xem đáp án, cập nhật điểm đánh giá và lộ trình giảng dạy riêng cho từng học viên.</p>
        </div>
      </div>
      <div class="test-list">
        ${tests.length ? tests.map(renderAdminPlacementCard).join("") : `<div class="empty">Chưa có bài test đầu vào nào.</div>`}
      </div>
    </section>
  `;
}

function renderPlacementStudent() {
  const student = studentForCurrentUser();
  if (!student) return `<div class="empty">Tài khoản học viên chưa gắn hồ sơ.</div>`;
  const tests = sortedPlacementTests(placementTestsForStudent(student.id));
  const activeTest = tests.find((test) => test.status === "in_progress");
  const assigned = tests.filter((test) => test.status === "assigned");
  const completed = tests.filter((test) => test.status === "submitted" || test.status === "reviewed");
  const latestReviewed = tests.find((test) => test.status === "reviewed");

  return `
    <section class="grid grid-4">
      ${metric("Bài được giao", tests.length, "Chỉ admin và bạn nhìn thấy", "clipboard-list")}
      ${metric("Chờ làm", assigned.length, "Có thời gian riêng", "timer")}
      ${metric("Đã nộp", completed.length, "Lưu trên tài khoản học viên", "file-check-2")}
      ${metric("Điểm gần nhất", latestReviewed ? `${placementAverageScore(latestReviewed)}/10` : "N/A", "Sau khi admin đánh giá", "gauge")}
    </section>
    ${
      activeTest
        ? renderStudentPlacementForm(activeTest)
        : `
          <section class="panel">
            <div class="panel-header">
              <div class="panel-title">
                <h2>Test đầu vào của bạn</h2>
                <p>Hoàn thành bài test để admin đánh giá và xây dựng lộ trình học phù hợp.</p>
              </div>
            </div>
            <div class="test-list">
              ${tests.length ? tests.map(renderStudentPlacementCard).join("") : `<div class="empty">Admin chưa giao bài test đầu vào.</div>`}
            </div>
          </section>
        `
    }
  `;
}

function renderPlacementTemplateCard(template) {
  return `
    <article class="template-card">
      <div class="button-row" style="justify-content: space-between;">
        <h3>${safe(template.title)}</h3>
        <span class="badge badge-blue">${safe(template.level)}</span>
      </div>
      <p>${safe(template.description)}</p>
      <div class="tag-list">
        <span class="tag">${template.durationMinutes} phút</span>
        ${template.sections.map((section) => `<span class="tag">${safe(section.title)}</span>`).join("")}
      </div>
      <div class="button-row" style="margin-top: 12px;">
        <button class="btn btn-secondary btn-small" type="button" data-action="edit-placement-template" data-id="${safe(template.id)}">${icon("pencil")} Sửa mẫu</button>
      </div>
    </article>
  `;
}

function renderPlacementTemplateEditor(template) {
  const isEditing = Boolean(template);
  const draft = normalizePlacementTemplate(
    template
      ? JSON.parse(JSON.stringify(template))
      : {
          id: "",
          title: "",
          level: "A1-B1",
          durationMinutes: 60,
          description: "",
          sections: [
            { key: "listening", title: "Nghe", prompt: "", questions: [] },
            { key: "speaking", title: "Nói", prompt: "", questions: [] },
            { key: "reading", title: "Đọc hiểu", prompt: "", questions: [] },
            { key: "comprehension", title: "Hiểu và phản hồi", prompt: "", questions: [] },
            { key: "pronunciation", title: "Phát âm", prompt: "", questions: [] }
          ]
        }
  );

  return `
    <form id="placement-template-form" class="template-editor" data-template-id="${safe(draft.id)}">
      <div class="panel-title">
        <h2>${isEditing ? "Chỉnh sửa mẫu test" : "Tạo mẫu test mới"}</h2>
        <p>Mỗi dòng câu hỏi sẽ trở thành một câu trả lời tự luận trong bài test của học viên.</p>
      </div>
      <div class="form-grid">
        <div class="field wide">
          <label for="template-title">Tên mẫu</label>
          <input class="input" id="template-title" name="title" required value="${safe(isEditing ? draft.title : "")}" placeholder="Ví dụ: Business English Entry Test" />
        </div>
        <div class="field">
          <label for="template-level">Trình độ mục tiêu</label>
          <input class="input" id="template-level" name="level" required value="${safe(draft.level)}" />
        </div>
        <div class="field">
          <label for="template-duration">Thời gian (phút)</label>
          <input class="input" id="template-duration" name="durationMinutes" type="number" min="15" step="5" required value="${safe(String(draft.durationMinutes))}" />
        </div>
        <div class="field full">
          <label for="template-description">Mô tả</label>
          <textarea class="textarea" id="template-description" name="description" required>${safe(draft.description)}</textarea>
        </div>
      </div>
      <div class="template-section-grid">
        ${draft.sections.map(renderTemplateSectionEditor).join("")}
      </div>
      <div class="button-row">
        <button class="btn btn-primary" type="submit">${icon("save")} ${isEditing ? "Lưu mẫu test" : "Tạo mẫu test"}</button>
        ${
          isEditing
            ? `<button class="btn btn-secondary" type="button" data-action="cancel-placement-template">${icon("x")} Hủy sửa</button>`
            : ""
        }
      </div>
    </form>
  `;
}

function renderTemplateSectionEditor(section) {
  return `
    <div class="template-section-editor">
      <h3>${safe(section.title)}</h3>
      <input type="hidden" name="section_${safe(section.key)}_title" value="${safe(section.title)}" />
      ${
        section.key === "listening"
          ? `
            <div class="field">
              <label for="template-${safe(section.key)}-audio">Audio phần Nghe</label>
              ${
                section.audioDataUrl
                  ? `
                    <div class="audio-preview">
                      <audio controls src="${safe(section.audioDataUrl)}"></audio>
                      <label class="inline-check">
                        <input type="checkbox" name="section_${safe(section.key)}_removeAudio" value="1" />
                        Xóa audio hiện tại
                      </label>
                    </div>
                  `
                  : `<div class="meta-subtitle">Chưa có audio cho phần nghe.</div>`
              }
              <input class="input" id="template-${safe(section.key)}-audio" name="section_${safe(section.key)}_audio" type="file" accept="audio/*" />
              <input type="hidden" name="section_${safe(section.key)}_audioExisting" value="${safe(section.audioDataUrl || "")}" />
              <input type="hidden" name="section_${safe(section.key)}_audioNameExisting" value="${safe(section.audioName || "")}" />
            </div>
          `
          : ""
      }
      <div class="field">
        <label for="template-${safe(section.key)}-prompt">Hướng dẫn phần ${safe(section.title)}</label>
        <textarea class="textarea" id="template-${safe(section.key)}-prompt" name="section_${safe(section.key)}_prompt" placeholder="Nhập hướng dẫn, đoạn đọc/nghe mô phỏng hoặc tiêu chí đánh giá...">${safe(section.prompt || "")}</textarea>
      </div>
      <div class="field">
        <label for="template-${safe(section.key)}-questions">Câu hỏi</label>
        <textarea class="textarea template-question-textarea" id="template-${safe(section.key)}-questions" name="section_${safe(section.key)}_questions" placeholder="Mỗi dòng là một câu hỏi">${safe((section.questions || []).map((question) => question.question).join("\n"))}</textarea>
      </div>
    </div>
  `;
}

function renderAdminPlacementCard(test) {
  const student = getStudent(test.studentId);
  return `
    <article class="test-card">
      <div class="test-card-header">
        <div>
          <div class="lesson-title">${safe(test.title)}</div>
          <div class="meta-subtitle">${safe(student?.name || "N/A")} - ${safe(test.level || "N/A")} - ${test.durationMinutes} phút${test.dueDate ? ` - hạn ${safe(formatDate(test.dueDate))}` : ""}</div>
        </div>
        <div class="tag-list">
          ${placementStatusBadge(test.status)}
          <span class="badge">${icon("gauge")} ${placementAverageScore(test)}/10</span>
        </div>
      </div>
      <div class="grid grid-2">
        <div>
          <h3 class="compact-title">Đáp án học viên</h3>
          ${renderPlacementAnswers(test)}
        </div>
        <div>
          <h3 class="compact-title">Đánh giá và lộ trình</h3>
          ${renderPlacementReviewForm(test)}
        </div>
      </div>
    </article>
  `;
}

function renderStudentPlacementCard(test) {
  return `
    <article class="test-card">
      <div class="test-card-header">
        <div>
          <div class="lesson-title">${safe(test.title)}</div>
          <div class="meta-subtitle">${safe(test.level || "N/A")} - ${test.durationMinutes} phút${test.dueDate ? ` - hạn ${safe(formatDate(test.dueDate))}` : ""}</div>
        </div>
        ${placementStatusBadge(test.status)}
      </div>
      <p class="lesson-meta">${safe(placementTemplate(test.templateId)?.description || "Bài test đầu vào do admin tạo.")}</p>
      ${
        test.status === "assigned"
          ? `<button class="btn btn-primary" type="button" data-action="start-placement-test" data-id="${safe(test.id)}">${icon("play")} Bắt đầu làm bài</button>`
          : renderPlacementResult(test)
      }
    </article>
  `;
}

function renderStudentPlacementForm(test) {
  return `
    <section class="panel">
      <div class="panel-header">
        <div class="panel-title">
          <h2>${safe(test.title)}</h2>
          <p>Thời gian gợi ý: ${test.durationMinutes} phút. Bài làm sẽ được lưu để admin đánh giá đầu vào.</p>
        </div>
        ${placementStatusBadge(test.status)}
      </div>
      <form id="placement-submit-${safe(test.id)}" class="form-stack" data-test-id="${safe(test.id)}">
        ${test.sections.map(renderPlacementSectionQuestions).join("")}
        <div class="button-row">
          <button class="btn btn-primary" type="submit">${icon("send")} Nộp bài test</button>
          <button class="btn btn-secondary" type="button" data-action="nav" data-view="placement">${icon("list-checks")} Quay lại danh sách</button>
        </div>
      </form>
    </section>
  `;
}

function renderPlacementSectionQuestions(section) {
  return `
    <fieldset class="question-section">
      <legend>${safe(section.title)}</legend>
      <p>${safe(section.prompt)}</p>
      ${section.audioDataUrl ? renderAudioBlock(section.audioDataUrl, section.audioName || "Audio phần nghe") : ""}
      ${section.questions.map((question) => renderPlacementQuestion(section.key, question)).join("")}
    </fieldset>
  `;
}

function renderPlacementQuestion(sectionKey, question) {
  const name = `answer_${sectionKey}_${question.id}`;
  if (question.type === "select") {
    return `
      <div class="question-card">
        <label for="${safe(name)}">${safe(question.question)}</label>
        <select class="select" id="${safe(name)}" name="${safe(name)}" required>
          <option value="">Chọn đáp án</option>
          ${(question.options || []).map((option) => `<option value="${safe(option)}">${safe(option)}</option>`).join("")}
        </select>
      </div>
    `;
  }
  if (sectionKey === "speaking") {
    return `
      <div class="question-card">
        <label for="${safe(name)}">${safe(question.question)}</label>
        <textarea class="textarea" id="${safe(name)}" name="${safe(name)}" placeholder="Bạn có thể ghi chú ngắn câu trả lời, phần chính hãy bấm mic để ghi âm..."></textarea>
        <input type="hidden" id="${safe(name)}_audio" name="audio_${sectionKey}_${safe(question.id)}" />
        <div class="recorder" data-recorder-for="${safe(name)}_audio">
          <button class="btn btn-blue btn-small" type="button" data-action="start-recording" data-target="${safe(name)}_audio">${icon("mic")} Bắt đầu ghi âm</button>
          <button class="btn btn-warning btn-small" type="button" data-action="stop-recording" data-target="${safe(name)}_audio" disabled>${icon("square")} Dừng ghi</button>
          <span class="meta-subtitle recorder-status">Chưa có bản ghi.</span>
          <audio class="recording-preview hidden" controls></audio>
        </div>
      </div>
    `;
  }
  return `
    <div class="question-card">
      <label for="${safe(name)}">${safe(question.question)}</label>
      <textarea class="textarea" id="${safe(name)}" name="${safe(name)}" required placeholder="Nhập câu trả lời bằng tiếng Anh hoặc ghi chú phát âm..."></textarea>
    </div>
  `;
}

function renderAudioBlock(audioDataUrl, title = "Audio") {
  return `
    <div class="audio-block">
      <div class="meta-title">${icon("volume-2")} ${safe(title)}</div>
      <audio controls src="${safe(audioDataUrl)}"></audio>
    </div>
  `;
}

function renderPlacementAnswers(test) {
  if (test.status === "assigned") return `<div class="empty">Học viên chưa bắt đầu bài test.</div>`;
  if (test.status === "in_progress") return `<div class="empty">Học viên đang làm bài test.</div>`;
  return `
    <div class="answer-list">
      ${test.sections
        .map((section) =>
          section.questions
            .map((question) => {
              const key = `${section.key}_${question.id}`;
              const audio = test.answerAudio?.[key];
              return `
                <div class="answer-item">
                  <strong>${safe(section.title)}:</strong>
                  <span>${safe(question.question)}</span>
                  <p>${safe(test.answers[key] || "Chưa trả lời")}</p>
                  ${audio ? renderAudioBlock(audio, "Bản ghi nói của học viên") : ""}
                </div>
              `;
            })
            .join("")
        )
        .join("")}
    </div>
  `;
}

function renderPlacementReviewForm(test) {
  const disabled = test.status === "assigned" || test.status === "in_progress";
  return `
    <form id="placement-review-${safe(test.id)}" class="form-stack" data-test-id="${safe(test.id)}">
      <div class="score-grid">
        ${Object.keys(normalizePlacementScores()).map(
          (key) => `
            <div class="field">
              <label for="${safe(test.id)}-${safe(key)}">${safe(placementSkillLabel(key))}</label>
              <input class="input" id="${safe(test.id)}-${safe(key)}" name="score_${safe(key)}" type="number" min="0" max="10" step="0.5" value="${safe(String(test.scores?.[key] || 0))}" ${disabled ? "disabled" : ""} />
            </div>
          `
        ).join("")}
      </div>
      <div class="field">
        <label for="${safe(test.id)}-feedback">Nhận xét đầu vào</label>
        <textarea class="textarea" id="${safe(test.id)}-feedback" name="feedback" ${disabled ? "disabled" : ""}>${safe(test.feedback || "")}</textarea>
      </div>
      <div class="field">
        <label for="${safe(test.id)}-plan">Lộ trình giảng dạy đề xuất</label>
        <textarea class="textarea plan-textarea" id="${safe(test.id)}-plan" name="teachingPlan" ${disabled ? "disabled" : ""}>${safe(test.teachingPlan || defaultTeachingPlan(test.scores, test.level))}</textarea>
      </div>
      <button class="btn btn-primary" type="submit" ${disabled ? "disabled" : ""}>${icon("save")} Lưu đánh giá</button>
    </form>
  `;
}

function renderPlacementResult(test) {
  return `
    <div class="placement-result">
      <div class="kpi-strip">
        <div class="kpi"><span>Trạng thái</span><strong>${safe(placementStatusText(test.status))}</strong></div>
        <div class="kpi"><span>Điểm trung bình</span><strong>${placementAverageScore(test)}/10</strong></div>
        <div class="kpi"><span>Ngày nộp</span><strong>${safe(test.submittedAt ? formatDateTime(test.submittedAt) : "N/A")}</strong></div>
      </div>
      ${test.feedback ? `<div class="notice" style="margin-top: 12px;"><h3>Nhận xét từ admin</h3><p>${safe(test.feedback)}</p></div>` : ""}
      ${test.teachingPlan ? `<div class="notice" style="margin-top: 12px;"><h3>Lộ trình học đề xuất</h3><p>${safe(test.teachingPlan)}</p></div>` : `<div class="notice" style="margin-top: 12px;"><h3>Đang chờ đánh giá</h3><p>Admin sẽ cập nhật điểm và lộ trình học sau khi xem bài làm.</p></div>`}
    </div>
  `;
}

function renderNotifications() {
  const user = currentAccount();
  const visibleNotices = state.notifications
    .filter((notice) => notificationVisibleForUser(notice, user))
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  return `
    ${
      user.role === "admin"
        ? `
          <section class="panel">
            <div class="panel-header">
              <div class="panel-title">
                <h2>Tạo thông báo nhắc nhở</h2>
                <p>Gửi thông báo cho toàn hệ thống, giáo viên hoặc học viên.</p>
              </div>
            </div>
            <form id="notification-form" class="form-grid">
              <div class="field">
                <label for="notice-audience">Người nhận</label>
                <select class="select" id="notice-audience" name="audience" required>
                  <option value="all">Tất cả</option>
                  <option value="teacher">Giáo viên</option>
                  <option value="student">Học viên</option>
                </select>
              </div>
              <div class="field wide">
                <label for="notice-title">Tiêu đề</label>
                <input class="input" id="notice-title" name="title" required />
              </div>
              <div class="field full">
                <label for="notice-message">Nội dung</label>
                <textarea class="textarea" id="notice-message" name="message" required></textarea>
              </div>
              <div class="full button-row">
                <button class="btn btn-primary" type="submit">${icon("send")} Gửi thông báo</button>
              </div>
            </form>
          </section>
        `
        : ""
    }
    <section class="panel">
      <div class="panel-header">
        <div class="panel-title">
          <h2>Thông báo</h2>
          <p>Các nhắc nhở từ admin về lịch học, phòng video và báo cáo lớp.</p>
        </div>
      </div>
      <div class="notice-list">
        ${
          visibleNotices.length
            ? visibleNotices.map(renderNotice).join("")
            : `<div class="empty">Chưa có thông báo phù hợp.</div>`
        }
      </div>
    </section>
  `;
}

function renderVideoCenter() {
  const user = currentAccount();
  const relevantLessons =
    user.role === "admin"
      ? sortedLessons(state.lessons.filter((lesson) => lesson.status !== "cancelled"))
      : sortedLessons(lessonsForCurrentUser().filter((lesson) => lesson.status !== "cancelled"));
  const liveLessons = relevantLessons.filter(isLessonLive);
  const selectedLesson = selectedVideoLesson(liveLessons);
  const canJoin = selectedLesson && canCurrentUserJoin(selectedLesson);
  const selectedGoogleMeetUrl = selectedLesson ? googleMeetUrl(selectedLesson) : "";

  return `
    <section class="panel">
      <div class="panel-header">
        <div class="panel-title">
          <h2>Phòng học video</h2>
          <p>Admin có thể mở nhiều lớp cùng lúc. Mỗi buổi học có một phòng riêng và vẫn hoạt động độc lập.</p>
        </div>
        ${
          selectedLesson && user.role === "admin"
            ? `<button class="btn btn-warning" type="button" data-action="stop-call" data-id="${safe(selectedLesson.id)}">${icon("phone-off")} Kết thúc lớp này</button>`
            : ""
        }
      </div>
      ${
        liveLessons.length
          ? `
            <div class="live-call-list">
              ${liveLessons.map((lesson) => renderLiveCallCard(lesson, selectedLesson?.id === lesson.id, user.role === "admin")).join("")}
            </div>
          `
          : ""
      }
      <div class="call-stage">
        ${
          selectedLesson && canJoin
            ? `
              <div class="kpi-strip">
                <div class="kpi"><span>Buổi học</span><strong>${safe(selectedLesson.title)}</strong></div>
                <div class="kpi"><span>Giáo viên</span><strong>${safe(getTeacher(selectedLesson.teacherId)?.name || "N/A")}</strong></div>
                <div class="kpi"><span>Học viên</span><strong>${safe(getStudent(selectedLesson.studentId)?.name || "N/A")}</strong></div>
                <div class="kpi"><span>Nền tảng</span><strong>${selectedGoogleMeetUrl ? "Google Meet" : "Phòng dự phòng"}</strong></div>
              </div>
              ${
                selectedGoogleMeetUrl
                  ? `
                    <div class="google-meet-panel">
                      <div>
                        ${icon("video")}
                        <h3>Lớp này dùng Google Meet</h3>
                        <p>Giáo viên và học viên bấm nút bên dưới để mở phòng học trong tab mới. Link này đã được lưu vào lịch học của buổi này.</p>
                      </div>
                      <a class="btn btn-primary" href="${safe(selectedGoogleMeetUrl)}" target="_blank" rel="noopener">${icon("external-link")} Mở Google Meet</a>
                    </div>
                  `
                  : `
                    <div class="call-frame">
                      <iframe
                        title="Asean Holding video classroom"
                        src="${safe(callUrl(selectedLesson))}"
                        allow="camera; microphone; fullscreen; display-capture; autoplay; clipboard-write"
                      ></iframe>
                    </div>
                  `
              }
            `
            : `
              <div class="call-placeholder">
                <div>
                  ${icon("video")}
                  <h3>${liveLessons.length ? "Chọn một phòng đang mở" : "Chưa có phòng học đang mở"}</h3>
                  <p>${liveLessons.length ? "Bấm Vào lại ở lớp cần theo dõi để mở đúng phòng video." : "Khi admin bấm mở lớp, giáo viên và học viên của buổi đó sẽ thấy nút vào phòng video."}</p>
                </div>
              </div>
            `
        }
      </div>
    </section>
    <section class="panel">
      <div class="panel-header">
        <div class="panel-title">
          <h2>${user.role === "admin" ? "Lớp có thể mở" : "Lớp của bạn"}</h2>
          <p>${user.role === "admin" ? "Admin có thể mở thêm lớp dù đang có lớp khác hoạt động." : "Bạn chỉ vào được phòng khi admin đã bắt đầu buổi học."}</p>
        </div>
      </div>
      ${renderLessonsTable(relevantLessons, user.role === "admin")}
    </section>
  `;
}

function renderLiveCallCard(lesson, isSelected, isAdmin) {
  const teacher = getTeacher(lesson.teacherId);
  const student = getStudent(lesson.studentId);
  return `
    <article class="live-call-card ${isSelected ? "active" : ""}">
      <div>
        <div class="meta-title">${safe(lesson.title)}</div>
        <div class="meta-subtitle">${safe(formatDate(lesson.date))} - ${safe(lesson.startTime)} - ${safe(teacher?.name || "N/A")} / ${safe(student?.name || "N/A")}</div>
        <div class="meta-subtitle">${googleMeetUrl(lesson) ? "Google Meet link đã lưu trong lịch học" : "Đang dùng phòng video dự phòng"}</div>
      </div>
      <div class="table-actions">
        <button class="btn ${isSelected ? "btn-primary" : "btn-secondary"} btn-small" type="button" data-action="view-call" data-id="${safe(lesson.id)}">${icon("screen-share")} ${isSelected ? "Đang xem" : "Vào lại"}</button>
        ${isAdmin ? `<button class="btn btn-warning btn-small" type="button" data-action="stop-call" data-id="${safe(lesson.id)}">${icon("phone-off")} Dừng</button>` : ""}
      </div>
    </article>
  `;
}

function renderAuditAdmin() {
  if (!auditLogLoaded && serverOnline) {
    loadAuditLog();
  }
  return `
    <section class="panel">
      <div class="panel-header">
        <div class="panel-title">
          <h2>Nhật ký bảo mật</h2>
          <p>Theo dõi đăng nhập, đổi mật khẩu, cập nhật dữ liệu và các thao tác nhạy cảm trên hệ thống.</p>
        </div>
        <button class="btn btn-secondary" type="button" data-action="refresh-audit">${icon("refresh-cw")} Làm mới</button>
      </div>
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Thời gian</th>
              <th>Hành động</th>
              <th>Tài khoản</th>
              <th>IP</th>
              <th>Chi tiết</th>
            </tr>
          </thead>
          <tbody>
            ${
              auditLog.length
                ? auditLog.map(renderAuditRow).join("")
                : `<tr><td colspan="5" class="empty-cell">${auditLogLoaded ? "Chưa có nhật ký bảo mật." : "Đang tải nhật ký..."}</td></tr>`
            }
          </tbody>
        </table>
      </div>
    </section>
  `;
}

function renderNexaAssistant() {
  const user = currentAccount();
  if (!["teacher", "student"].includes(user?.role)) return `<div class="empty">Không tìm thấy màn hình phù hợp.</div>`;
  const messages = currentNexaAssistantMessages();
  return `
    <section class="nexa-assistant-layout">
      <div class="panel nexa-assistant-main">
        <div class="panel-header">
          <div class="panel-title">
            <h2>Trợ lý Nexa AI</h2>
            <p>Nexa AI chỉ hướng dẫn sử dụng phần mềm này và không trả lời nội dung ngoài phạm vi.</p>
          </div>
          <button class="btn btn-secondary" type="button" data-action="clear-nexa-ai">${icon("trash-2")} Xóa hội thoại</button>
        </div>
        <div class="nexa-chat-window" aria-live="polite">
          ${messages.map(renderNexaAssistantMessage).join("")}
        </div>
        <form id="nexa-assistant-form" class="nexa-chat-form">
          <input class="input" name="question" autocomplete="off" placeholder="Nhập câu hỏi về cách sử dụng phần mềm..." required />
          <button class="btn btn-primary" type="submit">${icon("send")} Hỏi Nexa AI</button>
        </form>
      </div>
      <aside class="panel nexa-rules-panel">
        <div class="nexa-rules-head">
          <div class="nexa-orb">AI</div>
          <h3>Nguyên tắc làm việc</h3>
        </div>
        <div class="nexa-rules-scroll">
          <ul>
            ${nexaAssistantRules().map((rule) => `<li>${safe(rule)}</li>`).join("")}
          </ul>
          <div class="assistant-prompts">
            ${nexaAssistantPromptGroups(user.role)
              .map(
                (group) => `
                  <section class="assistant-prompt-group">
                    <h4>${safe(group.title)}</h4>
                    <div class="assistant-prompt-list">
                      ${group.prompts.map((prompt) => `<button class="btn btn-secondary btn-small" type="button" data-action="nexa-quick-prompt" data-prompt="${safe(prompt)}">${safe(prompt)}</button>`).join("")}
                    </div>
                  </section>
                `
              )
              .join("")}
          </div>
        </div>
      </aside>
    </section>
  `;
}

function renderNexaAssistantMessage(message) {
  return `
    <article class="nexa-message ${message.from === "user" ? "from-user" : "from-ai"}">
      <div class="nexa-bubble">
        <strong>${message.from === "user" ? safe(currentAccount()?.name || "Bạn") : "Nexa AI"}</strong>
        <p>${safe(message.text)}</p>
        <small>${safe(message.time || "")}</small>
      </div>
    </article>
  `;
}

function renderAuditRow(event) {
  const actor = event.actor
    ? `${safe(event.actor.name || "N/A")}<div class="meta-subtitle">${safe(event.actor.role || "")} - ${safe(event.actor.email || "")}</div>`
    : "Hệ thống";
  const details = auditDetailsText(event.details);
  return `
    <tr>
      <td>${safe(formatDateTime(event.at))}</td>
      <td><span class="status-pill">${safe(auditActionLabel(event.action))}</span></td>
      <td>${actor}</td>
      <td>${safe(event.ip || "N/A")}</td>
      <td>${safe(details || "Không có chi tiết")}</td>
    </tr>
  `;
}

function auditActionLabel(action) {
  return {
    "auth.login_success": "Đăng nhập",
    "auth.login_failed": "Sai đăng nhập",
    "auth.login_rate_limited": "Chặn đăng nhập",
    "auth.logout": "Đăng xuất",
    "auth.password_changed": "Đổi mật khẩu",
    "state.update": "Cập nhật dữ liệu"
  }[action] || action || "Sự kiện";
}

function auditDetailsText(details) {
  if (!details || typeof details !== "object") return "";
  if (Array.isArray(details.changedCollections)) {
    return details.changedCollections
      .map((item) => `${item.key}: +${item.created || 0}, sửa ${item.changed || 0}, xóa ${item.deleted || 0}`)
      .join("; ");
  }
  return Object.entries(details)
    .map(([key, value]) => `${key}: ${Array.isArray(value) || typeof value === "object" ? JSON.stringify(value) : value}`)
    .join("; ");
}

async function loadAuditLog() {
  if (!serverOnline || currentAccount()?.role !== "admin") return;
  try {
    const response = await fetch("/api/audit?limit=100", {
      cache: "no-store",
      credentials: "include",
      headers: authHeaders()
    });
    if (!response.ok) throw new Error("Cannot load audit log");
    const payload = await response.json();
    auditLog = Array.isArray(payload.events) ? payload.events : [];
    auditLogLoaded = true;
    if (activeView === "audit") render();
  } catch (error) {
    auditLogLoaded = true;
    showToast("Không tải được nhật ký bảo mật.");
    if (activeView === "audit") render();
  }
}

function renderSettings() {
  return `
    <section class="grid grid-2">
      <div class="panel">
        <div class="panel-header">
          <div class="panel-title">
            <h2>Cấu hình máy chủ</h2>
            <p>Dữ liệu có thể lưu trên VPS của admin qua server.js.</p>
          </div>
        </div>
        <div class="notice-list">
          <div class="notice">
            <h3>Trạng thái lưu trữ</h3>
            <p>${serverOnline ? "Đang kết nối API /api/state, thay đổi sẽ ghi vào data/asean-hub.json trên máy chủ." : "Hiện đang ở chế độ local/demo. Chạy node server.js để dùng lưu trữ trên máy chủ."}</p>
          </div>
          <div class="notice">
            <h3>Triển khai VPS</h3>
            <p>Đặt mã nguồn lên VPS, chạy lệnh node server.js, mở cổng 4173 hoặc cấu hình PORT, sau đó trỏ domain và bật HTTPS.</p>
          </div>
          <div class="notice">
            <h3>Google Meet không dùng API</h3>
            <p>Admin tạo link trực tiếp trên Google Meet rồi dán vào từng buổi học. Hệ thống chỉ lưu link và mở khi bấm Vào lớp, không dùng Google Cloud API hoặc token tính phí.</p>
          </div>
          <div class="notice">
            <h3>Bước sản phẩm thật</h3>
            <p>Khi vận hành thật nên thay mật khẩu demo bằng đăng nhập bảo mật, mã hóa mật khẩu, phân quyền API và database như PostgreSQL.</p>
          </div>
        </div>
      </div>
      <div class="panel">
        <div class="panel-header">
          <div class="panel-title">
            <h2>Đơn giá mặc định</h2>
            <p>Áp dụng khi tạo lịch hoặc tài khoản mới nếu chưa nhập đơn giá riêng.</p>
          </div>
        </div>
        <form id="settings-form" class="form-stack">
          <div class="field">
            <label for="settings-currency">Tiền tệ</label>
            <select class="select" id="settings-currency" name="currency">
              <option value="USD" ${state.settings.currency === "USD" ? "selected" : ""}>USD</option>
              <option value="VND" ${state.settings.currency === "VND" ? "selected" : ""}>VND</option>
              <option value="PHP" ${state.settings.currency === "PHP" ? "selected" : ""}>PHP</option>
            </select>
          </div>
          <div class="field">
            <label for="settings-teacher-rate">Lương giáo viên mặc định/giờ</label>
            <input class="input" id="settings-teacher-rate" name="defaultTeacherRate" type="number" min="0" step="0.5" value="${safe(String(state.settings.defaultTeacherRate))}" />
          </div>
          <div class="field">
            <label for="settings-student-rate">Học phí mặc định/giờ</label>
            <input class="input" id="settings-student-rate" name="defaultStudentRate" type="number" min="0" step="0.5" value="${safe(String(state.settings.defaultStudentRate))}" />
          </div>
          <button class="btn btn-primary" type="submit">${icon("save")} Lưu cấu hình</button>
        </form>
      </div>
    </section>
  `;
}

function renderProfile() {
  const user = currentAccount();
  const profile = user.role === "teacher" ? teacherForCurrentUser() : studentForCurrentUser();
  if (!profile) return `<div class="empty">Tài khoản chưa gắn hồ sơ.</div>`;

  return `
    <section class="grid grid-2">
      <div class="panel">
        <div class="panel-header">
          <div class="panel-title">
            <h2>Hồ sơ cá nhân</h2>
            <p>Thông tin tài khoản được admin quản lý.</p>
          </div>
        </div>
        <div class="profile-card">
          ${brandedAvatar(profile.name, profile.avatarColor)}
          <div>
            <div class="meta-title">${safe(profile.name)}</div>
            <div class="meta-subtitle">${safe(profile.email)} - ${safe(profile.city || "")}, ${safe(profile.country || "")}</div>
            <div class="tag-list">
              <span class="tag">${safe(profile.timezone || "Chưa có múi giờ")}</span>
              ${
                user.role === "teacher"
                  ? `<span class="tag">${money(profile.ratePerHour)}/giờ</span>${(profile.specialties || []).map((item) => `<span class="tag">${safe(item)}</span>`).join("")}`
                  : `<span class="tag">Trình độ ${safe(profile.level || "N/A")}</span><span class="tag">${money(profile.studentRatePerHour)}/giờ</span><span class="tag">${safe(profile.goal || "Chưa có mục tiêu")}</span>`
              }
            </div>
          </div>
        </div>
      </div>
      <div class="panel">
        <div class="panel-header">
          <div class="panel-title">
            <h2>Đổi mật khẩu</h2>
            <p>Giáo viên và học viên có thể tự đổi mật khẩu truy cập tài khoản.</p>
          </div>
        </div>
        <form id="change-password-form" class="form-stack">
          <div id="change-password-error" class="error-box"></div>
          <div class="field">
            <label for="current-password">Mật khẩu hiện tại</label>
            <input class="input" id="current-password" name="currentPassword" type="password" autocomplete="current-password" required />
          </div>
          <div class="field">
            <label for="new-password">Mật khẩu mới</label>
            <input class="input" id="new-password" name="newPassword" type="password" autocomplete="new-password" minlength="8" required />
          </div>
          <div class="field">
            <label for="confirm-password">Nhập lại mật khẩu mới</label>
            <input class="input" id="confirm-password" name="confirmPassword" type="password" autocomplete="new-password" minlength="8" required />
          </div>
          <button class="btn btn-primary" type="submit">${icon("key-round")} Cập nhật mật khẩu</button>
        </form>
      </div>
    </section>
  `;
}

function renderTimeline(lessons, emptyText) {
  if (!lessons.length) return `<div class="empty">${safe(emptyText)}</div>`;
  return `
    <div class="timeline">
      ${lessons
        .map((lesson) => {
          const teacher = getTeacher(lesson.teacherId);
          const student = getStudent(lesson.studentId);
          return `
            <article class="timeline-item">
              <div class="time-box">
                <span>${safe(lesson.startTime)}</span>
                <small>${safe(formatDate(lesson.date, "short"))}</small>
              </div>
              <div>
                <div class="lesson-title">${safe(lesson.title)}</div>
                <div class="lesson-meta">
                  ${safe(teacher?.name || "N/A")} dạy ${safe(student?.name || "N/A")} - ${formatNumber(lesson.durationHours)} giờ - ${money(lessonStudentAmount(lesson))} học phí
                </div>
                <div class="tag-list">
                  ${statusBadge(lesson.status)}
                  ${isLessonLive(lesson) ? `<span class="badge badge-rose">${icon("radio")} Đang mở video</span>` : ""}
                </div>
              </div>
              <div class="table-actions">
                ${lessonButtons(lesson)}
              </div>
            </article>
          `;
        })
        .join("")}
    </div>
  `;
}

function renderLessonsTable(lessons, adminActions, moneyMode = "both") {
  if (!lessons.length) return `<div class="empty">Chưa có buổi học nào.</div>`;
  return `
    <div class="table-wrap">
      <table>
        <thead>
          <tr>
            <th>Buổi học</th>
            <th>Thời gian</th>
            <th>Giáo viên</th>
            <th>Học viên</th>
            <th>Số giờ</th>
            <th>Tạm tính</th>
            <th>Trạng thái</th>
            <th>Thao tác</th>
          </tr>
        </thead>
        <tbody>
          ${lessons
            .map((lesson) => {
              const teacher = getTeacher(lesson.teacherId);
              const student = getStudent(lesson.studentId);
              return `
                <tr>
                  <td>
                    <div class="lesson-title">${safe(lesson.title)}</div>
                    <div class="meta-subtitle">${safe(lesson.notes || "Không có ghi chú")}</div>
                    <div class="meta-subtitle">${googleMeetUrl(lesson) ? "Đã gắn link Google Meet" : "Chưa gắn link Google Meet"}</div>
                  </td>
                  <td>${safe(formatDate(lesson.date))}<div class="meta-subtitle">${safe(lesson.startTime)}</div></td>
                  <td>${personCell(teacher)}</td>
                  <td>${personCell(student)}</td>
                  <td>${formatNumber(lesson.durationHours)}</td>
                  <td>${renderLessonMoney(lesson, moneyMode)}</td>
                  <td>${statusBadge(lesson.status)}${isLessonLive(lesson) ? `<div style="margin-top: 6px;">${statusBadge("live")}</div>` : ""}</td>
                  <td><div class="table-actions">${adminActions ? adminLessonButtons(lesson) : lessonButtons(lesson)}</div></td>
                </tr>
              `;
            })
            .join("")}
        </tbody>
      </table>
    </div>
  `;
}

function renderLessonMoney(lesson, mode) {
  if (mode === "teacher") return `${money(lessonTeacherAmount(lesson))}<div class="meta-subtitle">Theo buổi học</div>`;
  if (mode === "student") return `${money(lessonStudentAmount(lesson))}<div class="meta-subtitle">Theo buổi học</div>`;
  return `
    <div>GV: ${money(lessonTeacherAmount(lesson))}</div>
    <div class="meta-subtitle">HV: ${money(lessonStudentAmount(lesson))}</div>
  `;
}

function renderTeachersTable() {
  if (!state.teachers.length) return `<div class="empty">Chưa có giáo viên.</div>`;
  return `
    <div class="table-wrap">
      <table>
        <thead><tr><th>Giáo viên</th><th>Khu vực</th><th>Chuyên môn</th><th>Lương</th><th>Thao tác</th></tr></thead>
        <tbody>
          ${state.teachers
            .map((teacher) => {
              const account = accountForProfile("teacher", teacher.id);
              return `
                <tr>
                  <td>${personCell(teacher)}</td>
                  <td>${safe(teacher.city || "")}, ${safe(teacher.country || "")}<div class="meta-subtitle">${safe(teacher.timezone || "")}</div></td>
                  <td><div class="tag-list">${(teacher.specialties || []).map((item) => `<span class="tag">${safe(item)}</span>`).join("")}</div></td>
                  <td>${money(teacher.ratePerHour)}/giờ</td>
                  <td>${account ? accountActionButtons(account) : `<span class="meta-subtitle">Chưa có tài khoản</span>`}</td>
                </tr>
              `;
            })
            .join("")}
        </tbody>
      </table>
    </div>
  `;
}

function renderStudentsTable() {
  if (!state.students.length) return `<div class="empty">Chưa có học viên.</div>`;
  return `
    <div class="table-wrap">
      <table>
        <thead><tr><th>Học viên</th><th>Khu vực</th><th>Mục tiêu</th><th>Học phí</th><th>Thao tác</th></tr></thead>
        <tbody>
          ${state.students
            .map((student) => {
              const account = accountForProfile("student", student.id);
              return `
                <tr>
                  <td>${personCell(student)}</td>
                  <td>${safe(student.city || "")}, ${safe(student.country || "")}<div class="meta-subtitle">${safe(student.timezone || "")}</div></td>
                  <td><span class="badge badge-blue">${safe(student.level || "N/A")}</span><div class="meta-subtitle">${safe(student.goal || "")}</div></td>
                  <td>${money(student.studentRatePerHour)}/giờ</td>
                  <td>${account ? accountActionButtons(account) : `<span class="meta-subtitle">Chưa có tài khoản</span>`}</td>
                </tr>
              `;
            })
            .join("")}
        </tbody>
      </table>
    </div>
  `;
}

function renderAccountsTable() {
  return `
    <div class="table-wrap">
      <table>
        <thead><tr><th>Tài khoản</th><th>Phân quyền</th><th>Trực tuyến</th><th>Trạng thái</th><th>Ngày tạo</th><th>Thao tác</th></tr></thead>
        <tbody>
          ${state.accounts
            .map(
              (account) => `
                <tr>
                  <td>${personCell({ name: account.name, email: account.email, avatarColor: profileColor(account) })}</td>
                  <td>${safe(roleLabel(account.role))}</td>
                  <td>${accountPresenceBadge(account)}</td>
                  <td>${account.status === "active" ? `<span class="badge badge-good">Đang hoạt động</span>` : `<span class="badge badge-rose">Đã khóa</span>`}</td>
                  <td>${safe(formatDateTime(account.createdAt))}</td>
                  <td>${account.id === currentAccountId ? `<span class="meta-subtitle">Tài khoản hiện tại</span>` : accountActionButtons(account)}</td>
                </tr>
              `
            )
            .join("")}
        </tbody>
      </table>
    </div>
  `;
}

function accountActionButtons(account) {
  const editable = ["teacher", "student"].includes(account.role);
  return `
    <div class="table-actions">
      ${
        editable
          ? `<button class="btn btn-secondary btn-small" type="button" data-action="edit-account" data-id="${safe(account.id)}">${icon("pencil")} Sửa</button>`
          : ""
      }
      <button class="btn btn-secondary btn-small" type="button" data-action="toggle-account" data-id="${safe(account.id)}">
        ${account.status === "active" ? icon("lock") + " Khóa" : icon("unlock") + " Mở"}
      </button>
      ${
        editable
          ? `<button class="btn btn-warning btn-small" type="button" data-action="delete-account" data-id="${safe(account.id)}">${icon("trash-2")} Xóa</button>`
          : ""
      }
    </div>
  `;
}

function renderTeacherPayrollTable() {
  const rows = state.teachers.map((teacher) => {
    const lessons = lessonsForTeacher(teacher.id).filter((lesson) => lesson.status !== "cancelled");
    return {
      teacher,
      lessons,
      completed: lessons.filter((lesson) => lesson.status === "completed").length,
      hours: sum(lessons.map((lesson) => lesson.durationHours)),
      amount: sum(lessons.map(lessonTeacherAmount))
    };
  });

  return `
    <div class="table-wrap">
      <table>
        <thead><tr><th>Giáo viên</th><th>Số buổi</th><th>Đã dạy</th><th>Số giờ</th><th>Tạm tính phải trả</th></tr></thead>
        <tbody>
          ${rows
            .map(
              (row) => `
                <tr>
                  <td>${personCell(row.teacher)}</td>
                  <td>${row.lessons.length}</td>
                  <td>${row.completed}</td>
                  <td>${formatNumber(row.hours)}</td>
                  <td>${money(row.amount)}</td>
                </tr>
              `
            )
            .join("")}
        </tbody>
      </table>
    </div>
  `;
}

function renderStudentReceivableTable() {
  const rows = state.students.map((student) => {
    const lessons = lessonsForStudent(student.id).filter((lesson) => lesson.status !== "cancelled");
    return {
      student,
      lessons,
      completed: lessons.filter((lesson) => lesson.status === "completed").length,
      hours: sum(lessons.map((lesson) => lesson.durationHours)),
      amount: sum(lessons.map(lessonStudentAmount))
    };
  });

  return `
    <div class="table-wrap">
      <table>
        <thead><tr><th>Học viên</th><th>Số buổi</th><th>Đã học</th><th>Số giờ</th><th>Tạm tính phải thu</th></tr></thead>
        <tbody>
          ${rows
            .map(
              (row) => `
                <tr>
                  <td>${personCell(row.student)}</td>
                  <td>${row.lessons.length}</td>
                  <td>${row.completed}</td>
                  <td>${formatNumber(row.hours)}</td>
                  <td>${money(row.amount)}</td>
                </tr>
              `
            )
            .join("")}
        </tbody>
      </table>
    </div>
  `;
}

function renderTeacherStudentSummary(teacherId) {
  const lessons = lessonsForTeacher(teacherId).filter((lesson) => lesson.status !== "cancelled");
  const studentIds = [...new Set(lessons.map((lesson) => lesson.studentId))];
  if (!studentIds.length) return `<div class="empty">Chưa có học viên được phân công.</div>`;

  return `
    <div class="notice-list">
      ${studentIds
        .map((studentId) => {
          const student = getStudent(studentId);
          const studentLessons = lessons.filter((lesson) => lesson.studentId === studentId);
          return `
            <div class="notice">
              <h3>${safe(student?.name || "N/A")}</h3>
              <p>${studentLessons.length} buổi - ${formatNumber(sum(studentLessons.map((lesson) => lesson.durationHours)))} giờ - ${money(sum(studentLessons.map(lessonTeacherAmount)))} tạm tính.</p>
            </div>
          `;
        })
        .join("")}
    </div>
  `;
}

function renderTeacherCard(teacher) {
  return `
    <div class="profile-card" style="margin-bottom: 10px;">
      ${brandedAvatar(teacher.name, teacher.avatarColor)}
      <div>
        <div class="meta-title">${safe(teacher.name)}</div>
        <div class="meta-subtitle">${safe(teacher.city || "")}, ${safe(teacher.country || "")}</div>
        <div class="tag-list">
          ${(teacher.specialties || []).slice(0, 3).map((item) => `<span class="tag">${safe(item)}</span>`).join("")}
        </div>
      </div>
    </div>
  `;
}

function renderNotice(notice) {
  return `
    <article class="notice">
      <div class="button-row" style="justify-content: space-between;">
        <h3>${safe(notice.title)}</h3>
        <span class="badge">${safe(audienceLabel(notice.audience))}</span>
      </div>
      <p>${safe(notice.message)}</p>
      <div class="meta-subtitle">${safe(formatDateTime(notice.createdAt))}</div>
    </article>
  `;
}

function metric(label, value, note, iconName) {
  return `
    <article class="metric">
      <div class="metric-top">
        <span class="metric-label">${safe(label)}</span>
        <span class="metric-icon">${icon(iconName)}</span>
      </div>
      <div>
        <strong>${safe(String(value))}</strong>
        <small>${safe(note)}</small>
      </div>
    </article>
  `;
}

function handleClick(event) {
  const target = event.target.closest("[data-action]");
  if (!target) return;
  const action = target.dataset.action;

  if (action === "nav") {
    activeView = target.dataset.view || defaultView(currentAccount()?.role);
    if (activeView === "audit") {
      auditLogLoaded = false;
      loadAuditLog();
    }
    render();
    return;
  }

  if (action === "refresh-audit") {
    auditLogLoaded = false;
    loadAuditLog();
    render();
    return;
  }

  if (action === "clear-nexa-ai") {
    resetNexaAssistantMessages();
    render();
    return;
  }

  if (action === "nexa-quick-prompt") {
    submitNexaAssistantQuestion(target.dataset.prompt || "");
    return;
  }

  if (action === "logout") {
    logout();
    return;
  }

  if (action === "start-call") {
    startCall(target.dataset.id);
    return;
  }

  if (action === "stop-call") {
    stopCall(target.dataset.id);
    return;
  }

  if (action === "view-call") {
    joinCall(target.dataset.id);
    return;
  }

  if (action === "join-call") {
    joinCall(target.dataset.id);
    return;
  }

  if (action === "complete-lesson") {
    updateLessonStatus(target.dataset.id, "completed");
    return;
  }

  if (action === "schedule-lesson") {
    updateLessonStatus(target.dataset.id, "scheduled");
    return;
  }

  if (action === "cancel-lesson") {
    updateLessonStatus(target.dataset.id, "cancelled");
    return;
  }

  if (action === "delete-lesson") {
    deleteLesson(target.dataset.id);
    return;
  }

  if (action === "edit-lesson") {
    editLesson(target.dataset.id);
    return;
  }

  if (action === "cancel-edit-lesson") {
    editingLessonId = null;
    render();
    return;
  }

  if (action === "toggle-account") {
    toggleAccount(target.dataset.id);
    return;
  }

  if (action === "edit-account") {
    editAccount(target.dataset.id);
    return;
  }

  if (action === "cancel-edit-account") {
    editingAccountId = null;
    render();
    return;
  }

  if (action === "delete-account") {
    deleteAccount(target.dataset.id);
    return;
  }

  if (action === "start-placement-test") {
    startPlacementTest(target.dataset.id);
    return;
  }

  if (action === "start-recording") {
    startSpeakingRecording(target.dataset.target);
    return;
  }

  if (action === "stop-recording") {
    stopSpeakingRecording(target.dataset.target);
    return;
  }

  if (action === "new-placement-template") {
    editingTemplateId = null;
    render();
    return;
  }

  if (action === "edit-placement-template") {
    editingTemplateId = target.dataset.id || null;
    render();
    return;
  }

  if (action === "cancel-placement-template") {
    editingTemplateId = null;
    render();
    return;
  }

  if (action === "download-json") {
    if (currentAccount()?.role !== "admin") {
      showToast("Chỉ admin có quyền sao lưu dữ liệu.");
      return;
    }
    downloadText("asean-holding-data.json", JSON.stringify(state, null, 2), "application/json");
    return;
  }

  if (action === "export-finance") {
    exportFinanceCsv();
    return;
  }

  if (action === "export-finance-excel") {
    exportFinanceExcel();
  }
}

function handleChange(event) {
  if (event.target.matches("[data-language-select]")) {
    const language = LANGUAGES[event.target.value] ? event.target.value : "vi";
    currentLanguage = language;
    localStorage.setItem(LANGUAGE_KEY, language);
    render();
  }
}

function handleScroll(event) {
  if (event.target?.classList?.contains("nexa-rules-scroll")) {
    nexaRulesScrollTop = event.target.scrollTop;
  }
}

function handleSubmit(event) {
  if (event.target.id === "login-form") {
    event.preventDefault();
    loginFromForm(event.target);
    return;
  }

  if (currentAccount()?.role === "student" && event.target.id.startsWith("placement-submit-")) {
    event.preventDefault();
    submitPlacementTest(event.target);
    return;
  }

  if (["teacher", "student"].includes(currentAccount()?.role) && event.target.id === "change-password-form") {
    event.preventDefault();
    changeOwnPassword(event.target);
    return;
  }

  if (["teacher", "student"].includes(currentAccount()?.role) && event.target.id === "nexa-assistant-form") {
    event.preventDefault();
    const question = String(new FormData(event.target).get("question") || "").trim();
    submitNexaAssistantQuestion(question);
    event.target.reset();
    return;
  }

  if (!currentAccount() || currentAccount().role !== "admin") {
    event.preventDefault();
    showToast("Chỉ admin được thực hiện thao tác này.");
    return;
  }

  if (event.target.id === "lesson-form") {
    event.preventDefault();
    if (event.target.dataset.lessonId) updateLesson(event.target);
    else createLesson(event.target);
    return;
  }

  if (event.target.id === "recurring-lesson-form") {
    event.preventDefault();
    createRecurringLessons(event.target);
    return;
  }

  if (event.target.id === "csv-lesson-form") {
    event.preventDefault();
    importLessonsCsv(event.target);
    return;
  }

  if (event.target.id === "account-form") {
    event.preventDefault();
    createAccount(event.target);
    return;
  }

  if (event.target.id === "edit-account-form") {
    event.preventDefault();
    updateAccount(event.target);
    return;
  }

  if (event.target.id === "placement-test-form") {
    event.preventDefault();
    createPlacementTest(event.target);
    return;
  }

  if (event.target.id.startsWith("placement-review-")) {
    event.preventDefault();
    reviewPlacementTest(event.target);
    return;
  }

  if (event.target.id === "placement-template-form") {
    event.preventDefault();
    savePlacementTemplate(event.target);
    return;
  }

  if (event.target.id === "notification-form") {
    event.preventDefault();
    createNotification(event.target);
    return;
  }

  if (event.target.id === "settings-form") {
    event.preventDefault();
    saveSettings(event.target);
  }
}

async function loginFromForm(form) {
  const formData = new FormData(form);
  const email = String(formData.get("email") || "").trim().toLowerCase();
  const password = String(formData.get("password") || "");
  const error = document.getElementById("login-error");
  error.style.display = "none";

  if (canUseServerApi()) {
    try {
      const response = await fetch("/api/login", {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
      });
      if (response.ok) {
        const payload = await response.json();
        state = normalizeState(payload.state);
        serverOnline = true;
        if (payload.sessionToken) sessionStorage.setItem(AUTH_TOKEN_KEY, payload.sessionToken);
        if (payload.csrfToken) sessionStorage.setItem(CSRF_TOKEN_KEY, payload.csrfToken);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
        loginAs(payload.account, { persist: false });
        return;
      }
      serverOnline = true;
    } catch (loginError) {
      serverOnline = false;
    }
  }

  const account = state.accounts.find((item) => item.email.toLowerCase() === email && item.password === password);
  if (!account || account.status !== "active") {
    error.textContent = translate("Email hoặc mật khẩu không đúng, hoặc tài khoản đã bị khóa.");
    error.style.display = "block";
    return;
  }
  loginAs(account);
}

function loginAs(account, options = {}) {
  markAccountOnline(account);
  currentAccountId = account.id;
  sessionStorage.setItem(SESSION_KEY, currentAccountId);
  activeView = defaultView(account.role);
  startRealtimeSync();
  render();
  if (options.persist !== false) persistState();
  showToast(`Xin chào ${account.name}.`);
}

async function logout() {
  const account = currentAccount();
  stopRealtimeSync();
  if (account && serverOnline) {
    try {
      await fetch("/api/logout", {
        method: "POST",
        credentials: "include",
        headers: authHeaders()
      });
    } catch (error) {
      // Local cleanup below still signs the user out of this browser.
    }
  } else if (account) {
    markAccountOffline(account);
    persistState();
  }
  currentAccountId = null;
  clearSessionStorage();
  activeView = "dashboard";
  render();
}

async function createLesson(form) {
  const data = new FormData(form);
  const teacher = getTeacher(String(data.get("teacherId")));
  const student = getStudent(String(data.get("studentId")));
  const durationHours = Number(data.get("durationHours"));
  if (!teacher || !student || !Number.isFinite(durationHours) || durationHours <= 0) {
    showToast("Thông tin lịch học chưa hợp lệ.");
    return;
  }
  if (!validateLessonMeetUrl(data)) return;

  const draft = lessonDraftFromForm(data, teacher, student, durationHours);
  if (!confirmLessonConflicts(draft)) return;

  const lesson = {
    id: makeId("lesson"),
    ...draft,
    status: "scheduled",
    roomId: makeId("asean-room"),
    adminStarted: false,
    createdBy: currentAccountId,
    createdAt: new Date().toISOString()
  };

  state.lessons.push(lesson);
  addLessonNotification(lesson, "created");
  await persistState("Đã tạo lịch học mới.");
  form.reset();
  activeView = "schedule";
  render();
}

async function updateLesson(form) {
  const lesson = getLesson(form.dataset.lessonId);
  if (!lesson) {
    showToast("Không tìm thấy buổi học cần sửa.");
    return;
  }
  const data = new FormData(form);
  const teacher = getTeacher(String(data.get("teacherId")));
  const student = getStudent(String(data.get("studentId")));
  const durationHours = Number(data.get("durationHours"));
  if (!teacher || !student || !Number.isFinite(durationHours) || durationHours <= 0) {
    showToast("Thông tin lịch học chưa hợp lệ.");
    return;
  }
  if (!validateLessonMeetUrl(data)) return;

  const draft = lessonDraftFromForm(data, teacher, student, durationHours);
  if (!confirmLessonConflicts(draft, lesson.id)) return;

  const previousLesson = JSON.parse(JSON.stringify(lesson));
  Object.assign(lesson, draft);
  addLessonNotification(lesson, "updated", previousLesson);
  editingLessonId = null;
  await persistState("Đã cập nhật phân công và lịch học.");
  activeView = "schedule";
  render();
}

async function createRecurringLessons(form) {
  const data = new FormData(form);
  const teacher = getTeacher(String(data.get("teacherId")));
  const student = getStudent(String(data.get("studentId")));
  const startDate = String(data.get("startDate"));
  const weeks = Math.max(1, Math.min(Number(data.get("weeks")) || 1, 52));
  const weekdays = data.getAll("weekdays").map(Number).filter((value) => Number.isInteger(value));
  const durationHours = Number(data.get("durationHours"));
  if (!teacher || !student || !startDate || !weekdays.length || !Number.isFinite(durationHours) || durationHours <= 0) {
    showToast("Thông tin lịch học chưa hợp lệ.");
    return;
  }
  if (!validateLessonMeetUrl(data)) return;

  const drafts = recurringLessonDates(startDate, weeks, weekdays).map((date) => lessonDraftFromForm(data, teacher, student, durationHours, { date }));
  const result = addLessonDrafts(drafts);
  await persistState(`Đã tạo ${result.created} lịch học. ${result.skipped ? `Bỏ qua ${result.skipped} lịch trùng.` : ""}`);
  form.reset();
  activeView = "schedule";
  render();
}

async function importLessonsCsv(form) {
  const rows = parseCsv(String(new FormData(form).get("csv") || ""));
  if (rows.length < 2) {
    showToast("CSV cần có dòng tiêu đề và ít nhất một dòng dữ liệu.");
    return;
  }
  const header = rows[0].map((item) => item.trim());
  const drafts = [];
  const errors = [];
  rows.slice(1).forEach((row, index) => {
    if (!row.some((cell) => String(cell || "").trim())) return;
    const item = Object.fromEntries(header.map((key, keyIndex) => [key, row[keyIndex] || ""]));
    const teacher = findTeacherByEmail(item.teacherEmail);
    const student = findStudentByEmail(item.studentEmail);
    const durationHours = Number(item.durationHours);
    if (!teacher || !student || !item.date || !item.startTime || !Number.isFinite(durationHours) || durationHours <= 0) {
      errors.push(index + 2);
      return;
    }
    const meetUrl = normalizeMeetUrl(item.googleMeetUrl);
    if (String(item.googleMeetUrl || "").trim() && !meetUrl) {
      errors.push(index + 2);
      return;
    }
    drafts.push({
      teacherId: teacher.id,
      studentId: student.id,
      title: String(item.title || "").trim() || `${teacher.name} - ${student.name}`,
      date: String(item.date || "").trim(),
      startTime: String(item.startTime || "").trim(),
      durationHours,
      teacherLessonAmount: Number(item.teacherLessonAmount) || Number(teacher.ratePerHour || state.settings.defaultTeacherRate),
      studentLessonAmount: Number(item.studentLessonAmount) || Number(student.studentRatePerHour || state.settings.defaultStudentRate),
      teacherRatePerHour: Number(teacher.ratePerHour || state.settings.defaultTeacherRate),
      studentRatePerHour: Number(student.studentRatePerHour || state.settings.defaultStudentRate),
      videoProvider: meetUrl ? "google-meet-manual" : "fallback",
      googleMeetUrl: meetUrl,
      notes: String(item.notes || "").trim()
    });
  });
  const result = addLessonDrafts(drafts);
  await persistState(`Import xong ${result.created} lịch. ${result.skipped ? `Bỏ qua ${result.skipped} lịch trùng. ` : ""}${errors.length ? `Lỗi dòng: ${errors.join(", ")}.` : ""}`);
  form.reset();
  activeView = "schedule";
  render();
}

function editLesson(lessonId) {
  const lesson = getLesson(lessonId);
  if (!lesson) return;
  editingLessonId = lesson.id;
  activeView = "schedule";
  render();
}

function lessonDraftFromForm(data, teacher, student, durationHours, overrides = {}) {
  const meetUrl = normalizeMeetUrl(data.get("googleMeetUrl"));
  const teacherAmount = Number(data.get("teacherLessonAmount"));
  const studentAmount = Number(data.get("studentLessonAmount"));
  return {
    teacherId: teacher.id,
    studentId: student.id,
    title: String(data.get("title") || "").trim(),
    date: overrides.date || String(data.get("date")),
    startTime: String(data.get("startTime")),
    durationHours,
    teacherLessonAmount: Number.isFinite(teacherAmount) && teacherAmount >= 0 ? teacherAmount : Number(teacher.ratePerHour || state.settings.defaultTeacherRate),
    studentLessonAmount: Number.isFinite(studentAmount) && studentAmount >= 0 ? studentAmount : Number(student.studentRatePerHour || state.settings.defaultStudentRate),
    teacherRatePerHour: Number(teacher.ratePerHour || state.settings.defaultTeacherRate),
    studentRatePerHour: Number(student.studentRatePerHour || state.settings.defaultStudentRate),
    videoProvider: meetUrl ? "google-meet-manual" : "fallback",
    googleMeetUrl: meetUrl,
    notes: String(data.get("notes") || "").trim()
  };
}

function validateLessonMeetUrl(data) {
  const rawMeetUrl = String(data.get("googleMeetUrl") || "").trim();
  if (!rawMeetUrl || normalizeMeetUrl(rawMeetUrl)) return true;
  showToast("Link Google Meet phải có dạng https://meet.google.com/...");
  return false;
}

function addLessonDrafts(drafts) {
  let created = 0;
  let skipped = 0;
  for (const draft of drafts) {
    if (lessonScheduleConflicts(draft).length) {
      skipped += 1;
      continue;
    }
    const lesson = {
      id: makeId("lesson"),
      ...draft,
      status: "scheduled",
      roomId: makeId("asean-room"),
      adminStarted: false,
      createdBy: currentAccountId,
      createdAt: new Date().toISOString()
    };
    state.lessons.push(lesson);
    addLessonNotification(lesson, "created");
    created += 1;
  }
  return { created, skipped };
}

function addLessonNotification(lesson, type, previousLesson = null) {
  const title = type === "updated" ? "Lịch học đã được cập nhật" : "Bạn có lịch học mới";
  const message = lessonNotificationMessage(lesson, type, previousLesson);
  [
    { audience: "teacher", targetTeacherId: lesson.teacherId, targetAccountId: accountForProfile("teacher", lesson.teacherId)?.id },
    { audience: "student", targetStudentId: lesson.studentId, targetAccountId: accountForProfile("student", lesson.studentId)?.id },
    previousLesson && previousLesson.teacherId !== lesson.teacherId
      ? { audience: "teacher", targetTeacherId: previousLesson.teacherId, targetAccountId: accountForProfile("teacher", previousLesson.teacherId)?.id }
      : null,
    previousLesson && previousLesson.studentId !== lesson.studentId
      ? { audience: "student", targetStudentId: previousLesson.studentId, targetAccountId: accountForProfile("student", previousLesson.studentId)?.id }
      : null
  ]
    .filter(Boolean)
    .forEach((target) => {
      state.notifications.push({
        id: makeId("notice"),
        ...target,
        title,
        message,
        lessonId: lesson.id,
        createdBy: currentAccountId,
        createdAt: new Date().toISOString()
      });
    });
  pruneNotifications();
}

function lessonNotificationMessage(lesson, type, previousLesson = null) {
  const teacher = getTeacher(lesson.teacherId);
  const student = getStudent(lesson.studentId);
  const nextText = `${lesson.title} - ${formatDate(lesson.date, "short")} ${lesson.startTime}, ${formatNumber(lesson.durationHours)} giờ. Giáo viên: ${teacher?.name || "N/A"}. Học viên: ${student?.name || "N/A"}.`;
  if (type !== "updated" || !previousLesson) return nextText;
  const beforeText = `${formatDate(previousLesson.date, "short")} ${previousLesson.startTime}`;
  return `Lịch cũ: ${beforeText}. Lịch mới: ${nextText}`;
}

function pruneNotifications(limit = 500) {
  if ((state.notifications || []).length <= limit) return;
  state.notifications = [...state.notifications].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)).slice(0, limit);
}

function recurringLessonDates(startDate, weeks, weekdays) {
  const start = new Date(`${startDate}T00:00:00`);
  const dates = [];
  for (let dayOffset = 0; dayOffset < weeks * 7; dayOffset += 1) {
    const date = new Date(start);
    date.setDate(start.getDate() + dayOffset);
    if (weekdays.includes(date.getDay())) dates.push(date.toISOString().slice(0, 10));
  }
  return dates;
}

function weekdayOptions() {
  return [
    { value: 1, label: "T2" },
    { value: 2, label: "T3" },
    { value: 3, label: "T4" },
    { value: 4, label: "T5" },
    { value: 5, label: "T6" },
    { value: 6, label: "T7" },
    { value: 0, label: "CN" }
  ];
}

function parseCsv(text) {
  const rows = [];
  let row = [];
  let cell = "";
  let quoted = false;
  for (let index = 0; index < text.length; index += 1) {
    const char = text[index];
    const next = text[index + 1];
    if (char === '"' && quoted && next === '"') {
      cell += '"';
      index += 1;
      continue;
    }
    if (char === '"') {
      quoted = !quoted;
      continue;
    }
    if (char === "," && !quoted) {
      row.push(cell.trim());
      cell = "";
      continue;
    }
    if ((char === "\n" || char === "\r") && !quoted) {
      if (char === "\r" && next === "\n") index += 1;
      row.push(cell.trim());
      if (row.some((item) => item)) rows.push(row);
      row = [];
      cell = "";
      continue;
    }
    cell += char;
  }
  row.push(cell.trim());
  if (row.some((item) => item)) rows.push(row);
  return rows;
}

async function createAccount(form) {
  const data = new FormData(form);
  const role = String(data.get("role"));
  const name = String(data.get("name") || "").trim();
  const email = String(data.get("email") || "").trim().toLowerCase();
  const password = String(data.get("password") || "").trim();
  const rate = Number(data.get("rate"));

  if (!name || !email) {
    showToast("Vui lòng nhập đủ họ tên và email.");
    return;
  }

  if (state.accounts.some((account) => account.email.toLowerCase() === email)) {
    showToast("Email này đã tồn tại trong hệ thống.");
    return;
  }

  const profileId = role === "admin" ? null : makeId(role);
  const account = {
    id: makeId("acc"),
    role,
    profileId,
    name,
    email,
    password,
    status: "active",
    createdAt: new Date().toISOString()
  };
  state.accounts.push(account);

  if (role === "teacher") {
    state.teachers.push({
      id: profileId,
      name,
      email,
      country: String(data.get("country") || "Philippines").trim(),
      city: String(data.get("city") || "").trim(),
      timezone: String(data.get("timezone") || "Asia/Manila").trim(),
      ratePerHour: Number.isFinite(rate) && rate > 0 ? rate : state.settings.defaultTeacherRate,
      specialties: splitTags(String(data.get("level") || "Conversation")),
      rating: 5,
      status: "active",
      avatarColor: randomProfileColor()
    });
  }

  if (role === "student") {
    state.students.push({
      id: profileId,
      name,
      email,
      country: String(data.get("country") || "").trim(),
      city: String(data.get("city") || "").trim(),
      timezone: String(data.get("timezone") || "Asia/Ho_Chi_Minh").trim(),
      level: String(data.get("level") || "A1").trim(),
      goal: String(data.get("goal") || "Học tiếng Anh online").trim(),
      studentRatePerHour: Number.isFinite(rate) && rate > 0 ? rate : state.settings.defaultStudentRate,
      status: "active",
      avatarColor: randomProfileColor()
    });
  }

  await persistState("Đã tạo tài khoản mới. Hệ thống sẽ gửi email song ngữ chứa mật khẩu tạm và khuyến nghị đổi mật khẩu cho giáo viên/học viên.");
  form.reset();
  render();
}

function editAccount(accountId) {
  const account = state.accounts.find((item) => item.id === accountId);
  if (!account || !["teacher", "student"].includes(account.role)) {
    showToast("Chỉ sửa trực tiếp tài khoản giáo viên hoặc học viên tại đây.");
    return;
  }
  editingAccountId = account.id;
  activeView = "people";
  render();
}

async function updateAccount(form) {
  const account = state.accounts.find((item) => item.id === form.dataset.accountId);
  if (!account || !["teacher", "student"].includes(account.role)) {
    showToast("Không tìm thấy tài khoản cần sửa.");
    return;
  }
  const profile = profileForAccount(account);
  if (!profile) {
    showToast("Tài khoản chưa gắn hồ sơ phù hợp.");
    return;
  }

  const data = new FormData(form);
  const name = String(data.get("name") || "").trim();
  const email = String(data.get("email") || "").trim().toLowerCase();
  const password = String(data.get("password") || "").trim();
  const rate = Number(data.get("rate"));

  if (!name || !email) {
    showToast("Vui lòng nhập đủ họ tên và email.");
    return;
  }
  if (state.accounts.some((item) => item.id !== account.id && item.email.toLowerCase() === email)) {
    showToast("Email này đã tồn tại trong hệ thống.");
    return;
  }

  account.name = name;
  account.email = email;
  if (password) account.password = password;
  else delete account.password;
  account.status = String(data.get("status") || "active");

  profile.name = name;
  profile.email = email;
  profile.country = String(data.get("country") || "").trim();
  profile.city = String(data.get("city") || "").trim();
  profile.timezone = String(data.get("timezone") || "").trim();
  profile.status = account.status === "active" ? "active" : "locked";

  if (account.role === "teacher") {
    profile.ratePerHour = Number.isFinite(rate) && rate > 0 ? rate : state.settings.defaultTeacherRate;
    profile.specialties = splitTags(String(data.get("level") || "Conversation"));
  } else {
    profile.studentRatePerHour = Number.isFinite(rate) && rate > 0 ? rate : state.settings.defaultStudentRate;
    profile.level = String(data.get("level") || "A1").trim();
    profile.goal = String(data.get("goal") || "Học tiếng Anh online").trim();
  }

  editingAccountId = null;
  await persistState("Đã cập nhật thông tin tài khoản.");
  render();
}

async function changeOwnPassword(form) {
  const user = currentAccount();
  if (!["teacher", "student"].includes(user?.role)) {
    showToast("Chỉ giáo viên và học viên được tự đổi mật khẩu tại đây.");
    return;
  }

  const data = new FormData(form);
  const currentPassword = String(data.get("currentPassword") || "");
  const newPassword = String(data.get("newPassword") || "");
  const confirmPassword = String(data.get("confirmPassword") || "");
  const errorBox = document.getElementById("change-password-error");
  if (errorBox) errorBox.style.display = "none";

  if (newPassword.length < 8) {
    showFormError(errorBox, "Mật khẩu mới phải có ít nhất 8 ký tự.");
    return;
  }
  if (newPassword !== confirmPassword) {
    showFormError(errorBox, "Mật khẩu mới nhập lại chưa khớp.");
    return;
  }

  if (serverOnline) {
    try {
      const response = await fetch("/api/change-password", {
        method: "POST",
        credentials: "include",
        headers: authHeaders({ "Content-Type": "application/json" }),
        body: JSON.stringify({ currentPassword, newPassword })
      });
      if (response.ok) {
        const payload = await response.json();
        Object.assign(user, payload.account || {});
        form.reset();
        showToast("Đã đổi mật khẩu. Vui lòng dùng mật khẩu mới cho lần đăng nhập tiếp theo.");
        return;
      }
      const payload = await response.json().catch(() => ({}));
      showFormError(errorBox, payload.error === "Current password is incorrect" ? "Mật khẩu hiện tại không đúng." : "Không thể đổi mật khẩu. Vui lòng thử lại.");
      return;
    } catch (error) {
      serverOnline = false;
    }
  }

  if (!user.password || user.password !== currentPassword) {
    showFormError(errorBox, "Mật khẩu hiện tại không đúng.");
    return;
  }
  user.password = newPassword;
  await persistState("Đã đổi mật khẩu. Vui lòng dùng mật khẩu mới cho lần đăng nhập tiếp theo.");
  form.reset();
}

async function deleteAccount(accountId) {
  const account = state.accounts.find((item) => item.id === accountId);
  if (!account || !["teacher", "student"].includes(account.role)) {
    showToast("Chỉ có thể xóa tài khoản giáo viên hoặc học viên tại đây.");
    return;
  }
  if (account.id === currentAccountId) {
    showToast("Không thể xóa tài khoản đang đăng nhập.");
    return;
  }

  const profile = profileForAccount(account);
  const name = account.name;
  const relatedLessons = account.role === "teacher" ? lessonsForTeacher(account.profileId) : lessonsForStudent(account.profileId);
  const relatedTests = account.role === "student" ? placementTestsForStudent(account.profileId) : [];
  const detail =
    account.role === "teacher"
      ? `${relatedLessons.length} lịch học liên quan cũng sẽ bị xóa.`
      : `${relatedLessons.length} lịch học và ${relatedTests.length} bài test đầu vào liên quan cũng sẽ bị xóa.`;
  if (!window.confirm(translate(`Xóa tài khoản ${name}? ${detail}`))) return;

  state.accounts = state.accounts.filter((item) => item.id !== account.id);
  if (account.role === "teacher") {
    state.teachers = state.teachers.filter((teacher) => teacher.id !== account.profileId);
    state.lessons = state.lessons.filter((lesson) => lesson.teacherId !== account.profileId);
  } else {
    state.students = state.students.filter((student) => student.id !== account.profileId);
    state.lessons = state.lessons.filter((lesson) => lesson.studentId !== account.profileId);
    state.placementTests = state.placementTests.filter((test) => test.studentId !== account.profileId);
  }
  pruneActiveCalls();
  if (profile?.id === editingAccountId || account.id === editingAccountId) editingAccountId = null;
  await persistState("Đã xóa tài khoản và dữ liệu liên quan.");
  activeView = "people";
  render();
}

async function createPlacementTest(form) {
  const data = new FormData(form);
  const student = getStudent(String(data.get("studentId")));
  const template = placementTemplate(String(data.get("templateId")));
  if (!student || !template) {
    showToast("Vui lòng chọn học viên và mẫu test hợp lệ.");
    return;
  }

  const test = normalizePlacementTest({
    id: makeId("placement"),
    templateId: template.id,
    studentId: student.id,
    title: String(data.get("title") || template.title).trim(),
    level: template.level,
    durationMinutes: Number(data.get("durationMinutes")) || template.durationMinutes,
    dueDate: String(data.get("dueDate") || ""),
    status: "assigned",
    sections: cloneTestSections(template.sections),
    createdBy: currentAccountId,
    createdAt: new Date().toISOString()
  });

  state.placementTests.push(test);
  await persistState("Đã giao bài test đầu vào cho học viên.");
  form.reset();
  activeView = "placement";
  render();
}

async function startPlacementTest(testId) {
  const test = getPlacementTest(testId);
  const student = studentForCurrentUser();
  if (!test || !student || test.studentId !== student.id) {
    showToast("Không tìm thấy bài test phù hợp.");
    return;
  }
  if (test.status !== "assigned") {
    activeView = "placement";
    render();
    return;
  }
  test.status = "in_progress";
  test.startedAt = new Date().toISOString();
  await persistState("Bài test đã bắt đầu. Hãy hoàn thành trong thời gian được giao.");
  activeView = "placement";
  render();
}

async function startSpeakingRecording(targetId) {
  if (!navigator.mediaDevices?.getUserMedia || typeof MediaRecorder === "undefined") {
    showToast("Trình duyệt chưa hỗ trợ ghi âm microphone.");
    return;
  }
  if (recordingState) {
    showToast("Đang có một bản ghi khác. Hãy dừng bản ghi hiện tại trước.");
    return;
  }
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    const recorder = new MediaRecorder(stream);
    const chunks = [];
    recorder.addEventListener("dataavailable", (event) => {
      if (event.data.size) chunks.push(event.data);
    });
    recorder.addEventListener("stop", () => {
      const blob = new Blob(chunks, { type: recorder.mimeType || "audio/webm" });
      const reader = new FileReader();
      reader.addEventListener("loadend", () => {
        const input = document.getElementById(targetId);
        if (input) input.value = String(reader.result || "");
        updateRecorderUi(targetId, "Đã ghi âm. Bạn có thể nghe lại trước khi nộp.", String(reader.result || ""));
      });
      reader.readAsDataURL(blob);
      stream.getTracks().forEach((track) => track.stop());
      recordingState = null;
    });
    recordingState = { targetId, recorder, stream };
    recorder.start();
    updateRecorderUi(targetId, "Đang ghi âm...", "");
  } catch (error) {
    showToast("Không thể mở microphone. Hãy kiểm tra quyền truy cập mic của trình duyệt.");
  }
}

function stopSpeakingRecording(targetId) {
  if (!recordingState || recordingState.targetId !== targetId) return;
  recordingState.recorder.stop();
}

function updateRecorderUi(targetId, status, audioDataUrl) {
  const wrapper = document.querySelector(`[data-recorder-for="${CSS.escape(targetId)}"]`);
  if (!wrapper) return;
  const startButton = wrapper.querySelector('[data-action="start-recording"]');
  const stopButton = wrapper.querySelector('[data-action="stop-recording"]');
  const statusNode = wrapper.querySelector(".recorder-status");
  const audio = wrapper.querySelector(".recording-preview");
  const isRecording = status === "Đang ghi âm...";
  if (startButton) startButton.disabled = isRecording;
  if (stopButton) stopButton.disabled = !isRecording;
  if (statusNode) statusNode.textContent = status;
  if (audio && audioDataUrl) {
    audio.src = audioDataUrl;
    audio.classList.remove("hidden");
  }
}

async function submitPlacementTest(form) {
  const test = getPlacementTest(form.dataset.testId);
  const student = studentForCurrentUser();
  if (!test || !student || test.studentId !== student.id) {
    showToast("Không thể nộp bài test này.");
    return;
  }

  const data = new FormData(form);
  const answers = {};
  const answerAudio = {};
  test.sections.forEach((section) => {
    section.questions.forEach((question) => {
      const key = `${section.key}_${question.id}`;
      answers[key] = String(data.get(`answer_${section.key}_${question.id}`) || "").trim();
      const audio = String(data.get(`audio_${section.key}_${question.id}`) || "").trim();
      if (audio) answerAudio[key] = audio;
    });
  });

  test.answers = answers;
  test.answerAudio = answerAudio;
  test.scores = autoScorePlacementTest(test, answers, answerAudio);
  test.feedback = test.feedback || autoPlacementFeedback(test.scores);
  test.teachingPlan = test.teachingPlan || defaultTeachingPlan(test.scores, test.level);
  test.status = "submitted";
  test.submittedAt = new Date().toISOString();
  await persistState("Đã nộp bài test đầu vào. Admin sẽ xem và cập nhật lộ trình.");
  activeView = "placement";
  render();
}

async function reviewPlacementTest(form) {
  const test = getPlacementTest(form.dataset.testId);
  if (!test || test.status === "assigned" || test.status === "in_progress") {
    showToast("Bài test chưa có đáp án để đánh giá.");
    return;
  }

  const data = new FormData(form);
  test.scores = {
    listening: clampScore(data.get("score_listening")),
    speaking: clampScore(data.get("score_speaking")),
    reading: clampScore(data.get("score_reading")),
    comprehension: clampScore(data.get("score_comprehension")),
    pronunciation: clampScore(data.get("score_pronunciation"))
  };
  test.feedback = String(data.get("feedback") || "").trim();
  test.teachingPlan = String(data.get("teachingPlan") || "").trim();
  test.status = "reviewed";
  test.reviewedBy = currentAccountId;
  test.reviewedAt = new Date().toISOString();
  await persistState("Đã lưu đánh giá và lộ trình cho học viên.");
  render();
}

async function savePlacementTemplate(form) {
  const data = new FormData(form);
  const templateId = form.dataset.templateId || "";
  const sections = [];
  for (const key of placementSectionKeys()) {
    const title = String(data.get(`section_${key}_title`) || placementSkillLabel(key));
    const prompt = String(data.get(`section_${key}_prompt`) || "").trim();
    const lines = String(data.get(`section_${key}_questions`) || "")
      .split(/\r?\n/)
      .map((line) => line.trim())
      .filter(Boolean);
    const section = {
      key,
      title,
      prompt,
      questions: lines.map((question, index) => ({
        id: `${key}-${index + 1}`,
        type: "textarea",
        question,
        points: 10
      }))
    };
    if (key === "listening") {
      const file = form.elements[`section_${key}_audio`]?.files?.[0];
      const removeAudio = data.get(`section_${key}_removeAudio`) === "1";
      section.audioDataUrl = removeAudio ? "" : String(data.get(`section_${key}_audioExisting`) || "");
      section.audioName = removeAudio ? "" : String(data.get(`section_${key}_audioNameExisting`) || "");
      if (file) {
        section.audioDataUrl = await fileToDataUrl(file);
        section.audioName = file.name;
      }
    }
    sections.push(section);
  }
  const template = normalizePlacementTemplate({
    id: templateId || makeId("template"),
    title: String(data.get("title") || "").trim(),
    level: String(data.get("level") || "").trim(),
    durationMinutes: Number(data.get("durationMinutes")) || 60,
    description: String(data.get("description") || "").trim(),
    sections
  });

  if (!template.title || !template.description || !template.sections.some((section) => section.questions.length)) {
    showToast("Vui lòng nhập tên, mô tả và ít nhất một câu hỏi cho mẫu test.");
    return;
  }

  const existingIndex = state.placementTemplates.findIndex((item) => item.id === template.id);
  if (existingIndex >= 0) {
    state.placementTemplates[existingIndex] = template;
  } else {
    state.placementTemplates.push(template);
  }
  editingTemplateId = null;
  await persistState(existingIndex >= 0 ? "Đã cập nhật mẫu test." : "Đã tạo mẫu test mới.");
  activeView = "placement";
  render();
}

async function createNotification(form) {
  const data = new FormData(form);
  state.notifications.push({
    id: makeId("notice"),
    audience: String(data.get("audience")),
    title: String(data.get("title") || "").trim(),
    message: String(data.get("message") || "").trim(),
    createdBy: currentAccountId,
    createdAt: new Date().toISOString()
  });
  await persistState("Đã gửi thông báo.");
  form.reset();
  render();
}

async function saveSettings(form) {
  const data = new FormData(form);
  state.settings.currency = String(data.get("currency") || "USD");
  state.settings.defaultTeacherRate = Number(data.get("defaultTeacherRate")) || state.settings.defaultTeacherRate;
  state.settings.defaultStudentRate = Number(data.get("defaultStudentRate")) || state.settings.defaultStudentRate;
  await persistState("Đã lưu cấu hình.");
  render();
}

async function startCall(lessonId) {
  const lesson = getLesson(lessonId);
  if (!canCurrentUserStartCall(lesson)) {
    showToast("Chỉ admin hoặc giáo viên của buổi học có quyền bắt đầu video call.");
    return;
  }
  if (!lesson || lesson.status === "cancelled") {
    showToast("Không thể mở phòng cho buổi học này.");
    return;
  }

  const now = new Date().toISOString();
  lesson.adminStarted = true;
  lesson.callStartedBy = currentAccountId;
  lesson.callStartedAt = lesson.callStartedAt || now;
  state.callState.activeLessonIds = uniqueIds([...activeCallIds(), lesson.id]);
  state.callState.activeLessonId = lesson.id;
  state.callState.startedBy = currentAccountId;
  state.callState.startedAt = now;
  selectedVideoLessonId = lesson.id;
  activeView = "video";
  await persistState("Đã mở phòng video cho lớp học.");
  render();
}

async function stopCall(lessonId) {
  const targetId = lessonId || selectedVideoLessonId || state.callState.activeLessonId;
  const lesson = getLesson(targetId);
  if (!canCurrentUserStartCall(lesson)) {
    showToast("Chỉ admin hoặc giáo viên của buổi học có quyền kết thúc video call.");
    return;
  }
  if (!lesson || !isLessonLive(lesson)) {
    showToast("Không tìm thấy lớp đang mở.");
    return;
  }
  lesson.adminStarted = false;
  lesson.callStartedBy = null;
  lesson.callStartedAt = null;
  state.callState.activeLessonIds = activeCallIds().filter((id) => id !== lesson.id);
  state.callState.activeLessonId = state.callState.activeLessonIds[0] || null;
  if (selectedVideoLessonId === lesson.id) selectedVideoLessonId = state.callState.activeLessonId;
  if (!state.callState.activeLessonId) {
    state.callState.startedBy = null;
    state.callState.startedAt = null;
  }
  await persistState("Đã kết thúc phòng video của lớp này.");
  render();
}

function joinCall(lessonId) {
  const lesson = getLesson(lessonId);
  if (!lesson || !isLessonLive(lesson) || !canCurrentUserJoin(lesson)) {
    showToast("Admin chưa mở phòng cho buổi học này.");
    return;
  }
  selectedVideoLessonId = lesson.id;
  state.callState.activeLessonId = lesson.id;
  activeView = "video";
  const meetUrl = googleMeetUrl(lesson);
  if (meetUrl) {
    window.open(meetUrl, "_blank", "noopener");
  }
  render();
}

async function updateLessonStatus(lessonId, status) {
  const lesson = getLesson(lessonId);
  if (!lesson) return;
  lesson.status = status;
  if (status === "cancelled" && isLessonLive(lesson)) {
    state.callState.activeLessonIds = activeCallIds().filter((id) => id !== lesson.id);
    state.callState.activeLessonId = state.callState.activeLessonIds[0] || null;
    lesson.adminStarted = false;
    lesson.callStartedBy = null;
    lesson.callStartedAt = null;
    if (selectedVideoLessonId === lesson.id) selectedVideoLessonId = state.callState.activeLessonId;
  }
  await persistState("Đã cập nhật trạng thái buổi học.");
  render();
}

async function deleteLesson(lessonId) {
  const lesson = getLesson(lessonId);
  if (!lesson) return;
  if (!window.confirm(translate("Xóa buổi học này khỏi hệ thống?"))) return;
  state.lessons = state.lessons.filter((item) => item.id !== lessonId);
  pruneActiveCalls();
  if (editingLessonId === lessonId) editingLessonId = null;
  await persistState("Đã xóa buổi học.");
  render();
}

async function toggleAccount(accountId) {
  const account = state.accounts.find((item) => item.id === accountId);
  if (!account || account.id === currentAccountId) return;
  account.status = account.status === "active" ? "locked" : "active";
  if (account.status === "locked") markAccountOffline(account);
  await persistState("Đã cập nhật trạng thái tài khoản.");
  render();
}

function exportFinanceCsv() {
  const header = ["type", "name", "sessions", "hours", "amount"];
  const teacherRows = state.teachers.map((teacher) => {
    const lessons = lessonsForTeacher(teacher.id).filter((lesson) => lesson.status !== "cancelled");
    return ["teacher_payable", teacher.name, lessons.length, sum(lessons.map((lesson) => lesson.durationHours)), sum(lessons.map(lessonTeacherAmount))];
  });
  const studentRows = state.students.map((student) => {
    const lessons = lessonsForStudent(student.id).filter((lesson) => lesson.status !== "cancelled");
    return ["student_receivable", student.name, lessons.length, sum(lessons.map((lesson) => lesson.durationHours)), sum(lessons.map(lessonStudentAmount))];
  });
  const csv = [header, ...teacherRows, ...studentRows]
    .map((row) => row.map((cell) => `"${String(cell).replaceAll('"', '""')}"`).join(","))
    .join("\n");
  downloadText("asean-holding-finance.csv", csv, "text/csv");
}

function exportFinanceExcel() {
  if (currentAccount()?.role !== "admin") {
    showToast("Chỉ admin được xuất báo cáo Excel.");
    return;
  }

  const billable = state.lessons.filter((lesson) => lesson.status !== "cancelled");
  const teacherRows = state.teachers.map((teacher) => {
    const lessons = lessonsForTeacher(teacher.id).filter((lesson) => lesson.status !== "cancelled");
    return {
      name: teacher.name,
      email: teacher.email,
      lessons: lessons.length,
      completed: lessons.filter((lesson) => lesson.status === "completed").length,
      scheduled: lessons.filter((lesson) => lesson.status === "scheduled").length,
      hours: sum(lessons.map((lesson) => lesson.durationHours)),
      amount: sum(lessons.map(lessonTeacherAmount))
    };
  });
  const studentRows = state.students.map((student) => {
    const lessons = lessonsForStudent(student.id).filter((lesson) => lesson.status !== "cancelled");
    return {
      name: student.name,
      email: student.email,
      lessons: lessons.length,
      completed: lessons.filter((lesson) => lesson.status === "completed").length,
      scheduled: lessons.filter((lesson) => lesson.status === "scheduled").length,
      hours: sum(lessons.map((lesson) => lesson.durationHours)),
      amount: sum(lessons.map(lessonStudentAmount))
    };
  });

  const summaryRows = [
    ["Chỉ số", "Giá trị"],
    ["Tổng số buổi hợp lệ", billable.length],
    ["Tổng số giờ học/dạy", formatNumber(sum(billable.map((lesson) => lesson.durationHours)))],
    ["Tổng tiền trả giáo viên", money(sum(billable.map(lessonTeacherAmount)))],
    ["Tổng tiền thu học viên", money(sum(billable.map(lessonStudentAmount)))],
    ["Biên lợi nhuận tạm tính", money(sum(billable.map(lessonStudentAmount)) - sum(billable.map(lessonTeacherAmount)))],
    ["Ngày xuất báo cáo", formatDateTime(new Date().toISOString())]
  ];

  const html = `
    <!doctype html>
    <html>
      <head>
        <meta charset="UTF-8" />
        <style>
          body { font-family: Arial, sans-serif; }
          table { border-collapse: collapse; margin-bottom: 22px; width: 100%; }
          th, td { border: 1px solid #999; padding: 6px 8px; vertical-align: top; }
          th { background: #dff3ed; font-weight: bold; }
          .section { background: #0f766e; color: #fff; font-size: 18px; font-weight: bold; }
          .total { background: #fff3df; font-weight: bold; }
        </style>
      </head>
      <body>
        ${excelSection("Tổng quan", summaryRows)}
        ${excelSection("Phần giáo viên", [
          ["Giáo viên", "Email", "Số buổi", "Đã dạy", "Đã xếp", "Số giờ", "Tổng tiền phải trả"],
          ...teacherRows.map((row) => [row.name, row.email, row.lessons, row.completed, row.scheduled, formatNumber(row.hours), money(row.amount)]),
          ["Tổng", "", sum(teacherRows.map((row) => row.lessons)), sum(teacherRows.map((row) => row.completed)), sum(teacherRows.map((row) => row.scheduled)), formatNumber(sum(teacherRows.map((row) => row.hours))), money(sum(teacherRows.map((row) => row.amount)))]
        ])}
        ${excelSection("Phần học viên", [
          ["Học viên", "Email", "Số buổi", "Đã học", "Đã xếp", "Số giờ", "Tổng tiền phải thu"],
          ...studentRows.map((row) => [row.name, row.email, row.lessons, row.completed, row.scheduled, formatNumber(row.hours), money(row.amount)]),
          ["Tổng", "", sum(studentRows.map((row) => row.lessons)), sum(studentRows.map((row) => row.completed)), sum(studentRows.map((row) => row.scheduled)), formatNumber(sum(studentRows.map((row) => row.hours))), money(sum(studentRows.map((row) => row.amount)))]
        ])}
        ${excelSection("Chi tiết buổi học", [
          ["Ngày", "Giờ", "Tên buổi học", "Giáo viên", "Học viên", "Số giờ", "Tiền giáo viên", "Tiền học viên", "Trạng thái", "Ghi chú"],
          ...sortedLessons(state.lessons).map((lesson) => [
            formatDate(lesson.date),
            lesson.startTime || "",
            lesson.title,
            getTeacher(lesson.teacherId)?.name || "",
            getStudent(lesson.studentId)?.name || "",
            formatNumber(lesson.durationHours),
            money(lessonTeacherAmount(lesson)),
            money(lessonStudentAmount(lesson)),
            lessonStatusText(lesson.status),
            lesson.notes || ""
          ])
        ])}
      </body>
    </html>
  `;

  downloadText(`asean-holding-bao-cao-${todayISO()}.xls`, html, "application/vnd.ms-excel;charset=utf-8");
}

function excelSection(title, rows) {
  return `
    <table>
      <tr><td class="section" colspan="${Math.max(...rows.map((row) => row.length))}">${excelSafe(title)}</td></tr>
      ${rows
        .map((row, index) => {
          const tag = index === 0 ? "th" : "td";
          const cls = index === rows.length - 1 && String(row[0]).toLowerCase().includes("tổng") ? " class=\"total\"" : "";
          return `<tr${cls}>${row.map((cell) => `<${tag}>${excelSafe(cell)}</${tag}>`).join("")}</tr>`;
        })
        .join("")}
    </table>
  `;
}

function excelSafe(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function navItems(role) {
  const common = {
    dashboard: { id: "dashboard", label: "Tổng quan", icon: "layout-dashboard" },
    schedule: { id: "schedule", label: "Lịch học", icon: "calendar-days" },
    notifications: { id: "notifications", label: "Thông báo", icon: "bell" },
    video: { id: "video", label: "Video call", icon: "video" },
    profile: { id: "profile", label: "Hồ sơ", icon: "id-card" }
  };

  if (role === "admin") {
    return [
      common.dashboard,
      common.schedule,
      { id: "people", label: "Tài khoản", icon: "users" },
      { id: "finance", label: "Tài chính", icon: "wallet" },
      { id: "placement", label: "Test đầu vào", icon: "clipboard-check" },
      common.notifications,
      common.video,
      { id: "audit", label: "Nhật ký", icon: "shield-check" },
      { id: "settings", label: "Cài đặt", icon: "settings" }
    ];
  }

  if (role === "teacher") {
    return [
      common.dashboard,
      common.schedule,
      { id: "finance", label: "Tiền dạy", icon: "wallet" },
      common.notifications,
      common.video,
      { id: "assistant", label: "Nexa AI", icon: "bot" },
      common.profile
    ];
  }

  return [
    common.dashboard,
    common.schedule,
    { id: "payments", label: "Học phí", icon: "receipt" },
    { id: "placement", label: "Test đầu vào", icon: "clipboard-check" },
    common.notifications,
    common.video,
    { id: "assistant", label: "Nexa AI", icon: "bot" },
    common.profile
  ];
}

function defaultView() {
  return "dashboard";
}

function viewTitle(view, role) {
  const titles = {
    dashboard: "Tổng quan vận hành",
    schedule: role === "teacher" ? "Lịch dạy" : role === "student" ? "Thời khóa biểu" : "Xếp lịch học",
    people: "Quản lý tài khoản",
    finance: role === "teacher" ? "Tiền dạy giáo viên" : "Tài chính",
    payments: "Học phí",
    placement: "Test đầu vào",
    notifications: "Thông báo nhắc nhở",
    video: "Trung tâm video call",
    assistant: "Trợ lý Nexa AI",
    audit: "Nhật ký bảo mật",
    settings: "Cài đặt hệ thống",
    profile: "Hồ sơ"
  };
  return titles[view] || "Asean Holding English Hub";
}

function roleLabel(role) {
  return {
    admin: "Admin quản lý",
    teacher: "Giáo viên",
    student: "Học viên"
  }[role] || role;
}

function audienceLabel(audience) {
  return {
    all: "Tất cả",
    teacher: "Giáo viên",
    student: "Học viên"
  }[audience] || audience;
}

function accountPresenceBadge(account) {
  if (!["teacher", "student"].includes(account.role)) {
    return `<span class="meta-subtitle">Không áp dụng</span>`;
  }
  const isOnline = account.presence === "online";
  const time = isOnline ? account.lastLoginAt : account.lastSeenAt || account.lastLogoutAt;
  return `
    <div>
      <span class="badge ${isOnline ? "badge-good" : ""}">
        <span class="status-dot ${isOnline ? "ok" : ""}"></span>
        ${isOnline ? "Online" : "Offline"}
      </span>
      <div class="meta-subtitle">${safe(time ? formatDateTime(time) : "Chưa có hoạt động")}</div>
    </div>
  `;
}

function markAccountOnline(account) {
  if (!account) return;
  const now = new Date().toISOString();
  account.presence = "online";
  account.lastLoginAt = now;
  account.lastSeenAt = now;
}

function markAccountOffline(account) {
  if (!account) return;
  const now = new Date().toISOString();
  account.presence = "offline";
  account.lastLogoutAt = now;
  account.lastSeenAt = now;
}

function markCurrentAccountOfflineOnUnload() {
  const account = currentAccount();
  if (!account) return;
  markAccountOffline(account);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function placementTemplates() {
  return state?.placementTemplates?.length ? state.placementTemplates : PLACEMENT_TEST_TEMPLATES;
}

function placementTemplate(templateId, templates = placementTemplates()) {
  return templates.find((template) => template.id === templateId);
}

function placementSectionKeys() {
  return ["listening", "speaking", "reading", "comprehension", "pronunciation"];
}

function cloneTestSections(sections) {
  return JSON.parse(JSON.stringify(sections || []));
}

function getPlacementTest(id) {
  return state.placementTests.find((test) => test.id === id);
}

function placementTestsForStudent(studentId) {
  if (!studentId) return [];
  return state.placementTests.filter((test) => test.studentId === studentId);
}

function sortedPlacementTests(input = state.placementTests) {
  return [...input].sort((a, b) => new Date(b.createdAt || 0) - new Date(a.createdAt || 0));
}

function placementStatusText(status) {
  return {
    assigned: "Đã giao",
    in_progress: "Đang làm",
    submitted: "Đã nộp",
    reviewed: "Đã đánh giá"
  }[status] || status;
}

function placementStatusBadge(status) {
  const map = {
    assigned: { cls: "badge-blue", icon: "clipboard-list" },
    in_progress: { cls: "badge-warn", icon: "timer" },
    submitted: { cls: "badge-good", icon: "file-check-2" },
    reviewed: { cls: "badge-good", icon: "badge-check" }
  };
  const item = map[status] || { cls: "", icon: "circle" };
  return `<span class="badge ${item.cls}">${icon(item.icon)} ${safe(placementStatusText(status))}</span>`;
}

function placementSkillLabel(skill) {
  return {
    listening: "Nghe",
    speaking: "Nói",
    reading: "Đọc",
    comprehension: "Hiểu",
    pronunciation: "Phát âm"
  }[skill] || skill;
}

function placementAverageScore(test) {
  const scores = normalizePlacementScores(test.scores);
  return Math.round((sum(Object.values(scores)) / Object.values(scores).length) * 10) / 10;
}

function autoScorePlacementTest(test, answers, answerAudio = {}) {
  const scores = normalizePlacementScores();
  test.sections.forEach((section) => {
    const totalPoints = sum(section.questions.map((question) => question.points || 10));
    const earned = sum(
      section.questions.map((question) => {
        const answer = String(answers[`${section.key}_${question.id}`] || "").trim();
        const audio = answerAudio[`${section.key}_${question.id}`];
        if (question.answer) return answer.toLowerCase() === String(question.answer).toLowerCase() ? question.points || 10 : 0;
        if (section.key === "speaking" && audio) return answer.length >= 35 ? question.points || 10 : (question.points || 10) * 0.8;
        return answer.length >= 80 ? question.points || 10 : answer.length >= 35 ? (question.points || 10) * 0.7 : answer.length ? (question.points || 10) * 0.45 : 0;
      })
    );
    scores[section.key] = totalPoints ? Math.round((earned / totalPoints) * 100) / 10 : 0;
  });
  return scores;
}

function autoPlacementFeedback(scores) {
  const average = placementAverageScore({ scores });
  if (average >= 8) return "Nền tảng tốt, có thể học theo lộ trình tăng tốc với nhiều bài nói và đọc hiểu nâng cao.";
  if (average >= 6) return "Có nền tảng giao tiếp cơ bản, cần củng cố phát âm, phản xạ nói và độ chính xác khi diễn đạt.";
  return "Cần xây lại nền tảng nghe-nói-đọc cơ bản, học theo lộ trình chậm hơn với nhiều ôn tập và phản hồi sau mỗi buổi.";
}

function defaultTeachingPlan(scores = {}, level = "A1-A2") {
  const normalizedScores = normalizePlacementScores(scores);
  const weakSkills = Object.entries(normalizedScores)
    .filter(([, value]) => value < 6)
    .map(([key]) => placementSkillLabel(key).toLowerCase());
  const focus = weakSkills.length ? weakSkills.join(", ") : "phản xạ nói, phát âm và mở rộng vốn từ";
  return `Lộ trình ${level}: 4 tuần đầu tập trung ${focus}. Tuần 1 chẩn đoán lỗi và ôn nền tảng; tuần 2 luyện nghe-nói theo tình huống; tuần 3 tăng đọc hiểu và phản hồi câu hỏi; tuần 4 kiểm tra lại, điều chỉnh mục tiêu và xếp lớp phù hợp.`;
}

function clampScore(value) {
  const score = Number(value);
  if (!Number.isFinite(score)) return 0;
  return Math.min(10, Math.max(0, score));
}

function currentAccount() {
  return state?.accounts.find((account) => account.id === currentAccountId) || null;
}

function accountForProfile(role, profileId) {
  return state.accounts.find((account) => account.role === role && account.profileId === profileId);
}

function profileForAccount(account) {
  if (!account) return null;
  if (account.role === "teacher") return getTeacher(account.profileId);
  if (account.role === "student") return getStudent(account.profileId);
  return null;
}

function teacherForCurrentUser() {
  const user = currentAccount();
  return user?.role === "teacher" ? getTeacher(user.profileId) : null;
}

function studentForCurrentUser() {
  const user = currentAccount();
  return user?.role === "student" ? getStudent(user.profileId) : null;
}

function getTeacher(id) {
  return state.teachers.find((teacher) => teacher.id === id);
}

function getStudent(id) {
  return state.students.find((student) => student.id === id);
}

function findTeacherByEmail(email) {
  const target = String(email || "").trim().toLowerCase();
  return state.teachers.find((teacher) => String(teacher.email || "").toLowerCase() === target);
}

function findStudentByEmail(email) {
  const target = String(email || "").trim().toLowerCase();
  return state.students.find((student) => String(student.email || "").toLowerCase() === target);
}

function getLesson(id) {
  return state.lessons.find((lesson) => lesson.id === id);
}

function lessonsForTeacher(teacherId) {
  if (!teacherId) return [];
  return state.lessons.filter((lesson) => lesson.teacherId === teacherId);
}

function lessonsForStudent(studentId) {
  if (!studentId) return [];
  return state.lessons.filter((lesson) => lesson.studentId === studentId);
}

function lessonsForCurrentUser() {
  const user = currentAccount();
  if (!user) return [];
  if (user.role === "admin") return state.lessons;
  if (user.role === "teacher") return lessonsForTeacher(user.profileId);
  if (user.role === "student") return lessonsForStudent(user.profileId);
  return [];
}

function sortedLessons(input = state.lessons) {
  return [...input].sort((a, b) => lessonTime(a) - lessonTime(b));
}

function lessonTime(lesson) {
  return new Date(`${lesson.date}T${lesson.startTime || "00:00"}:00`).getTime();
}

function lessonTeacherAmount(lesson) {
  if (Number.isFinite(Number(lesson.teacherLessonAmount))) return roundMoney(Number(lesson.teacherLessonAmount));
  return roundMoney(Number(lesson.durationHours || 0) * Number(lesson.teacherRatePerHour || getTeacher(lesson.teacherId)?.ratePerHour || state.settings.defaultTeacherRate || 0));
}

function lessonStudentAmount(lesson) {
  if (Number.isFinite(Number(lesson.studentLessonAmount))) return roundMoney(Number(lesson.studentLessonAmount));
  return roundMoney(Number(lesson.durationHours || 0) * Number(lesson.studentRatePerHour || getStudent(lesson.studentId)?.studentRatePerHour || state.settings.defaultStudentRate || 0));
}

function confirmLessonConflicts(draft, excludeLessonId = null) {
  const conflicts = lessonScheduleConflicts(draft, excludeLessonId);
  if (!conflicts.length) return true;
  const lines = conflicts.map((item) => `- ${currentLanguage === "en" ? translateConflictLine(item) : item}`).join("\n");
  const message =
    currentLanguage === "en"
      ? `Schedule conflict warning:\n\n${lines}\n\nDo you still want to save this lesson?`
      : `Cảnh báo trùng lịch:\n\n${lines}\n\nBạn vẫn muốn lưu lịch học này?`;
  return window.confirm(message);
}

function lessonScheduleConflicts(draft, excludeLessonId = null) {
  const draftRange = lessonTimeRange(draft);
  if (!draftRange) return [];
  const conflicts = [];
  state.lessons
    .filter((lesson) => lesson.id !== excludeLessonId && lesson.status !== "cancelled" && lesson.date === draft.date)
    .forEach((lesson) => {
      const range = lessonTimeRange(lesson);
      if (!range || !timeRangesOverlap(draftRange, range)) return;
      const detail = `${safeText(lesson.title || "Buổi học")} (${formatDate(lesson.date, "short")} ${lesson.startTime}, ${formatNumber(lesson.durationHours)} giờ)`;
      if (lesson.teacherId === draft.teacherId) {
        conflicts.push(`Giáo viên ${getTeacher(lesson.teacherId)?.name || "N/A"} đã có lịch: ${detail}`);
      }
      if (lesson.studentId === draft.studentId) {
        conflicts.push(`Học viên ${getStudent(lesson.studentId)?.name || "N/A"} đã có lịch: ${detail}`);
      }
    });
  return conflicts;
}

function lessonTimeRange(lesson) {
  const start = timeToMinutes(lesson.startTime);
  const duration = Number(lesson.durationHours || 0);
  if (!Number.isFinite(start) || !Number.isFinite(duration) || duration <= 0) return null;
  return {
    start,
    end: start + Math.round(duration * 60)
  };
}

function timeToMinutes(value) {
  const match = String(value || "").match(/^(\d{1,2}):(\d{2})$/);
  if (!match) return NaN;
  return Number(match[1]) * 60 + Number(match[2]);
}

function timeRangesOverlap(left, right) {
  return left.start < right.end && right.start < left.end;
}

function safeText(value) {
  return String(value || "").replace(/\s+/g, " ").trim();
}

function translateConflictLine(line) {
  return String(line || "")
    .replace(/^Giáo viên (.+) đã có lịch: /, "Teacher $1 already has a lesson: ")
    .replace(/^Học viên (.+) đã có lịch: /, "Student $1 already has a lesson: ")
    .replace(/(\d+(?:[.,]\d+)?) giờ\)/g, "$1 hours)");
}

function activeCallIds() {
  return Array.isArray(state.callState?.activeLessonIds) ? state.callState.activeLessonIds.filter((id) => getLesson(id)?.status !== "cancelled") : [];
}

function uniqueIds(ids) {
  return [...new Set(ids.filter(Boolean))];
}

function isLessonLive(lesson) {
  return Boolean(lesson && lesson.status !== "cancelled" && (lesson.adminStarted || activeCallIds().includes(lesson.id)));
}

function selectedVideoLesson(liveLessons) {
  if (!liveLessons.length) {
    selectedVideoLessonId = null;
    return null;
  }
  const selected = liveLessons.find((lesson) => lesson.id === selectedVideoLessonId);
  if (selected) return selected;
  const active = liveLessons.find((lesson) => lesson.id === state.callState.activeLessonId) || liveLessons[0];
  selectedVideoLessonId = active.id;
  return active;
}

function pruneActiveCalls() {
  state.callState.activeLessonIds = activeCallIds();
  state.lessons.forEach((lesson) => {
    lesson.adminStarted = state.callState.activeLessonIds.includes(lesson.id);
  });
  if (!state.callState.activeLessonIds.includes(state.callState.activeLessonId)) {
    state.callState.activeLessonId = state.callState.activeLessonIds[0] || null;
  }
  if (selectedVideoLessonId && !state.callState.activeLessonIds.includes(selectedVideoLessonId)) {
    selectedVideoLessonId = state.callState.activeLessonId;
  }
  if (!state.callState.activeLessonIds.length) {
    state.callState.startedBy = null;
    state.callState.startedAt = null;
  }
}

function canCurrentUserJoin(lesson) {
  const user = currentAccount();
  if (!user || !isLessonLive(lesson)) return false;
  if (user.role === "admin") return true;
  if (user.role === "teacher") return user.profileId === lesson.teacherId;
  if (user.role === "student") return user.profileId === lesson.studentId;
  return false;
}

function canCurrentUserStartCall(lesson) {
  const user = currentAccount();
  if (!user || !lesson || lesson.status === "cancelled") return false;
  if (user.role === "admin") return true;
  return user.role === "teacher" && user.profileId === lesson.teacherId;
}

function adminLessonButtons(lesson) {
  const isActive = isLessonLive(lesson);
  return `
    ${
      isActive
        ? `<button class="btn btn-primary btn-small" type="button" data-action="view-call" data-id="${safe(lesson.id)}">${icon("screen-share")} Vào lại</button>
           <button class="btn btn-warning btn-small" type="button" data-action="stop-call" data-id="${safe(lesson.id)}">${icon("phone-off")} Dừng</button>`
        : `<button class="btn btn-blue btn-small" type="button" data-action="start-call" data-id="${safe(lesson.id)}" ${lesson.status === "cancelled" ? "disabled" : ""}>${icon("video")} Mở lớp</button>`
    }
    ${
      lesson.status !== "completed"
        ? `<button class="btn btn-good btn-small" type="button" data-action="complete-lesson" data-id="${safe(lesson.id)}">${icon("check")} Hoàn thành</button>`
        : `<button class="btn btn-secondary btn-small" type="button" data-action="schedule-lesson" data-id="${safe(lesson.id)}">${icon("rotate-ccw")} Đặt lại</button>`
    }
    <button class="btn btn-secondary btn-small" type="button" data-action="edit-lesson" data-id="${safe(lesson.id)}">${icon("pencil")} Sửa</button>
    <button class="btn btn-secondary btn-small" type="button" data-action="cancel-lesson" data-id="${safe(lesson.id)}">${icon("circle-slash")} Hủy</button>
    <button class="btn btn-secondary btn-small" type="button" data-action="delete-lesson" data-id="${safe(lesson.id)}" title="Xóa buổi học">${icon("trash-2")}</button>
  `;
}

function lessonButtons(lesson) {
  const user = currentAccount();
  if (!user) return "";
  if (user.role === "admin") return adminLessonButtons(lesson);
  const canJoin = canCurrentUserJoin(lesson);
  const canStart = canCurrentUserStartCall(lesson);
  if (user.role === "teacher" && canStart) {
    return `
      ${
        isLessonLive(lesson)
          ? `<button class="btn btn-primary btn-small" type="button" data-action="join-call" data-id="${safe(lesson.id)}">${icon("video")} Vào lớp</button>
             <button class="btn btn-warning btn-small" type="button" data-action="stop-call" data-id="${safe(lesson.id)}">${icon("phone-off")} Dừng</button>`
          : `<button class="btn btn-blue btn-small" type="button" data-action="start-call" data-id="${safe(lesson.id)}">${icon("video")} Mở lớp</button>`
      }
    `;
  }
  return `
    <button class="btn ${canJoin ? "btn-primary" : "btn-secondary"} btn-small" type="button" data-action="join-call" data-id="${safe(lesson.id)}" ${canJoin ? "" : "disabled"}>
      ${icon(canJoin ? "video" : "lock")} ${canJoin ? "Vào lớp" : "Chờ mở lớp"}
    </button>
  `;
}

function statusBadge(status) {
  const map = {
    scheduled: { label: "Đã xếp lịch", cls: "badge-blue", icon: "calendar-clock" },
    completed: { label: "Hoàn thành", cls: "badge-good", icon: "check-circle-2" },
    cancelled: { label: "Đã hủy", cls: "badge-rose", icon: "circle-slash" },
    live: { label: "Đang gọi", cls: "badge-rose", icon: "radio" }
  };
  const item = map[status] || { label: status, cls: "", icon: "circle" };
  return `<span class="badge ${item.cls}">${icon(item.icon)} ${safe(item.label)}</span>`;
}

function lessonStatusText(status) {
  return {
    scheduled: "Đã xếp lịch",
    completed: "Hoàn thành",
    cancelled: "Đã hủy",
    live: "Đang gọi"
  }[status] || status;
}

function activeCallBadge() {
  const user = currentAccount();
  const liveLessons =
    user?.role === "admin"
      ? activeCallIds().map(getLesson).filter(Boolean)
      : lessonsForCurrentUser().filter(isLessonLive);
  if (!liveLessons.length) {
    if (user?.role !== "admin") return "";
    return `<span class="badge"><span class="status-dot ok"></span> Không có lớp đang gọi</span>`;
  }
  if (liveLessons.length === 1) {
    return `<button class="btn btn-warning" type="button" data-action="nav" data-view="video">${icon("radio")} Lớp đang mở: ${safe(liveLessons[0].title)}</button>`;
  }
  return `<button class="btn btn-warning" type="button" data-action="nav" data-view="video">${icon("radio")} ${liveLessons.length} lớp đang mở</button>`;
}

function callUrl(lesson) {
  const meetUrl = googleMeetUrl(lesson);
  if (meetUrl) return meetUrl;
  const room = encodeURIComponent(`AseanHolding-${lesson.roomId || lesson.id}`);
  const name = encodeURIComponent(currentAccount()?.name || "Asean Holding");
  return `https://meet.jit.si/${room}#userInfo.displayName="${name}"`;
}

function googleMeetUrl(lesson) {
  return normalizeMeetUrl(lesson?.googleMeetUrl || lesson?.meetUrl);
}

function normalizeMeetUrl(value) {
  let url = String(value || "").trim();
  if (!url) return "";
  if (url.startsWith("meet.google.com/")) url = `https://${url}`;
  try {
    const parsed = new URL(url);
    if (parsed.protocol !== "https:" || parsed.hostname !== "meet.google.com") return "";
    return parsed.toString();
  } catch (error) {
    return "";
  }
}

function personCell(person) {
  if (!person) return `<span class="meta-subtitle">N/A</span>`;
  return `
    <div class="person-row">
      ${brandedAvatar(person.name, person.avatarColor || "#0f766e", "avatar-small")}
      <div>
        <div class="meta-title">${safe(person.name)}</div>
        <div class="meta-subtitle">${safe(person.email || "")}</div>
      </div>
    </div>
  `;
}

function avatar(name, color = "#0f766e", extraClass = "") {
  const initials = String(name || "AH")
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
  return `<div class="avatar ${safe(extraClass)}" style="background:${safe(color)}">${safe(initials || "AH")}</div>`;
}

function brandedAvatar(name, color = "#0f766e", avatarClass = "") {
  const sizeClass = avatarClass.includes("avatar-small") ? "branded-avatar-small" : "";
  return `
    <span class="branded-avatar ${safe(sizeClass)}">
      ${avatar(name, color, avatarClass)}
      <span class="avatar-logo-badge">${companyLogo("avatar-logo", "")}</span>
    </span>
  `;
}

function companyLogo(extraClass = "", altText = "Asean Holding") {
  const altAttribute = altText ? `alt="${safe(altText)}"` : `alt="" aria-hidden="true"`;
  return `<img class="asean-logo ${safe(extraClass)}" src="${LOGO_SRC}" ${altAttribute} />`;
}

function profileColor(accountOrProfile) {
  if (!accountOrProfile) return "#0f766e";
  if (accountOrProfile.avatarColor) return accountOrProfile.avatarColor;
  if (accountOrProfile.role === "teacher") return getTeacher(accountOrProfile.profileId)?.avatarColor || "#0f766e";
  if (accountOrProfile.role === "student") return getStudent(accountOrProfile.profileId)?.avatarColor || "#2563eb";
  return "#0f766e";
}

function randomProfileColor() {
  const colors = ["#0f766e", "#c2410c", "#1d4ed8", "#be123c", "#15803d", "#b45309"];
  return colors[Math.floor(Math.random() * colors.length)];
}

function splitTags(value) {
  return value
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
}

function money(value) {
  const currency = state?.settings?.currency || "USD";
  const amount = Number(value || 0);
  if (currency === "VND") {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
      maximumFractionDigits: 0
    }).format(amount);
  }
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    maximumFractionDigits: 2
  }).format(amount);
}

function roundMoney(value) {
  return Math.round((Number(value) + Number.EPSILON) * 100) / 100;
}

function sum(values) {
  return values.reduce((total, value) => total + Number(value || 0), 0);
}

function currentLocale() {
  return currentLanguage === "en" ? "en-US" : "vi-VN";
}

function nexaAssistantRules() {
  if (currentLanguage === "en") {
    return [
      "Only answer questions about the left-sidebar features visible to the signed-in teacher or student.",
      "Do not answer unrelated topics such as news, stocks, crypto, medical, legal, entertainment, or general knowledge.",
      "Teacher scope: dashboard, assigned students, teaching schedule, teaching pay, notifications, video call, profile, language, and Nexa AI usage.",
      "Student scope: dashboard, timetable, assigned teachers, tuition, placement test, notifications, video call, profile, language, Nexa AI usage, and Philippines English-study guidance.",
      "For admin-only tasks, explain that only admin can perform them and tell the user which visible screen they can check."
    ];
  }
  return [
    "Chỉ trả lời câu hỏi thuộc các mục trên thanh công cụ bên trái của tài khoản giáo viên hoặc học viên đang đăng nhập.",
    "Không trả lời nội dung ngoài phần mềm như tin tức, chứng khoán, crypto, y tế, pháp lý, giải trí hoặc kiến thức chung.",
    "Phạm vi giáo viên: Tổng quan, Học viên, Lịch dạy, Tiền dạy, Thông báo, Video call, Hồ sơ, Ngôn ngữ và cách dùng Nexa AI.",
    "Phạm vi học viên: Tổng quan, Thời khóa biểu, Giáo viên, Học phí, Test đầu vào, Thông báo, Video call, Hồ sơ, Ngôn ngữ, cách dùng Nexa AI và tư vấn học tiếng Anh tại Philippines.",
    "Nếu câu hỏi thuộc chức năng admin, chỉ giải thích rằng admin thực hiện và hướng dẫn người dùng kiểm tra ở màn hình mình được phép xem."
  ];
}

function currentNexaAssistantMessages() {
  if (!nexaAssistantMessages.length) {
    loadNexaAssistantMessages();
  }
  return nexaAssistantMessages;
}

function nexaAssistantStorageKey() {
  return `${NEXA_ASSISTANT_KEY}:${currentAccount()?.id || "guest"}:${currentLanguage}`;
}

function defaultNexaAssistantMessages() {
  return [
    {
      from: "ai",
      text:
        currentLanguage === "en"
          ? "Hello, I am Nexa AI. I can guide you only on the features visible in your account. Teachers can ask about students, schedules, teaching pay, notifications, video calls, profile, and password changes. Students can also ask about tuition, placement tests, and Philippines English-study guidance."
          : "Xin chào, tôi là Nexa AI. Tôi chỉ hướng dẫn các chức năng đang hiển thị trong tài khoản của bạn. Giáo viên có thể hỏi về học viên, lịch dạy, tiền dạy, thông báo, video call, hồ sơ và đổi mật khẩu. Học viên có thể hỏi thêm về học phí, test đầu vào và định hướng học tiếng Anh tại Philippines.",
      time: nowTime()
    }
  ];
}

function loadNexaAssistantMessages() {
  try {
    const stored = JSON.parse(localStorage.getItem(nexaAssistantStorageKey()) || "[]");
    nexaAssistantMessages = Array.isArray(stored) && stored.length ? stored : defaultNexaAssistantMessages();
  } catch {
    nexaAssistantMessages = defaultNexaAssistantMessages();
  }
}

function saveNexaAssistantMessages() {
  localStorage.setItem(nexaAssistantStorageKey(), JSON.stringify(nexaAssistantMessages.slice(-30)));
}

function resetNexaAssistantMessages() {
  nexaAssistantMessages = defaultNexaAssistantMessages();
  saveNexaAssistantMessages();
  showToast(currentLanguage === "en" ? "Nexa AI conversation cleared." : "Đã xóa hội thoại Nexa AI.");
}

function submitNexaAssistantQuestion(question) {
  if (!question) return;
  rememberNexaRulesScroll();
  currentNexaAssistantMessages();
  nexaAssistantMessages.push({ from: "user", text: question, time: nowTime() });
  nexaAssistantMessages.push({ from: "ai", text: nexaAssistantAnswer(question), time: nowTime() });
  saveNexaAssistantMessages();
  render();
  window.setTimeout(() => {
    const chatWindow = document.querySelector(".nexa-chat-window");
    if (chatWindow) chatWindow.scrollTop = chatWindow.scrollHeight;
    restoreNexaRulesScroll();
  }, 40);
}

function rememberNexaRulesScroll() {
  const rulesScroll = document.querySelector(".nexa-rules-scroll");
  if (rulesScroll) nexaRulesScrollTop = rulesScroll.scrollTop;
}

function restoreNexaRulesScroll() {
  const rulesScroll = document.querySelector(".nexa-rules-scroll");
  if (!rulesScroll) return;
  rulesScroll.scrollTop = Math.min(nexaRulesScrollTop, Math.max(0, rulesScroll.scrollHeight - rulesScroll.clientHeight));
}

function nexaAssistantPromptGroups(role) {
  if (currentLanguage === "en") {
    return role === "teacher"
      ? [
          {
            title: "Dashboard",
            prompts: ["What does the teacher dashboard show?", "Where do I see today's classes?", "How do I know a class was opened?"]
          },
          {
            title: "Students",
            prompts: ["Where do I see my assigned students?", "Can one teacher teach many students?", "What should I do if a student asks to change schedule?"]
          },
          {
            title: "Teaching Schedule",
            prompts: ["Where do I see my weekly teaching schedule?", "Why can't teachers create schedules?", "How do I know admin edited a lesson?"]
          },
          {
            title: "Teaching Pay",
            prompts: ["How is teaching pay calculated per lesson?", "Do cancelled lessons count as teaching pay?", "Where do I check my total pay?"]
          },
          {
            title: "Notifications",
            prompts: ["Where do new notifications appear?", "Will I be notified when a lesson changes?", "How do live-class alerts work?"]
          },
          {
            title: "Video Call",
            prompts: ["How do I open an online class?", "Why is the Join button not visible yet?", "Can multiple classes be opened at the same time?"]
          },
          {
            title: "Profile",
            prompts: ["How do I change my password?", "How do I switch Vietnamese and English?", "What should I do if my email is wrong?"]
          }
        ]
      : [
          {
            title: "Dashboard",
            prompts: ["What does the student dashboard show?", "Where do I see my next class?", "How do I know my class is open?"]
          },
          {
            title: "Timetable",
            prompts: ["Where do I see this week's timetable?", "Will I be notified when my schedule changes?", "What should I do if my schedule overlaps?"]
          },
          {
            title: "Teachers",
            prompts: ["Where do I see my assigned teachers?", "Can I study with more than one teacher?", "What if I need a different teacher?"]
          },
          {
            title: "Tuition",
            prompts: ["How is tuition calculated per lesson?", "Where do I see total tuition?", "Do cancelled lessons count as tuition?"]
          },
          {
            title: "Placement Test",
            prompts: ["How do I take a placement test?", "How do listening and speaking questions work?", "Where is my learning path after admin reviews the test?"]
          },
          {
            title: "Video Call",
            prompts: ["How do I join an online class?", "What should I do if the Google Meet link does not open?", "How do I allow microphone and camera?"]
          },
          {
            title: "Study in the Philippines",
            prompts: [
              "Is studying English in the Philippines suitable for me?",
              "What is Sparta or Semi-Sparta learning?",
              "Which English schools in the Philippines can I compare?",
              "Which course fits a beginner or weak English learner?",
              "Should I choose ESL, IELTS, TOEIC, or Business English?",
              "How should I choose an English school in the Philippines?",
              "What should I know about Philinter in Cebu?",
              "What should I know about CPI, CIA, EV, Fella 2, and Blue Ocean?",
              "What is the estimated 4-week cost?",
              "What should I prepare before departure?",
              "What is the basic registration process?",
              "If I decide to enroll, what should I do?",
              "Where can I follow MYB on Facebook or TikTok?"
            ]
          },
          {
            title: "Profile",
            prompts: ["How do I change my password?", "How do I switch Vietnamese and English?", "What should I do if my account information is wrong?"]
          }
        ];
  }
  return role === "teacher"
    ? [
        {
          title: "Tổng quan",
          prompts: ["Tổng quan giáo viên có những gì?", "Xem lớp hôm nay ở đâu?", "Làm sao biết lớp đã được mở?"]
        },
        {
          title: "Học viên",
          prompts: ["Xem học viên phụ trách ở đâu?", "Một giáo viên dạy nhiều học viên được không?", "Nếu học viên muốn đổi lịch thì làm gì?"]
        },
        {
          title: "Lịch dạy",
          prompts: ["Xem lịch dạy tuần này ở đâu?", "Vì sao giáo viên không tự tạo lịch?", "Lịch bị sửa thì giáo viên biết ở đâu?"]
        },
        {
          title: "Tiền dạy",
          prompts: ["Tiền dạy được tính theo buổi thế nào?", "Buổi hủy có tính tiền dạy không?", "Xem tổng tiền dạy ở đâu?"]
        },
        {
          title: "Thông báo",
          prompts: ["Thông báo mới hiển thị ở đâu?", "Khi lịch đổi có thông báo không?", "Thông báo lớp đang mở hoạt động thế nào?"]
        },
        {
          title: "Video call",
          prompts: ["Cách mở lớp online?", "Vì sao chưa thấy nút Vào lớp?", "Có thể mở nhiều lớp cùng lúc không?"]
        },
        {
          title: "Hồ sơ",
          prompts: ["Đổi mật khẩu thế nào?", "Đổi ngôn ngữ Anh Việt ở đâu?", "Email tài khoản sai thì làm gì?"]
        }
      ]
    : [
        {
          title: "Tổng quan",
          prompts: ["Tổng quan học viên có những gì?", "Xem lớp sắp tới ở đâu?", "Làm sao biết lớp đã mở?"]
        },
        {
          title: "Thời khóa biểu",
          prompts: ["Xem lịch học tuần này ở đâu?", "Khi lịch học đổi có báo không?", "Nếu lịch học bị trùng thì làm gì?"]
        },
        {
          title: "Giáo viên",
          prompts: ["Xem giáo viên phụ trách ở đâu?", "Một học viên học nhiều giáo viên được không?", "Nếu muốn đổi giáo viên thì làm gì?"]
        },
        {
          title: "Học phí",
          prompts: ["Học phí được tính theo buổi thế nào?", "Xem tổng học phí ở đâu?", "Buổi hủy có tính học phí không?"]
        },
        {
          title: "Test đầu vào",
          prompts: ["Làm bài test đầu vào thế nào?", "Phần nghe và phần nói hoạt động thế nào?", "Lộ trình học sau khi admin chấm bài xem ở đâu?"]
        },
        {
          title: "Video call",
          prompts: ["Cách vào lớp online?", "Nếu link Google Meet không mở thì làm gì?", "Cách bật micro và camera?"]
        },
        {
          title: "Du học Philippines",
          prompts: [
            "Du học tiếng Anh Philippines có phù hợp với em không?",
            "Mô hình Sparta và Semi-Sparta là gì?",
            "Có những trường Anh ngữ Philippines nào để so sánh?",
            "Mất gốc tiếng Anh nên chọn khóa nào?",
            "Nên chọn ESL, IELTS, TOEIC hay Business English?",
            "Nên chọn trường Anh ngữ Philippines theo tiêu chí nào?",
            "Trường Philinter ở Cebu có gì nổi bật?",
            "CPI, CIA, EV, Fella 2, Blue Ocean có gì khác nhau?",
            "Chi phí 4 tuần khoảng bao nhiêu?",
            "Trước khi khởi hành cần chuẩn bị gì?",
            "Quy trình đăng ký du học Philippines cơ bản thế nào?",
            "Nếu em chốt học thì làm gì?",
            "Theo dõi MYB trên Facebook hoặc TikTok ở đâu?"
          ]
        },
        {
          title: "Hồ sơ",
          prompts: ["Đổi mật khẩu thế nào?", "Đổi ngôn ngữ Anh Việt ở đâu?", "Thông tin tài khoản sai thì làm gì?"]
        }
      ];
}

function nexaAssistantQuickPrompts(role) {
  return nexaAssistantPromptGroups(role).flatMap((group) => group.prompts);
}

function nexaAssistantAnswer(question) {
  const role = currentAccount()?.role || "";
  const normalized = normalizeTextForMatch(question);
  const en = currentLanguage === "en";

  if (!isNexaAssistantInScope(normalized)) {
    return en
      ? `I only answer questions about ${nexaVisibleScopeText(role)}. Please ask about the features visible in your account.`
      : `Tôi chỉ trả lời các câu hỏi về ${nexaVisibleScopeText(role)}. Vui lòng hỏi đúng các mục đang hiển thị trong tài khoản của bạn.`;
  }

  if (role === "teacher" && isStudyAbroadQuestion(normalized)) {
    return en
      ? "Philippines English-study guidance is shown for student accounts. In a teacher account, I can only guide you on dashboard, assigned students, schedule, teaching pay, notifications, video call, profile, language, and Nexa AI usage."
      : "Tư vấn học tiếng Anh tại Philippines được dành cho tài khoản học viên. Trong tài khoản giáo viên, tôi chỉ hướng dẫn Tổng quan, Học viên, Lịch dạy, Tiền dạy, Thông báo, Video call, Hồ sơ, Ngôn ngữ và cách dùng Nexa AI.";
  }

  if (matchesAny(normalized, ["khong tu tao lich", "vi sao giao vien khong tu tao lich", "why can t teachers create schedules", "why cannot teachers create schedules"])) {
    return en
      ? "Teachers cannot create official schedules because admin controls teacher-student assignments, tuition, teaching pay, and conflict checks. This keeps finance and schedule data consistent. Teachers can view the schedule and open the online class when the scheduled time arrives."
      : "Giáo viên không tự tạo lịch chính thức vì admin cần kiểm soát phân công giáo viên-học viên, học phí, tiền dạy và cảnh báo trùng lịch. Cách này giữ dữ liệu tài chính và lịch học thống nhất. Giáo viên xem lịch đã được xếp và mở lớp online khi đến giờ học.";
  }

  if (isAdminOnlyQuestion(normalized)) {
    return en
      ? "That is an admin-only function. Teachers and students cannot create accounts, import schedules, export finance files, edit all users, or manage system security. You can only check the result in your visible screens such as Schedule, Notifications, Video call, Tuition/Teaching pay, or Profile."
      : "Đây là chức năng chỉ admin thực hiện. Giáo viên và học viên không thể tạo tài khoản, import lịch, xuất file tài chính, sửa toàn bộ người dùng hoặc quản trị bảo mật hệ thống. Bạn chỉ kiểm tra kết quả trong các màn hình mình được xem như Lịch, Thông báo, Video call, Học phí/Tiền dạy hoặc Hồ sơ.";
  }

  if (isStudyAbroadQuestion(normalized)) {
    return nexaStudyAbroadAnswer(normalized, en);
  }

  if (matchesAny(normalized, ["tong quan", "dashboard", "overview", "home"])) {
    if (role === "teacher") {
      return en
        ? "The teacher dashboard summarizes upcoming teaching sessions, live-class notices, assigned students, and quick finance indicators. Use it first after login to see what needs attention today, then open Schedule or Video call for details."
        : "Tổng quan của giáo viên tóm tắt buổi dạy sắp tới, thông báo lớp đang mở, học viên phụ trách và chỉ số tiền dạy nhanh. Sau khi đăng nhập, nên xem Tổng quan trước để biết việc cần chú ý trong ngày, rồi mở Lịch dạy hoặc Video call để thao tác chi tiết.";
    }
    return en
      ? "The student dashboard summarizes upcoming lessons, live-class notices, tuition indicators, placement-test status, and notifications. If a class is opened, check the notice and go to Video call."
      : "Tổng quan của học viên tóm tắt lớp sắp tới, thông báo lớp đang mở, học phí, tình trạng test đầu vào và thông báo mới. Nếu lớp được mở, hãy xem thông báo rồi vào mục Video call.";
  }

  if (matchesAny(normalized, ["hoc vien", "assigned student", "student list", "phu trach"])) {
    if (role !== "teacher") {
      return en
        ? "Students see assigned teachers in the Teachers screen. If you need to change teacher, contact admin because only admin can assign teachers."
        : "Học viên xem giáo viên phụ trách trong mục Giáo viên. Nếu cần đổi giáo viên, hãy liên hệ admin vì chỉ admin được phân công giáo viên.";
    }
    return en
      ? "Open Students to see the learners assigned to you. A teacher can teach many students, but the schedule must not overlap. If a student asks to change time or teacher, tell admin so admin can update the official schedule."
      : "Vào mục Học viên để xem các học viên đang được phân công. Một giáo viên có thể dạy nhiều học viên, nhưng lịch không được trùng. Nếu học viên muốn đổi giờ hoặc đổi giáo viên, giáo viên báo admin để admin cập nhật lịch chính thức.";
  }

  if (matchesAny(normalized, ["giao vien", "assigned teacher", "teacher list", "doi giao vien"])) {
    if (role !== "student") {
      return en
        ? "Teachers use the Students screen to view assigned learners. Teacher assignment changes are made by admin."
        : "Giáo viên dùng mục Học viên để xem người học được phân công. Việc thay đổi phân công giáo viên do admin thực hiện.";
    }
    return en
      ? "Open Teachers to see who is assigned to teach you. One student can study with multiple teachers as long as lesson times do not overlap. If you want a different teacher, contact admin."
      : "Vào mục Giáo viên để xem giáo viên đang phụ trách. Một học viên có thể học nhiều giáo viên miễn là lịch không trùng. Nếu muốn đổi giáo viên, hãy liên hệ admin.";
  }

  if (matchesAny(normalized, ["mo lop", "open class", "bat dau lop", "start class"])) {
    if (role === "teacher") {
      return en
        ? "Open Video call, choose the scheduled lesson that is due, then press Open class. You can only open classes that admin already scheduled for you. After opening, the student receives a notification and can press Join class."
        : "Vào mục Video call, chọn buổi học đã được admin xếp lịch, rồi bấm Mở lớp. Giáo viên chỉ mở được lớp đã có trong lịch dạy. Sau khi mở, học viên sẽ nhận thông báo và bấm Vào lớp để tham gia.";
    }
    return en
      ? "Students cannot open classes. Wait for the teacher or admin to open the scheduled class, then use the notification or Video call screen to join."
      : "Học viên không mở lớp. Bạn chờ giáo viên hoặc admin mở lớp theo lịch, sau đó bấm thông báo hoặc vào mục Video call để tham gia.";
  }

  if (matchesAny(normalized, ["video", "meet", "vao lop", "join class", "camera", "micro", "mic"])) {
    return en
      ? "Use Video call for online lessons. Teachers open scheduled classes when it is time. Students join only after the class is opened. If there is a Google Meet link, Join class opens it in a new tab. If the browser asks, allow microphone and camera. If the button is missing, check the schedule time and wait for the teacher/admin to open the lesson."
      : "Dùng mục Video call cho lớp online. Giáo viên mở lớp theo lịch khi đến giờ. Học viên chỉ vào được khi lớp đã mở. Nếu có link Google Meet, bấm Vào lớp để mở ở tab mới. Khi trình duyệt hỏi quyền, hãy cho phép micro và camera. Nếu chưa thấy nút vào lớp, kiểm tra giờ học và chờ giáo viên/admin mở lớp.";
  }

  if (matchesAny(normalized, ["lich", "schedule", "doi lich", "sua lich", "calendar"])) {
    if (role === "teacher") {
      return en
        ? "Open Teaching Schedule to view your lessons by date and time. Admin creates or edits official schedules. When admin changes a lesson, you receive a notification. If a teacher or student time overlaps, the system warns admin before saving."
        : "Vào mục Lịch dạy để xem các buổi dạy theo ngày và giờ. Admin là người tạo hoặc sửa lịch chính thức. Khi admin đổi lịch, giáo viên sẽ nhận thông báo. Nếu lịch giáo viên hoặc học viên bị trùng, hệ thống sẽ cảnh báo admin trước khi lưu.";
    }
    return en
      ? "Open Timetable to view your learning schedule. Admin creates and edits lessons. When a lesson is changed, you receive a notification. If your time overlaps with another lesson, the system warns admin during scheduling."
      : "Vào mục Thời khóa biểu để xem lịch học. Admin là người tạo và sửa lịch. Khi lịch được sửa, học viên sẽ nhận thông báo. Nếu lịch của bạn bị trùng với buổi khác, hệ thống cảnh báo admin khi xếp lịch.";
  }

  if (matchesAny(normalized, ["thong bao", "notification", "bao tin", "alert"])) {
    return en
      ? "Notifications appear after login and when lessons are created, edited, or opened. Check the notification area on the dashboard and the related screen, such as Schedule or Video call."
      : "Thông báo hiển thị sau khi đăng nhập và khi có lịch mới, lịch được sửa hoặc lớp được mở. Bạn kiểm tra khu vực thông báo ở Tổng quan và màn hình liên quan như Lịch hoặc Video call.";
  }

  if (matchesAny(normalized, ["mat khau", "password", "ho so", "profile", "email", "tai khoan", "account"])) {
    return en
      ? "Open Profile to review your account details and change password. Enter the current password, enter the new password twice, then save. If the email or name is wrong, contact admin because only admin can edit account identity."
      : "Vào mục Hồ sơ để xem thông tin tài khoản và đổi mật khẩu. Nhập mật khẩu hiện tại, nhập mật khẩu mới hai lần rồi lưu. Nếu email hoặc tên tài khoản sai, hãy liên hệ admin vì chỉ admin được sửa thông tin định danh.";
  }

  if (matchesAny(normalized, ["hoc phi", "tuition", "payment", "so tien hoc", "pay student"])) {
    return en
      ? "Students can view tuition in their finance or dashboard area. Tuition is calculated per lesson using the amount admin entered for that specific lesson."
      : "Học viên xem học phí trong phần tài chính hoặc tổng quan. Học phí được tính theo từng buổi học, dựa trên số tiền admin nhập riêng cho buổi đó.";
  }

  if (matchesAny(normalized, ["tien day", "salary", "teacher pay", "luong", "thu lao"])) {
    return en
      ? "Teachers view teaching pay in Teaching Pay and dashboard finance cards. Pay is calculated per lesson from the amount admin entered for that lesson. Cancelled lessons should not be counted as completed teaching pay. If an amount looks wrong, ask admin to check that lesson's pay amount."
      : "Giáo viên xem tiền dạy ở mục Tiền dạy và các thẻ tài chính trong Tổng quan. Tiền dạy được tính theo từng buổi từ số tiền admin nhập riêng cho buổi đó. Buổi đã hủy không nên tính như buổi hoàn thành. Nếu số tiền sai, hãy nhờ admin kiểm tra số tiền của buổi học đó.";
  }

  if (matchesAny(normalized, ["test", "placement", "dau vao", "nghe", "noi", "doc", "phat am", "record"])) {
    if (role === "teacher") {
      return en
        ? "Placement tests are between admin and students, so this feature is not shown in teacher accounts."
        : "Test đầu vào là phần giữa admin và học viên, nên tài khoản giáo viên không hiển thị chức năng này.";
    }
    return en
      ? "Open Placement Test to take tests assigned by admin. Listening may include an audio player. Speaking may include a microphone recording button; allow microphone permission before recording. Reading, comprehension, and pronunciation questions are answered in the form. Submit once finished so admin can score and add a personal learning path."
      : "Vào mục Test đầu vào để làm bài admin giao. Phần nghe có thể có trình phát audio. Phần nói có thể có nút ghi âm bằng micro; hãy cho phép quyền micro trước khi ghi. Phần đọc, hiểu và phát âm được trả lời trong biểu mẫu. Khi làm xong, bấm nộp để admin chấm và thêm lộ trình học riêng.";
  }

  if (matchesAny(normalized, ["dang xuat", "logout", "language", "ngon ngu", "tieng anh", "tieng viet"])) {
    return en
      ? "Use the language selector on the login screen or in the account area to switch Vietnamese/English. Use Logout when finished so your account status changes to offline."
      : "Dùng nút chọn ngôn ngữ ở màn hình đăng nhập hoặc trong tài khoản để đổi Anh/Việt. Khi dùng xong, bấm Đăng xuất để trạng thái tài khoản chuyển sang offline.";
  }

  return en
    ? "This is within the software scope, but I need the exact screen or button name to guide you precisely. Please tell me where you are in the app."
    : "Nội dung này thuộc phạm vi phần mềm, nhưng tôi cần biết chính xác bạn đang ở màn hình hoặc nút nào để hướng dẫn đúng. Vui lòng nói rõ vị trí bạn đang thao tác.";
}

function isStudyAbroadQuestion(text) {
  return matchesAny(text, [
    "du hoc",
    "philippines",
    "philipin",
    "sparta",
    "semi sparta",
    "cebu",
    "baguio",
    "clark",
    "subic",
    "ielts",
    "toeic",
    "esl",
    "business english",
    "philinter",
    "cpi",
    "cebu pelis",
    "cia",
    "mactan resort",
    "ev",
    "ev academy",
    "fella",
    "fella 2",
    "blue ocean",
    "cebu blue ocean",
    "danh sach truong",
    "cac truong",
    "so sanh truong",
    "truong nao",
    "truong anh ngu",
    "mat goc",
    "giao tiep",
    "khoa nao",
    "chon khoa",
    "junior",
    "summer",
    "du hoc he",
    "4 tuan",
    "30 trieu",
    "hanh ly",
    "truoc khi di",
    "khoi hanh",
    "qua canh",
    "san bay",
    "ky tuc xa",
    "bua an",
    "suc khoe",
    "fanpage",
    "facebook",
    "tiktok",
    "myb",
    "english myb",
    "hoc tieng anh tai philippines",
    "study in the philippines",
    "english school"
  ]);
}

function isAdminOnlyQuestion(text) {
  return matchesAny(text, [
    "tao tai khoan",
    "xoa tai khoan",
    "sua tai khoan",
    "tao lich",
    "import",
    "csv",
    "excel",
    "xuat file",
    "audit",
    "nhat ky bao mat",
    "backup",
    "sao luu",
    "bao mat he thong",
    "phan quyen",
    "admin tao",
    "admin sua"
  ]);
}

function nexaStudyAbroadAnswer(text, en) {
  if (matchesAny(text, ["chot hoc", "chot truong", "muon hoc", "muon dang ky", "dang ky ngay", "giu cho", "dat coc", "enroll", "book a slot", "decide to enroll", "confirm school", "i choose"])) {
    return en
      ? "If you decide to enroll, please contact admin directly. Nexa AI can explain options, but admin must confirm the school, latest tuition, promotion, room availability, start date, required documents, payment method, and pickup instructions before any deposit or tuition payment."
      : "Nếu học viên chốt học, vui lòng liên hệ trực tiếp admin. Nexa AI chỉ tư vấn định hướng; admin phải xác nhận trường, học phí mới nhất, ưu đãi, tình trạng phòng còn chỗ, ngày nhập học, giấy tờ cần chuẩn bị, phương thức thanh toán và hướng dẫn đón sân bay trước khi đặt cọc hoặc thanh toán học phí.";
  }

  if (matchesAny(text, ["danh sach truong", "cac truong", "so sanh truong", "truong anh ngu", "truong nao", "school list", "compare schools", "english schools"])) {
    return nexaPhilippinesSchoolListAnswer(en);
  }

  const schoolAnswer = nexaSpecificSchoolAnswer(text, en);
  if (schoolAnswer) return schoolAnswer;

  if (matchesAny(text, ["facebook", "fanpage", "tiktok", "instagram", "myb", "english myb", "lien he", "contact", "zalo"])) {
    return en
      ? "MYB public pages list these official contact channels for Philippines English-study advice: Fanpage English MYB Education, TikTok duhoc.english.myb, Instagram English.MYB.Education, email English.MYB.Education@gmail.com, and phone/Zalo/Telegram 090 246 4413 or 037 449 0866. Use those channels to confirm the latest tuition, promotions, school availability, and departure instructions."
      : "Các trang công khai của MYB ghi các kênh liên hệ tư vấn du học tiếng Anh Philippines: Fanpage English MYB Education, TikTok duhoc.english.myb, Instagram English.MYB.Education, email English.MYB.Education@gmail.com, Phone/Zalo/Telegram 090 246 4413 hoặc 037 449 0866. Hãy dùng các kênh này để xác nhận học phí, ưu đãi, tình trạng trường còn chỗ và hướng dẫn khởi hành mới nhất.";
  }

  if (matchesAny(text, ["mat goc", "beginner", "weak english", "yeu tieng anh", "giao tiep", "speaking", "phan xa", "chon khoa", "khoa nao", "course", "ielts", "toeic", "business english", "junior", "pronunciation", "phat am"])) {
    return en
      ? "Course direction: weak or beginner students usually start with General ESL or TOEIC Foundation; students who need fast communication improvement can choose Intensive ESL or Intensive Power Speaking; students targeting study, work, or migration can choose IELTS; workplace learners can choose Business English; pronunciation-focused learners can add a Pronunciation course; younger learners can consider Junior ESL. The best choice should follow your placement-test level, target score, available weeks, and daily study intensity."
      : "Định hướng chọn khóa: học viên mất gốc hoặc nền yếu thường nên bắt đầu bằng General ESL hoặc TOEIC Foundation; cần tăng giao tiếp nhanh có thể chọn Intensive ESL hoặc Intensive Power Speaking; mục tiêu du học, làm việc, định cư nên cân nhắc IELTS; người đi làm cần giao tiếp công sở chọn Business English; yếu phát âm có thể thêm Pronunciation; học viên nhỏ tuổi có thể cân nhắc Junior ESL. Quyết định cuối cùng nên dựa trên điểm test đầu vào, mục tiêu điểm, số tuần học và khả năng theo cường độ mỗi ngày.";
  }

  if (matchesAny(text, ["truoc khi di", "hanh ly", "prepare", "departure", "khoi hanh", "qua canh", "hai quan", "giay to", "documents", "suc khoe", "health"])) {
    return en
      ? "Before departure, students should prepare passport, school invitation letter, flight ticket, tuition/payment confirmation, school address, pickup contact, basic personal medicine, clothes suitable for the city and season, study materials, and emergency contacts. MYB's public process also emphasizes pre-departure guidance, transit/customs preparation, tuition payment before entry, airport pickup information, and checking baggage and school details before flying."
      : "Trước khi khởi hành, học viên nên chuẩn bị passport, thư mời nhập học, vé máy bay, xác nhận thanh toán học phí, địa chỉ trường, thông tin pick-up, thuốc cá nhân cơ bản, quần áo phù hợp thành phố/mùa, tài liệu học và liên hệ khẩn cấp. Quy trình MYB công khai cũng nhấn mạnh hướng dẫn trước khi đi, chuẩn bị quá cảnh/hải quan, thanh toán học phí trước ngày nhập học, nhận thông tin đón sân bay, kiểm tra hành lý và ghi nhớ thông tin trường/khóa học trước khi bay.";
  }

  if (matchesAny(text, ["quy trinh", "dang ky", "registration", "thu moi", "passport", "hoc phi", "payment", "ve may bay", "pickup"])) {
    return en
      ? "Basic Philippines English-study registration flow: define your goal and budget, receive school suggestions and quotes, choose a school, provide personal information and passport copy, pay the registration fee, sign the agreement, receive the invitation letter, book flights, pay tuition before departure, receive airport pickup details, then travel to the Philippines. The public MYB page also notes that tuition should be paid at least 2 weeks before entry."
      : "Quy trình đăng ký du học tiếng Anh Philippines cơ bản: xác định mục tiêu và ngân sách, nhận tư vấn trường và báo giá, chọn trường, cung cấp thông tin cá nhân và bản sao passport, thanh toán lệ phí đăng ký, ký hợp đồng, nhận thư mời nhập học, đặt vé máy bay, thanh toán học phí trước khi đi, nhận thông tin đón sân bay rồi khởi hành sang Philippines. Trang MYB công khai cũng nêu học phí nên thanh toán trước ngày nhập học ít nhất 2 tuần.";
  }

  if (matchesAny(text, ["chon truong", "tieu chi", "school", "truong nao", "philinter", "cebu", "baguio", "clark", "subic"])) {
    if (matchesAny(text, ["philinter"])) {
      return en
        ? "Philinter is described by MYB as a Cebu/Lapu-Lapu English school near Cebu international airport, with CEFR-based level evaluation, ESL, Intensive ESL, Intensive Power Speaking, Business English, TOEIC, IELTS, and Pronunciation courses. It also has 1:1 classrooms, small group rooms, dormitory options, health support, meals, and student services. This is useful for students who want a structured school with many course tracks, but final suitability still depends on your level, budget, and preferred study style."
        : "Philinter được MYB mô tả là trường Anh ngữ tại Cebu/Lapu-Lapu, gần sân bay quốc tế Cebu, có đánh giá trình độ theo CEFR, các khóa ESL, Intensive ESL, Intensive Power Speaking, Business English, TOEIC, IELTS và Pronunciation. Trường có phòng học 1:1, phòng nhóm nhỏ, lựa chọn ký túc xá, hỗ trợ y tế, bữa ăn và dịch vụ học viên. Trường phù hợp để tham khảo nếu học viên muốn môi trường có nhiều lộ trình khóa học, nhưng vẫn cần xét trình độ, ngân sách và mức kỷ luật mong muốn.";
    }
    return en
      ? "Choose a Philippines English school by goal, level, city, study discipline, dormitory standard, class structure, and budget. Common goals include General ESL, Intensive ESL, IELTS, TOEIC, Business English, speaking, and pronunciation. For example, MYB's public Philinter article describes Philinter in Cebu/Lapu-Lapu, near Cebu airport, with 1:1 rooms, group classes, dormitory options, IELTS/TOEIC/Business/Pronunciation courses, and CEFR-based level evaluation."
      : "Khi chọn trường Anh ngữ Philippines, nên xét mục tiêu học, trình độ hiện tại, thành phố, mức kỷ luật học tập, ký túc xá, mô hình lớp và ngân sách. Các mục tiêu thường gặp gồm General ESL, Intensive ESL, IELTS, TOEIC, Business English, speaking và pronunciation. Ví dụ, bài Philinter công khai của MYB mô tả Philinter tại Cebu/Lapu-Lapu, gần sân bay Cebu, có lớp 1:1, lớp nhóm, ký túc xá, khóa IELTS/TOEIC/Business/Pronunciation và đánh giá trình độ theo CEFR.";
  }

  if (matchesAny(text, ["sparta", "semi sparta", "eop", "8 12", "1 kem 1", "one on one", "intensive"])) {
    return en
      ? "The Sparta model is an intensive English-study format: many lessons per day, strong study discipline, one-on-one lessons with Filipino teachers, and English-only practice on campus. Semi-Sparta is usually more flexible, often allowing students to go out under school rules. MYB's public page describes 8-12 lessons per day, 1:1 classes, English-only policy, and dormitory rules depending on Sparta or Semi-Sparta."
      : "Mô hình Sparta là cách học tiếng Anh cường độ cao: nhiều tiết mỗi ngày, kỷ luật học tập chặt, học 1 kèm 1 với giáo viên Philippines và thực hành English-only trong khuôn viên trường. Semi-Sparta thường linh hoạt hơn, có thể cho học viên ra ngoài theo nội quy trường. Trang MYB công khai mô tả 8-12 tiết/ngày, lớp 1 kèm 1, chính sách EOP và quy định ký túc xá tùy mô hình Sparta hoặc Semi-Sparta.";
  }

  if (matchesAny(text, ["chi phi", "cost", "bao nhieu tien", "30 trieu", "budget", "ngan sach"])) {
    return en
      ? "The public MYB page estimates an all-in 4-week English-study package at around 30 million VND, including tuition, accommodation, and meals, with more than 200 English-learning hours. Treat this as a rough reference only; actual cost depends on school, room type, course, promotions, flight ticket, insurance, personal expenses, and exchange rate."
      : "Trang MYB công khai ước tính gói học tiếng Anh 4 tuần khoảng 30 triệu VNĐ, gồm học phí, chỗ ở và bữa ăn, với hơn 200 giờ học tiếng Anh. Đây chỉ nên xem là mốc tham khảo; chi phí thật phụ thuộc trường, loại phòng, khóa học, ưu đãi, vé máy bay, bảo hiểm, chi tiêu cá nhân và tỷ giá.";
  }

  if (matchesAny(text, ["ky tuc xa", "dorm", "bua an", "meal", "an o", "living", "giat", "laundry", "y te", "medical", "health", "an toan", "safe"])) {
    return en
      ? "For living conditions, check dormitory type, meal plan, laundry, cleaning, medical support, curfew, and campus rules before choosing a school. MYB's Philinter article describes dormitory options, daily meals, a medical room, regular health support, and laundry/cleaning rules. These details matter if you are young, studying intensively, or need a quiet routine."
      : "Khi xét điều kiện sinh hoạt, hãy hỏi rõ loại ký túc xá, bữa ăn, giặt giũ, dọn phòng, hỗ trợ y tế, giờ giới nghiêm và nội quy trường. Bài Philinter của MYB có mô tả lựa chọn ký túc xá, bữa ăn hằng ngày, phòng y tế, hỗ trợ sức khỏe và quy định giặt/dọn phòng. Các yếu tố này rất quan trọng nếu học viên còn nhỏ, học cường độ cao hoặc cần nếp sinh hoạt ổn định.";
  }

  if (matchesAny(text, ["phu hop", "suitable", "ai nen di", "duoi 18", "he", "summer", "lo trinh"])) {
    return en
      ? "Studying English in the Philippines can suit students who need an English environment, intensive speaking practice, IELTS/TOEIC preparation, Business English, or a short-term confidence boost. Younger students often choose summer programs because they must still follow regular school calendars. Before deciding, clarify your current level, target score, available weeks, budget, health needs, and preferred discipline level."
      : "Du học tiếng Anh Philippines phù hợp với học viên cần môi trường tiếng Anh, luyện nói cường độ cao, luyện IELTS/TOEIC, Business English hoặc muốn tăng phản xạ trong thời gian ngắn. Học viên dưới 18 tuổi thường phù hợp khóa hè vì vẫn phải theo lịch học phổ thông. Trước khi chọn, cần làm rõ trình độ hiện tại, mục tiêu điểm, số tuần có thể học, ngân sách, nhu cầu sức khỏe và mức kỷ luật mong muốn.";
  }

  return en
    ? "For Philippines English-study guidance, I can help students clarify goals, compare Sparta/Semi-Sparta learning styles, choose school criteria, estimate basic cost, and understand the registration flow. This guidance is based on public MYB/Asean Vietnam content and should be confirmed with admin or MYB before payment."
    : "Với du học tiếng Anh Philippines, tôi có thể giúp học viên xác định mục tiêu, so sánh Sparta/Semi-Sparta, chọn tiêu chí trường, nắm chi phí tham khảo và hiểu quy trình đăng ký cơ bản. Nội dung này dựa trên thông tin công khai của MYB/Asean Việt Nam và cần xác nhận lại với admin hoặc MYB trước khi thanh toán.";
}

function nexaPhilippinesSchoolListAnswer(en) {
  if (en) {
    return [
      "Reference Philippines English schools from public MYB/Asean Vietnam and related public school pages:",
      "1. Philinter, Cebu/Lapu-Lapu: near Cebu airport, CEFR-based level evaluation, TESDA/IDP-related profile, courses include Junior ESL, General ESL, Intensive ESL, IPS, Business English, TOEIC, IELTS, and Pronunciation.",
      "2. CPI, Cebu: hotel/resort-style facilities, TESDA-recognized profile, courses include ESL, IELTS, TOEIC, TOEFL, Junior, Business English, Rapid Progress 30/60, and IELTS Guarantee.",
      "3. CIA Mactan Resort, Cebu: resort-style campus on Mactan, Semi-Sparta orientation, strong ESL/IELTS/Business options, suitable for learners who want study plus comfortable facilities.",
      "4. EV Academy, Cebu: Sparta and Semi-Sparta options, EOP policy, IELTS test-center positioning, modern facilities, suitable for beginner to intermediate learners who want discipline.",
      "5. English Fella 2, Cebu: long-standing campus, Classic/J-Sparta options, IELTS/TOEIC/TOEFL/Business/Junior/Guardian courses, quiet campus and IDP IELTS test-center profile.",
      "6. Cebu Blue Ocean Academy, Cebu/Lapu-Lapu: resort-style setting, ESL/TOEIC/IELTS/Business/Family options, useful for students who want short-term improvement with comfortable campus life.",
      "If you choose a school or want to enroll, contact admin so tuition, room availability, start date, promotion, documents, and payment are confirmed before any deposit."
    ].join("\n");
  }
  return [
    "Danh sách trường Anh ngữ Philippines tham khảo từ dữ liệu công khai MYB/Asean Việt Nam và các trang trường công khai:",
    "1. Philinter, Cebu/Lapu-Lapu: gần sân bay Cebu, đánh giá trình độ theo CEFR, hồ sơ TESDA/IDP, có Junior ESL, General ESL, Intensive ESL, IPS, Business English, TOEIC, IELTS và Pronunciation.",
    "2. CPI, Cebu: cơ sở vật chất kiểu khách sạn/resort, hồ sơ TESDA, có ESL, IELTS, TOEIC, TOEFL, Junior, Business English, Rapid Progress 30/60 và IELTS Guarantee.",
    "3. CIA Mactan Resort, Cebu: campus kiểu resort tại Mactan, định hướng Semi-Sparta, mạnh về ESL/IELTS/Business, phù hợp học viên muốn học nghiêm túc nhưng tiện nghi sinh hoạt tốt.",
    "4. EV Academy, Cebu: có lựa chọn Sparta và Semi-Sparta, áp dụng EOP, định vị là trung tâm thi IELTS, cơ sở hiện đại, phù hợp học viên cơ bản đến trung cấp cần kỷ luật.",
    "5. English Fella 2, Cebu: trường lâu đời, mô hình Classic/J-Sparta, có IELTS/TOEIC/TOEFL/Business/Junior/Guardian, campus yên tĩnh và hồ sơ trung tâm thi IELTS IDP.",
    "6. Cebu Blue Ocean Academy, Cebu/Lapu-Lapu: môi trường resort, có ESL/TOEIC/IELTS/Business/Family, phù hợp học viên muốn cải thiện ngắn hạn trong môi trường sinh hoạt thoải mái.",
    "Nếu học viên chọn trường hoặc muốn đăng ký học, hãy liên hệ admin để xác nhận học phí, phòng còn chỗ, ngày nhập học, ưu đãi, giấy tờ và phương thức thanh toán trước khi đặt cọc."
  ].join("\n");
}

function nexaSpecificSchoolAnswer(text, en) {
  if (matchesAny(text, ["philinter"])) {
    return en
      ? "Philinter is in Cebu/Lapu-Lapu near Cebu airport. Public MYB content describes CEFR-based level evaluation, TESDA/IDP-related positioning, nationality balance, 1:1 and group classrooms, dormitory options, meals, health support, and courses including Junior ESL, General ESL, Intensive ESL, IPS, Business English, TOEIC, IELTS, and Pronunciation. It is a good reference for students who want structured placement and many course tracks."
      : "Philinter nằm tại Cebu/Lapu-Lapu, gần sân bay Cebu. Nội dung MYB công khai mô tả trường có đánh giá trình độ theo CEFR, hồ sơ TESDA/IDP, cân bằng quốc tịch, lớp 1:1 và lớp nhóm, lựa chọn ký túc xá, bữa ăn, hỗ trợ y tế, các khóa Junior ESL, General ESL, Intensive ESL, IPS, Business English, TOEIC, IELTS và Pronunciation. Đây là lựa chọn đáng tham khảo nếu học viên muốn lộ trình rõ và nhiều khóa học.";
  }
  if (matchesAny(text, ["cpi", "cebu pelis"])) {
    return en
      ? "CPI, Cebu Pelis Institute, is described as a Cebu school with high-end hotel/resort-style facilities, about 250-student scale, TESDA profile, Filipino teachers, 1:1/group classrooms, library/self-study areas, pool, gym, buffet dining, and courses including ESL, IELTS, TOEIC, TOEFL, Junior, Business English, Rapid Progress 30/60, and IELTS Guarantee. It fits students who want strong facilities and intensive academic structure."
      : "CPI, Cebu Pelis Institute, được mô tả là trường tại Cebu có cơ sở vật chất cao cấp kiểu khách sạn/resort, quy mô khoảng 250 học viên, hồ sơ TESDA, giáo viên Philippines, lớp 1:1/lớp nhóm, thư viện/khu tự học, hồ bơi, gym, nhà ăn buffet, các khóa ESL, IELTS, TOEIC, TOEFL, Junior, Business English, Rapid Progress 30/60 và IELTS Guarantee. Phù hợp học viên muốn tiện nghi tốt và chương trình học cường độ cao.";
  }
  if (matchesAny(text, ["cia", "mactan resort"])) {
    return en
      ? "CIA Mactan Resort is a Cebu/Mactan resort-style campus. Public sources describe Semi-Sparta discipline, strong ESL/IELTS/Business options, daily vocabulary/grammar checks, IDP IELTS test-center positioning, and facilities suitable for adults, families, and junior/summer programs. Confirm current courses, tuition, and rooms with admin before choosing."
      : "CIA Mactan Resort là campus kiểu resort tại Cebu/Mactan. Nguồn công khai mô tả trường theo định hướng Semi-Sparta, mạnh về ESL/IELTS/Business, có kiểm tra từ vựng/ngữ pháp hằng ngày, hồ sơ trung tâm thi IELTS IDP và tiện ích phù hợp người lớn, gia đình, chương trình trẻ em/trại hè. Cần xác nhận khóa, học phí và phòng với admin trước khi chọn.";
  }
  if (matchesAny(text, ["ev", "ev academy"])) {
    return en
      ? "EV Academy in Cebu is described as offering Sparta and Semi-Sparta choices, EOP, modern facilities, internal or external dormitory options, IELTS test-center positioning, and a profile suitable for beginner to intermediate students. It is useful for learners who want discipline but still need some flexibility depending on the selected program."
      : "EV Academy tại Cebu được mô tả có lựa chọn Sparta và Semi-Sparta, áp dụng EOP, cơ sở vật chất hiện đại, có lựa chọn ký túc xá trong trường hoặc căn hộ ngoài trường, hồ sơ trung tâm thi IELTS và phù hợp học viên cơ bản đến trung cấp. Trường phù hợp học viên cần kỷ luật nhưng vẫn muốn mức linh hoạt tùy chương trình.";
  }
  if (matchesAny(text, ["fella", "fella 2", "english fella"])) {
    return en
      ? "English Fella 2 is a long-standing Cebu campus with Classic and J-Sparta options. Public sources describe ESL, TOEIC, TOEFL, IELTS, Business, Junior, and Guardian courses, a quiet Talamban location, resort-style campus, pool, sports facilities, and IDP IELTS test-center profile. It fits students who want a stable study environment and IELTS/communication focus."
      : "English Fella 2 là campus lâu đời tại Cebu, có lựa chọn Classic và J-Sparta. Nguồn công khai mô tả trường có ESL, TOEIC, TOEFL, IELTS, Business, Junior, Guardian, vị trí Talamban yên tĩnh, campus kiểu resort, hồ bơi, khu thể thao và hồ sơ trung tâm thi IELTS IDP. Phù hợp học viên muốn môi trường ổn định, tập trung IELTS hoặc giao tiếp.";
  }
  if (matchesAny(text, ["blue ocean", "cebu blue ocean"])) {
    return en
      ? "Cebu Blue Ocean Academy is described as a Lapu-Lapu/Cebu resort-style English school, with ESL, TOEIC, IELTS, Business, and Family options. Public sources highlight resort facilities, leisure activities, international student mix, and teacher training. It is useful for students who want short-term improvement with comfortable living and resort-style surroundings."
      : "Cebu Blue Ocean Academy được mô tả là trường Anh ngữ kiểu resort tại Lapu-Lapu/Cebu, có ESL, TOEIC, IELTS, Business và Family. Nguồn công khai nhấn mạnh tiện ích resort, hoạt động giải trí, môi trường học viên đa quốc tịch và đào tạo giáo viên. Phù hợp học viên muốn cải thiện ngắn hạn trong môi trường sống thoải mái.";
  }
  return "";
}

function nexaVisibleScopeText(role) {
  if (currentLanguage === "en") {
    return role === "teacher"
      ? "Dashboard, Students, Teaching Schedule, Teaching Pay, Notifications, Video call, Profile, language, and Nexa AI usage"
      : "Dashboard, Timetable, Teachers, Tuition, Placement Test, Notifications, Video call, Profile, language, Nexa AI usage, and Philippines English-study guidance";
  }
  return role === "teacher"
    ? "Tổng quan, Học viên, Lịch dạy, Tiền dạy, Thông báo, Video call, Hồ sơ, Ngôn ngữ và cách dùng Nexa AI"
    : "Tổng quan, Thời khóa biểu, Giáo viên, Học phí, Test đầu vào, Thông báo, Video call, Hồ sơ, Ngôn ngữ, cách dùng Nexa AI và tư vấn học tiếng Anh tại Philippines";
}

function isNexaAssistantInScope(text) {
  const outOfScope = [
    "thoi tiet",
    "weather",
    "tin tuc",
    "news",
    "co phieu",
    "stock",
    "crypto",
    "bong da",
    "football",
    "phap ly",
    "legal",
    "y te",
    "medical",
    "nau an",
    "cooking",
    "game",
    "chinh tri",
    "politics",
    "bai tap toan",
    "math homework",
    "viet van",
    "essay writing",
    "code",
    "lap trinh"
  ];
  if (matchesAny(text, outOfScope)) return false;
  return matchesAny(text, [
    "phan mem",
    "software",
    "he thong",
    "system",
    "tai khoan",
    "account",
    "dang nhap",
    "login",
    "dang xuat",
    "logout",
    "mat khau",
    "password",
    "ho so",
    "profile",
    "lich",
    "schedule",
    "lop",
    "class",
    "video",
    "meet",
    "giao vien",
    "teacher",
    "hoc vien",
    "student",
    "thong bao",
    "notification",
    "hoc phi",
    "tuition",
    "tien day",
    "salary",
    "test",
    "placement",
    "nghe",
    "noi",
    "doc",
    "phat am",
    "micro",
    "camera",
    "excel",
    "csv",
    "ngon ngu",
    "language",
    "tong quan",
    "dashboard",
    "thoi khoa bieu",
    "timetable",
    "tieng anh",
    "english",
    "du hoc",
    "philippines",
    "philipin",
    "sparta",
    "semi sparta",
    "cebu",
    "baguio",
    "clark",
    "subic",
    "ielts",
    "toeic",
    "esl",
    "business english",
    "philinter",
    "passport",
    "pickup",
    "mat goc",
    "giao tiep",
    "junior",
    "summer",
    "du hoc he",
    "hanh ly",
    "truoc khi di",
    "khoi hanh",
    "qua canh",
    "san bay",
    "ky tuc xa",
    "bua an",
    "suc khoe",
    "fanpage",
    "facebook",
    "tiktok",
    "myb",
    "english myb"
  ]);
}

function matchesAny(text, keywords) {
  return keywords.some((keyword) => text.includes(keyword));
}

function normalizeTextForMatch(value) {
  return String(value || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function nowTime() {
  return new Intl.DateTimeFormat(currentLocale(), {
    hour: "2-digit",
    minute: "2-digit"
  }).format(new Date());
}

function translate(value) {
  if (currentLanguage !== "en") return String(value ?? "");
  const text = String(value ?? "");
  if (!text.trim()) return text;
  const leading = text.match(/^\s*/)?.[0] || "";
  const trailing = text.match(/\s*$/)?.[0] || "";
  const core = text.trim().replace(/\s+/g, " ");
  return `${leading}${translateCore(core)}${trailing}`;
}

function translateCore(text) {
  if (EN_TRANSLATIONS[text]) return EN_TRANSLATIONS[text];

  const replacements = [
    [/^Xin chào (.+)\.$/, "Hello $1."],
    [/^Sửa (Giáo viên|Học viên)$/, (_, role) => `Edit ${translateCore(role).toLowerCase()}`],
    [/^Cập nhật đồng bộ thông tin đăng nhập và hồ sơ (giáo viên|học viên)\.$/, (_, role) => `Update login information and ${translateCore(role).toLowerCase()} profile together.`],
    [/^Hướng dẫn phần (.+)$/, (_, section) => `Instructions for ${translateCore(section).toLowerCase()}`],
    [/^Thời gian gợi ý: (.+) phút\. Bài làm sẽ được lưu để admin đánh giá đầu vào\.$/, "Suggested time: $1 minutes. The submission will be saved for admin placement evaluation."],
    [/^(.+) phút$/, "$1 minutes"],
    [/^(.+) giờ$/, "$1 hours"],
    [/^(.+) buổi$/, "$1 sessions"],
    [/^(.+) buổi - (.+) giờ - (.+) tạm tính\.$/, "$1 sessions - $2 hours - $3 estimated."],
    [/^(.+) dạy (.+) - (.+) giờ - (.+) học phí$/, "$1 teaches $2 - $3 hours - $4 tuition"],
    [/^Admin đã mở lớp: (.+)$/, "Admin opened class: $1"],
    [/^Lịch học sắp tới: (.+)$/, "Upcoming lesson: $1"],
    [/^Admin đã mở lớp: (.+)\. Bấm Video call để vào lớp\.$/, "Admin opened class: $1. Click Video call to join."],
    [/^Bạn có lịch học mới: (.+) - (.+)\.$/, "You have a new lesson: $1 - $2."],
    [/^GV: (.+)$/, "Teacher: $1"],
    [/^HV: (.+)$/, "Student: $1"],
    [/^(.+)\/giờ$/, "$1/hour"],
    [/^Trình độ (.+)$/, "Level $1"],
    [/^Lớp đang mở: (.+)$/, "Live class: $1"],
    [/^(.+) lớp đang mở$/, "$1 live classes"],
    [/^(.+) - hạn (.+)$/, "$1 - due $2"],
    [/^(.+) - (.+) phút$/, "$1 - $2 minutes"],
    [/^Tổng (.+)$/, "Total $1"],
    [/^Xóa tài khoản (.+)\\? (.+)$/, "Delete account $1? $2"],
    [/^(.+) lịch học liên quan cũng sẽ bị xóa\\.$/, "$1 related lessons will also be deleted."],
    [/^(.+) lịch học và (.+) bài test đầu vào liên quan cũng sẽ bị xóa\\.$/, "$1 related lessons and $2 related placement tests will also be deleted."]
  ];

  for (const [pattern, replacement] of replacements) {
    if (pattern.test(text)) {
      return text.replace(pattern, replacement);
    }
  }
  return text;
}

function applyLanguage(root = app) {
  document.documentElement.lang = currentLanguage === "en" ? "en" : "vi";
  if (!root) return;

  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      const parent = node.parentElement;
      if (!parent || !node.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
      if (parent.closest("script, style, textarea")) return NodeFilter.FILTER_REJECT;
      return NodeFilter.FILTER_ACCEPT;
    }
  });

  const nodes = [];
  while (walker.nextNode()) nodes.push(walker.currentNode);
  nodes.forEach((node) => {
    node.nodeValue = translate(node.nodeValue);
  });

  root.querySelectorAll("[placeholder], [title], [aria-label]").forEach((element) => {
    ["placeholder", "title", "aria-label"].forEach((attribute) => {
      if (element.hasAttribute(attribute)) {
        element.setAttribute(attribute, translate(element.getAttribute(attribute)));
      }
    });
  });
}

function formatNumber(value) {
  return new Intl.NumberFormat(currentLocale(), {
    maximumFractionDigits: 2
  }).format(Number(value || 0));
}

function todayISO() {
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function todayText() {
  return new Intl.DateTimeFormat(currentLocale(), {
    weekday: "long",
    day: "2-digit",
    month: "2-digit",
    year: "numeric"
  }).format(new Date());
}

function formatDate(dateString, style = "long") {
  if (!dateString) return "";
  const date = new Date(`${dateString}T00:00:00`);
  const options =
    style === "short"
      ? { day: "2-digit", month: "2-digit" }
      : { weekday: "short", day: "2-digit", month: "2-digit", year: "numeric" };
  return new Intl.DateTimeFormat(currentLocale(), options).format(date);
}

function formatDateTime(value) {
  if (!value) return "";
  return new Intl.DateTimeFormat(currentLocale(), {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit"
  }).format(new Date(value));
}

function makeId(prefix) {
  return `${prefix}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;
}

function icon(name) {
  return `<i data-lucide="${safe(name)}" aria-hidden="true"></i>`;
}

function refreshIcons() {
  if (window.lucide?.createIcons) {
    window.lucide.createIcons();
    return;
  }
  window.setTimeout(() => {
    if (window.lucide?.createIcons) window.lucide.createIcons();
  }, 120);
}

function showToast(message) {
  const existing = document.querySelector(".toast");
  if (existing) existing.remove();
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.textContent = translate(message);
  document.body.appendChild(toast);
  clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => toast.remove(), 3200);
}

function showFormError(errorBox, message) {
  if (!errorBox) {
    showToast(message);
    return;
  }
  errorBox.textContent = translate(message);
  errorBox.style.display = "block";
}

function downloadText(filename, content, mimeType) {
  const blob = new Blob([content], { type: mimeType });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function fileToDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => resolve(String(reader.result || "")));
    reader.addEventListener("error", reject);
    reader.readAsDataURL(file);
  });
}

function safe(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function registerServiceWorker() {
  if (!("serviceWorker" in navigator) || !canUseServerApi()) return;
  navigator.serviceWorker.register("service-worker.js?v=20260530-nexa-ai-schools").catch(() => {});
}

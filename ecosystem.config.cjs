module.exports = {
  apps: [
    {
      name: "asean-english-hub",
      script: "server.js",
      cwd: __dirname,
      env: {
        NODE_ENV: "production",
        HOST: "0.0.0.0",
        PORT: "4173",
        DATA_FILE: "data/asean-hub.json"
      },
      watch: false,
      max_memory_restart: "300M"
    }
  ]
};

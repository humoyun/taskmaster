const fs = require("fs");
fs.writeFileSync(
  "./.env.production",
  `API_HOST_PROD=${process.env.API_HOST_PROD}\n`
);

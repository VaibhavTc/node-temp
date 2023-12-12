const { log } = require("console");
const os = require("os");
// info about user
const info = os.userInfo();
console.log(info);
// this method returns uptime in seconds
console.log(os.uptime() / 3600);
const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};
console.log(currentOS);

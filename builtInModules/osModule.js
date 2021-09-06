/* OS Module */

const osModule = require("os");
const user = osModule.userInfo();
console.log(osModule.version());
console.log(osModule.hostname());

uptimeHours = Math.floor(osModule.uptime() / 3600);
uptimeMinutes = Math.floor((osModule.uptime() - uptimeHours * 3600) / 60);
uptimeSeconds = Math.floor(
  osModule.uptime() - uptimeHours * 3600 - uptimeMinutes * 60
);

console.log(osModule.tmpdir());
console.log(osModule.homedir());
console.log(osModule.type());
console.log(osModule.arch());
console.log(osModule.platform());
console.log(osModule.networkInterfaces());
console.log(osModule.loadavg());
console.log(osModule.endianness());

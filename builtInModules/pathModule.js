/* PATH Module */

const pathModule = require("path");
console.log(pathModule.sep);
const filePath = pathModule.join("/Desktop/", "/nodeCode/", "documentation.md");
const fileAbsolutePath = pathModule.resolve("documentation.md");

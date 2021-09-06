/* fs Module */

const { readFileSync, writeFileSync } = require("fs");

console.log("start");
const firstTextFile = readFileSync("../first.txt", "utf8");
const secondTextFile = readFileSync("../second.txt", "utf8");
writeFileSync("../third.txt", `${firstTextFile}\n${secondTextFile}`);
writeFileSync("../third.txt", "\nHey there!", { flag: "a" });

console.log("done");
console.log("starting the next one");

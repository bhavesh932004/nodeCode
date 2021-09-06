const { readFile, writeFile } = require("fs");

console.log("start");
readFile("../first.txt", "utf-8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const firstFileContent = result;
  readFile("../second.txt", "utf-8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const secondFileContent = result;
    writeFile(
      "../third.txt",
      `${firstFileContent}\n${secondFileContent}`,
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log("done with the very first task");
      }
    );
  });
});

writeFile("../fouth.txt", "Hey There", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("done with the recent task");
});

console.log("starting the next one");

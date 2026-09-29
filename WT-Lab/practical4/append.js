const fs = require("fs");

fs.appendFile("text1.txt", " Adding some new data to the file.", (err) => {
  if (err) throw err;
  console.log("File is appended successfully");
});

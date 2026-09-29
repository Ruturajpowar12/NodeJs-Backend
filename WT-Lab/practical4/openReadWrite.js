const fs = require("fs");

fs.open("demo.txt", "w+", (err) => {
  if (err) throw err;
  console.log("File is open");
});

fs.writeFile("demo.txt", "Exploring file handling with Node.js", (err) => {
  if (err) throw err;
  console.log("File is written");
});

fs.readFile("demo.txt", "utf-8", (err, data) => {
  if (err) throw err;
  console.log("File read operation is successful");
  console.log(data);
});

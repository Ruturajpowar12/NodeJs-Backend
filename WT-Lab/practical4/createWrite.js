const fs = require("fs");
fs.writeFile(
  "text.txt",
  "Node.js file handling practical\nCreate and Write File Operation ",
  function (err) {
    if (err) throw err;
    console.log("File is created and data is written successfully");
  },
);

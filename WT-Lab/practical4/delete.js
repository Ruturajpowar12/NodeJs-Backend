const fs = require("fs");

fs.unlink("text2.txt", (err) => {
  if (err) throw err;
  console.log("Delete operation is successful");
});

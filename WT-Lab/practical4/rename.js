const fs = require("fs");

fs.rename("text1.txt", "text2.txt", (err) => {
  if (err) throw err;
  console.log("Rename operation is successful");
});

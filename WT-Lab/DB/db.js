var mysql = require("mysql");
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "studentinfo",
  password: "",
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connect to Database!");
});

var mysql = require("mysql");
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Database Connected!");
  con.query("CREATE DATABASE emp", function (err) {
    if (err) throw err;
    console.log("Database Created!");
  });
});

var mysql = require("mysql");
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "studentinfo",
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected to Database!");
  con.query("SELECT * FROM info", function (err, result) {
    if (err) throw err;

    console.log(result);
  });
});

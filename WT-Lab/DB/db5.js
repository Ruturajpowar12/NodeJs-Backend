var mysql = require("mysql");
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "emp",
  password: "",
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connect to Database!");

  var sql = "Insert into emplinfo (name, address) values ?";
  var values = [
    ["Rohan", "Ratnagiri"],
    ["Swarup", "Kolhapur"],
    ["Piyush", "Satara"],
    ["Sansakr", "Pune"],
  ];

  con.query(sql, [values], function (err, result) {
    if (err) throw err;
    console.log(result);
  });
});

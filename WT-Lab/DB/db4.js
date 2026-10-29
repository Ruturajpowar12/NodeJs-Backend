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
  con.query(
    'INSERT INTO emplinfo (name, address) VALUES ("Ruturaj", "Kolhapur")',
    function (err, result) {
      if (err) throw err;
      console.log(result);
    },
  );
});

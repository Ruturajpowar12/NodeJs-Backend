const express = require("express");
const mysql = require("mysql");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// MySQL connection
const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "employee_db",
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Database Connected!");
});

// Save employee only in database
app.post("/save", function (req, res) {
  const { name, department, salary } = req.body;

  const sql =
    "INSERT INTO employees (name, department, salary) VALUES (?, ?, ?)";

  con.query(sql, [name, department, salary], function (err) {
    if (err) {
      console.log(err);
      return res.status(500).send("Error saving employee.");
    }

    res.send(`
            <h2>Employee Saved Successfully!</h2>
            <a href="/">Add Another Employee</a><br><br>
            <a href="/report">View Employee Report</a>
        `);
  });
});

// Fetch employee records only from MySQL
app.get("/report", function (req, res) {
  con.query("SELECT * FROM employees", function (err, result) {
    if (err) {
      return res.status(500).send("Error fetching records.");
    }

    let html = `
        <!DOCTYPE html>
        <html>
        <head>
            <title>Employee Report</title>
            <link rel="stylesheet" href="/style.css">
        </head>
        <body>
        <div class="container">
            <h2>Employee Report</h2>
            <table border="1" cellpadding="8">
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Department</th>
                    <th>Salary</th>
                </tr>`;

    result.forEach(function (emp) {
      html += `
                <tr>
                    <td>${emp.id}</td>
                    <td>${emp.name}</td>
                    <td>${emp.department}</td>
                    <td>${emp.salary}</td>
                </tr>`;
    });

    html += `
            </table>
            <a href="/">Back to Form</a>
        </div>
        </body>
        </html>`;

    res.send(html);
  });
});

// Start server
app.listen(3000, function () {
  console.log("Server running at http://localhost:3000");
});

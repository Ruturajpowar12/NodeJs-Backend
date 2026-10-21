const express = require("express");
const app = express();

const dotenv = require("dotenv");
dotenv.config();

app.get("/", (req, res) => {
  res.send("hello world");
});
app.get("/login", (req, res) => {
  res.send("<h1> loggin has succesfully</h1>");
});
app.get("/user", (req, res) => {
  res.send("<h1> User is Ruturaj</h1>");
});

app.listen(process.env.PORT, () => {
  console.log(`server running on port ${process.env.PORT}`);
});

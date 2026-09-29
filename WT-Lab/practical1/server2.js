var http = require("http");
var cal = require("./addition.js");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });

  res.write("Hello, this is Arithmetic operations!\n");
  res.write("Addition of values 10 and 70: ");
  res.write(String(cal.addition(10, 70)));

  res.end();
});

server.listen(8001, () => {
  console.log("Server2 running at 8001");
});

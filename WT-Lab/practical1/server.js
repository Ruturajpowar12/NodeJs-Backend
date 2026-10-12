var http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.write("Hello, this is my simple Node.js server!");
  res.end();
});

server.listen(8081, () => {
  console.log("Server running at http://localhost:8081");
});

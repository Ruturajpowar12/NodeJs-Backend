var http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.write("Hello, this is my simple Node.js server!");
  res.end();
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});

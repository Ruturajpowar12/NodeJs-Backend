var http = require("http");
var getFact = require("./fact.js");
var getSqCube = require("./squareCube.js");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });

  res.write("Factorial is : " + getFact.fact(5) + "\n");
  res.write("Square is : " + getSqCube.square(5) + "\n");
  res.write("Cube is : " + getSqCube.cube(5));

  res.end();
});

server.listen(8001, () => {
  console.log("Server running at 8001");
});

var http = require("http");
var arithmetic = require("./arithmetic.js");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });

  res.write("Arithmetic Operations\n\n");

  res.write("Addition of 10 and 5 : " + arithmetic.addition(10, 5) + "\n");

  res.write(
    "Subtraction of 10 and 5 : " + arithmetic.subtraction(10, 5) + "\n",
  );

  res.write("Multiplication of 10 and 5 : " + arithmetic.multiplication(10, 5));

  res.end();
});

server.listen(8001, () => {
  console.log("Server running at port 8001");
});

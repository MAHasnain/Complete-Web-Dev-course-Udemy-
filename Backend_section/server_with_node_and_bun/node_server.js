const http = require("http");
const hostName = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("Hello Teas.");
  } else if (req.url === "/ice-tea") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("Hello Ice Tea.");
  } else if (req.url === "/hot-tea") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("Hello Hot Tea.");
  } else {
    res.statusCode = 404;
    res.setHeader("Content-Type", "text/plain");
    res.end("Tea not found.");
  }
});

server.listen(port, hostName, () => {
  console.log(`Server is listening at http://${hostName}:${port}`);
});

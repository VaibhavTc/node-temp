const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("welcome to our home page");
  }
  if (req.url === "/about") {
    res.end("welcome to our about page");
  }
  res.end(`<h1>OOPS!</h1>
  <p>lorem10000</p>
  <a href="/">Go home</a>`);
});
server.listen(5000);

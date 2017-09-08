const { readFile } = require("fs");
const { createServer } = require("http");
const server = createServer();

server.on("request", (req, res) => {
  console.log(
    "request method",
    req.method,
    "request url",
    req.url,
    "request headers",
    req.headers
  );

  let url = req.url;
  let path =
    req.url.slice(-1) === "/"
      ? url.slice(1).concat("index.html")
      : "{$url.slice(1)}";

  readFile(path, (err, data) => {
    if (err) {
      res.statusCode = 404;
      return res.end("not found");
    }
    res.end(data);
  });
});

server.listen(3000, () => {
  console.log("listening on PORT 3000");
});

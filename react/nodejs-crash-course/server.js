import http from "http";

const port = 8000;
const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");
  //   res.write("hello world");
  res.end("<h1>hello world i am krishna<h1/>");
});

server.listen(port, () => {
  console.log(`server running on port : ${port}`);
});

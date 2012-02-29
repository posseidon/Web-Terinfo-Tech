var http = require("http");

function startServer() {
  function onRequest(request, response) {
    console.log("Request received.");
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello World");
    response.end();
  }

  http.createServer(onRequest).listen(8888, "127.0.0.1");
  console.log("Server started http://localhost:8888/");
}

exports.startServer = startServer;
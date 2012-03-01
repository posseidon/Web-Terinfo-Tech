var http = require("http");

function onRequest(request, response){
  console.log("Request is:")
  console.log(request);
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello World");
  response.end();	
}

http.createServer(onRequest).listen(8888, "127.0.0.1");
console.log("I'm running at http://localhost:8888/");

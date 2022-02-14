const http = require("http");
const fs = require("fs");

function doOnRequest(request, response) {
  if (request.method === "GET" && request.url === "/") {
    const page = fs.readFileSync(__dirname + "/index.html");
    response.end(page);
  } else if (request.method === "GET" && request.url == "/style.css") {
    var styling = fs.readFileSync("style.css", "utf8");
    response.end(styling);
  } else if (request.method === "POST" && request.url === "/sayHi") {
    fs.appendFileSync("hi_log.txt", "Somebody said hi.\n");
    response.end("hi back to you!");
  } else if (request.method === "POST" && request.url === "/greeting") {
    // accumulate the request body in a series of chunks
    // code here...
  } else {
    // Handle 404 error: page not found
    // code here...
  }
}

const server = http.createServer(doOnRequest);

server.listen(3001);

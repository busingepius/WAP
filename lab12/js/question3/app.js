/**
 * Question3: Create a web server and

 If the path is ‘/image’ and method is GET, send a response of an image to any client. Set an appropriate content-type for your image.
 If the path is ‘/pdf’ and method is GET, send a response of a pdf file to any client. Set a Content-type as "application/pdf".
 If the path is ‘/about’ and method is GET, send a response of a txt file to any client. Set a Content-type as "text/plain".
 If the path is ‘/home’ or ‘/’ and method is GET, send “Welcome to my website” text.
 Otherwise return not found with status code 404.
 */

const http = require('http');
const server = http.createServer();

server.on('request', function (req, res) {
    if (req.method === "GET" && req.url === "/home") {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.write('Welcome to my website!');
        res.end();
    } else if(req.method === "GET" && req.url === "/pdf"){
        res.writeHead(200,{"Content-Type":"application/pdf"})
        res.end();

    } else if (req.method === "GET" && req.url === "/about") {
        res.writeHead(200,{"Content-Type":"application/plain"})
        res.end();

    } else if (req.method === "GET" && req.url === "/image") {
        res.writeHead(200,{"Content-Type":"application/jpg"})
        res.end();

    }
    else {
        res.writeHead(404, {"Content-Type": "text/plain"});
        res.write("Page not found");
        res.end();
    }
});

function start() {
    server.listen(3000, function () {
        console.log("Listening...at port 3000")
    })

}

start();

/**
 * Question3: Create a web server and

 If the path is ‘/image’ and method is GET, send a response of an image to any client. Set an appropriate content-type for your image.
 If the path is ‘/pdf’ and method is GET, send a response of a pdf file to any client. Set a Content-type as "application/pdf".
 If the path is ‘/about’ and method is GET, send a response of a txt file to any client. Set a Content-type as "text/plain".
 If the path is ‘/home’ or ‘/’ and method is GET, send “Welcome to my website” text.
 Otherwise return not found with status code 404.
 */

const express = require("express");
const fs = require("fs");
const port = 3000;
const app = express();
const path = require("path");
const router = require("./routes")

app.all("/", express.static("./public"));
app.use(express.urlencoded({extended: true}));
app.use(router)

app.get("/image", function middleware(req, res, next) {
    const read = fs.readFileSync(path.join(__dirname, "public/image_lab12.jpg"));
    res.send(read);
})
app.get("/pdf", function middleware(req, res, next) {
    const read = fs.readFileSync(path.join(__dirname, "public/lesson12-2HTTP.pdf"));
    res.send(read);
});
app.put("/put/:ID", (req, res, next) => {
    res.send("update with PUT");
});
app.delete("/delete/:ID", (req, res, next) => {
    res.send("delete with DELETE");
});
app.post("/post", (req, res, next) => {
    res.send("writing with POST");
});
app.get("/home", function middleware(req, res, next) {
    res.send('Welcome to my website!');
});
app.get("/about", function middleware(req, res, next) {
    const readFile = fs.readFileSync("./public/lab.txt");
    res.sendFile(path.join(__dirname, "./public/lab.df"));
});
app.get("/nextroute", function middleware(req, res, next) {
    console.log("1");
    next();
}, (req, res, next) => {
    next("route")
});
app.get("/nextroute", (req, res, next) => {
    console.log("here now")
    res.end("end");
});
app.get("/nexterror", (req, res, next) => {
    console.log("go to the error")
    next();
}, (req, res, next) => {
    next("err")
});
app.get("/home/:ID", (req, res, next) => {
    console.log(req.params, req.query, req.body);
    res.json({"param": req.params, "queryString": req.query, "body": req.body});
})
app.use(function notFound(req, res, next) {
    res.send(`<h1>page not found</h1>`);
})
app.use(function errorOccurred(err, req, res, next) {
    res.send(`<h1>error</h1>`);
})


function start() {
    app.listen(port, function print() {
        console.log(`Server is listening at port ${port}`);
    })
}

start();

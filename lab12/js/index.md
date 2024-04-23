/**
 * Question1: Review followings: (no need to submit anything for this question)

Local module with require function and module.exports.
Built-in modules:
path, url
fs: readFileSync, writeFileSync, readFile, writeFile, createWriteStream, createReadStream, pipe
http: req: url, method, headers, res: writeHead, setHeader, write, end
 */

/**
 * Question2: What will be outputs when we execute index.js?
 * */

    // pattern.js

    module.exports.getName = function () {

        console.log('Josh Edward');

    };


exports.getDate = function () {

    console.log('2024-04-18');


};


// index.js

const person = require('./pattern');

person.getName();

person.getDate();



/**
 * Question3: Create a web server and

If the path is ‘/image’ and method is GET, send a response of an image to any client. Set an appropriate content-type for your image.
If the path is ‘/pdf’ and method is GET, send a response of a pdf file to any client. Set a Content-type as "application/pdf".
If the path is ‘/about’ and method is GET, send a response of a txt file to any client. Set a Content-type as "text/plain".
If the path is ‘/home’ or ‘/’ and method is GET, send “Welcome to my website” text.
    Otherwise return not found with status code 404.
 */
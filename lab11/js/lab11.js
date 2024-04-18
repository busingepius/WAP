const fs = require('fs');

//you may assume input.txt is in the same folder

const rd = fs.createReadStream("input.txt");
rd.on("close", () => console.log('readablStream close event'))

fs.readFile('input.txt', "utf-8", (error, data) => {

    if (error) console.log(error);

    else console.log(data)

});

setTimeout(() => console.log("this is setTimeout"), 5000);

setTimeout(() => console.log("this is setTimeout"), 0);


setImmediate(() => console.log("this is setImmediate 1"));

setImmediate(() => {

    console.log("this is setImmediate 2")

    Promise.resolve().then(() => console.log('Promise.resolve inside setImmediate'));

});

Promise.resolve().then(() => console.log('Promise.resolve 1'));

Promise.resolve().then(() => {

    console.log('Promise.resolve 2')

    process.nextTick(() => console.log('nextTick inside Promise'));

});

process.nextTick(() => console.log('nextTick 1'));


/** ANSWER is
nextTick 1
Promise.resolve 1
Promise.resolve 2
nextTick inside Promise
this is setTimeout
this is setImmediate 1
this is setImmediate 2
Promise.resolve inside setImmediate
11-from file
this is setTimeout
 */

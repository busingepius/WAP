// // Callbacks in the Microtask Queues are executed before callbacks in the Timer Queue.
// // Callbacks in microtask queues are executed in between the execution of callbacks in the
// // timer queue.
// setTimeout(() => console.log('settimeout 1'), 0);
// setTimeout(() => {
//     console.log('settimeout 2')
//     process.nextTick(() => console.log('nextTick inside setTimeout'));
// }, 0);
// setTimeout(() => console.log('settimeout 3'), 0);
// Promise.resolve().then(() => console.log('Promise.resolve 1'));
// Promise.resolve().then(() => console.log('Promise.resolve 2'));
// process.nextTick(() => console.log('nextTick 1'));
// process.nextTick(() => console.log('nextTick 2'));


// // Asynchronous code execution
// console.log("-----------------------------")
const fs = require('fs');
// console.log('first');
// fs.readFile('hello.txt', () => console.log('second'));
// console.log('third');

/* I/O Queue in the Node.js Event loop */
// fs.readFile('hello.txt', () => console.log('readFile 1'));
// Promise.resolve().then(() => console.log('Promise.resolve 1'));
// process.nextTick(() => console.log('nextTick 1'));

/* I/O Polling in the Node.js Event Loop */
// fs.readFile('hello.txt', () => console.log('readFile'));
// setTimeout(() => console.log("this is setTimeout"), 0);
// setImmediate(() => console.log("this is setImmediate"), 0);
// Promise.resolve().then(() => console.log('Promise.resolve 1'));
// process.nextTick(() => console.log('nextTick 1'));
// for (let i = 0; i < 200000000; i++) { }

/* Check Queue in the Node.js Event loop */
// setTimeout(() => console.log("this is setTimeout..."), 0);
// setImmediate(() => { console.log('immediate'); });

// /* setTimeout vs setImmediate vs process.nextTick */
// // what's the output
// setTimeout(() => { console.log('timeout'); }, 0);
// setImmediate(() => { console.log('immediate'); });
// process.nextTick(()=> console.log('nexttick'));
// /*
// nexttick
// timeout
// immediate
//  */

/* Close Queue in the Node.js Event Loop */
const rd = fs.createReadStream("input.txt");
rd.close();
rd.on("close", () => console.log('readablStream close event'))
setTimeout(() => console.log("this is setTimeout"), 0);
setImmediate(() => console.log("this is setImmediate"), 0);
Promise.resolve().then(() => console.log('Promise.resolve 1'));
process.nextTick(() => console.log('nextTick 1'));
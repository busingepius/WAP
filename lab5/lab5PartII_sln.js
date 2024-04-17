"use strict";
//Lab5 solutions
//There are many solutions for the particular problem. 
//Following solutions are one of them for giving you the idea. 


// 1.a) Write a function named, computeSumOfSquares, that takes as input, an array of numbers
//and calculates and returns the sum of the squares of each number in the input array.
//E.g. computeSumOfSquares([1,2,3]) should be computed as 1^2 + 2^2 +3^2 = 14.
//Note: Write your Javascript code without using Imperative programming. i.e.
//Do NOT use any explicit looping construct; instead use functional programming style/approach.

function computeSumOfSquares(arr) {
    return arr.reduce((pre, cur) => pre + cur * cur, 0)
}
console.log(computeSumOfSquares([1, 2, 3]));

// 1.b) Write a function named, printOddNumbersOnly, that takes as input, an array of integral numbers and
//it finds and prints only the numbers which are odd.
function printOddNumbersOnly(arr) {
    // arr.filter(e => e % 2 == 1).forEach(e => console.log(e))
    //or
    // let str = arr.filter(e => e % 2 == 1).reduce((pre, cur) => pre + cur + ", ", "")
    //or
    let str = arr.filter(e => e % 2 == 1).join(",");
    console.log(str);
}
printOddNumbersOnly([5, 7, 8, 6, 11]);


// 1.c) Write a function named printFibo, that takes as input, a given length, n, and
//any two starting numbers a and b, and it prints-out the Fibonacci sequence,
//e.g. (0, 1, 1, 2, 3, 5, 8, 13, 21, 34,…) of the given length, beginning with a and b.
//(e.g. printFibo(n=1, a=0, b=1), prints-out: "0", as output; printFibo(n=2, a=0, b=1),
//prints-out: "0, 1", as output; printFibo(n=3, a=0, b=1), prints-out: "0, 1, 1", as output;
//printFibo(n=6, a=0, b=1), prints-out: "0, 1, 1, 2, 3, 5", as output; and
//printFibo(n=10, a=0, b=1), prints-out: "0, 1, 1, 2, 3, 5, 8, 13, 21, 34", as output).

//You may use array or recursive way.
function printFibo(n, a, b) {
    let arr = [];
    for (let i = 1; i <= n; i++) {
        arr.push(a)
        let temp = a;
        a = b;
        b = temp + b;
    }
    console.log(arr.join(","));
}

let a = 0, b = 1;
printFibo(1, a, b);
printFibo(2, a, b)
printFibo(3, a, b);
printFibo(6, a, b);
printFibo(10, a, b);

// 2. Destructuring assignment:

let user = {
    name: "John",
    years: 30
};

let { name, years: age, isAdmin = false } = user;
alert(name); // John
alert(age); // 30
alert(isAdmin); // false

// 3. Write the following JavaScript functions:

let libraryBooks = [
    { title: "The Road Ahead", author: "Bill Gates", libraryID: 1235 },
    { title: "Walter Isaacson", author: "Steve Jobs", libraryID: 4268 },
    { title: "The Road Ahead", author: "Bill Gates", libraryID: 4268 },
    { title: "Mockingjay: The Final Book of The Hunger Games", author: "Suzanne Collins", libraryID: 3257 }
];

//addBook, which will take title, author, and libraryID as inputs. It will create a new book object and add it to the
// library. addBook should return the newly created book.
function addBook(title, author, ID) {
    let newBook = { title: title, author: author, libraryID: ID };
    libraryBooks.push(newBook);
    return newBook;
}
console.log(addBook("Atomic habit", "James Clear", 3579));
//getTitles, which will return all the book titles in libraryBooks in an alphabetically ordered array
function getTitles() {
    return libraryBooks.map(e => e.title).sort();
}
console.log(getTitles());

// findBooks, which will take the keyword of title as input. It will find books which contain the given keyword in
// the title and return books alphabetically ordered by the author.
function findBooks(keyword) {
    return libraryBooks.filter(e => e.title.toLowerCase().includes(keyword.toLowerCase())).sort((a, b) => a.author.localeCompare(b.author));
}
console.log(findBooks('i'));
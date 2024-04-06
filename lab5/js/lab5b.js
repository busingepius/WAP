/**
 * a) Write a function named, computeSumOfSquares, that takes as input, an array of numbers and calculates
 *    and returns the sum of the squares of each number in the input array. E.g. computeSumOfSquares([1,2,3])
 *    should be computed as 1^2 + 2^2 +3^2 = 14. Note: Write your Javascript code without using Imperative
 *    programming. i.e. Do NOT use any explicit looping construct; instead use functional programming
 *    style/approach.
 */

function computeSumOfSquares(numbers) {
    return numbers.map((number) => Math.pow(number, 2)).reduce((a, n) =>
        n + a
    );
}

console.log(computeSumOfSquares([1, 2, 3]));

//
/**
 * b) Write a function named, printOddNumbersOnly, that takes as input, an array of numbers and it finds and
 *    prints only the numbers which are odd.
 */

function printOddNumbersOnly(array) {
    array.forEach(function (item) {
        if (!(item % 2)) {
            console.log(item);
        }
    })
}

printOddNumbersOnly([1, 2, 3, 4]);

/**
 * c) Write a function named printFibo, that takes as input, a given length, n, and any two starting numbers a and
 *    b, and it prints-out the Fibonacci sequence, e.g. (0, 1, 1, 2, 3, 5, 8, 13, 21, 34,…) of the given length,
 *    beginning with a and b. (e.g. printFibo(n=1, a=0, b=1), prints-out: "0", as output; printFibo(n=2, a=0, b=1),
 *    prints-out: "0, 1", as output; printFibo(n=3, a=0, b=1), prints-out: "0, 1, 1", as output; printFibo(n=6, a=0,
 *    b=1), prints-out: "0, 1, 1, 2, 3, 5", as output; and printFibo(n=10, a=0, b=1), prints-out: "0, 1, 1, 2, 3, 5, 8, 13,
 *    21, 34", as output).
 */

function printFibo(n = 3, a = 0, b = 1) {
    if (n === a || n === b) {
        return n;
    } else {
        return printFibo(n - 1) + printFibo(n - 2);
    }
}

function print(n, a, b) {
    for (let i = 0; i < n; i++) {
        console.log(printFibo(i, a, b))
    }
}

print(4, 0, 1);

/**
 * 2. Destructuring assignment:
 * We have an object:
 * let user = {
 * name: "John",
 * years: 30
 * };
 * Write the destructuring assignment that reads:
 * name property into the variable name.
 * years property into the variable age.
 * isAdmin property into the variable isAdmin (false, if no such property)
 * Here’s an example of the values after your assignment:
 * let user = { name: "John", years: 30 };
 * // your code to the left side:
 * // ... = user
 * alert( name ); // John
 * alert( age ); // 30
 * alert( isAdmin ); // false
 */

let user = {name: "Pius", years: 30};
const {name, years: age, isAdmin = false} = user;
alert(name);
alert(age);
alert(isAdmin);

/**
 * 3. let libraryBooks = [
 * { title: "The Road Ahead", author: "Bill Gates", libraryID: 1235 },
 * { title: "Walter Isaacson", author: "Steve Jobs", libraryID: 4268 },
 * { title: "The Road Ahead", author: "Bill Gates", libraryID: 4268 },
 * { title: "Mockingjay: The Final Book of The Hunger Games", author: "Suzanne Collins", libraryID: 3257 }
 * ];
 * Write the following JavaScript functions:
 * o addBook, which will take title, author, and libraryID as inputs. It will create a new book object and add it to the
 * library. addBook should return the newly created book.
 * o getTitles, which will return all the book titles in libraryBooks in an alphabetically ordered array.
 * o findBooks, which will take the keyword of title as input. It will find books which contain the given keyword in
 * the title and return books alphabetically ordered by the author.
 */

let libraryBooks = [
    {title: "The Road Ahead", author: "Bill Gates", libraryID: 1235},
    {title: "Walter Isaacson", author: "Steve Jobs", libraryID: 4268},
    {title: "The Road Ahead", author: "Bill Gates", libraryID: 4268},
    {title: "Mockingjay: The Final Book of The Hunger Games", author: "Suzanne Collins", libraryID: 3257}
];

libraryBooks[4] = {
    title: "The Supreme Awakening", author: "Craig ", libraryID: 1234
}

console.log(libraryBooks)

function getTitles(libraryBooks) {
    return libraryBooks.map((book) => book.title).sort();
}

console.log(getTitles(libraryBooks));

function findBooks(title) {
    return libraryBooks.filter((book) => book.title.includes(title)).sort((book) => book.title);
}

console.log(findBooks("A"));
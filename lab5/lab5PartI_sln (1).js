"use strict";
//Lab5 solutions
//There are many solutions for the particular problem. 
//Following solutions are one of them for giving you the idea. 


// 1. Define a function max() that takes two numbers as arguments and returns the largest of them.
// Use the if-then else construct available in Javascript.

function max(a, b) {
    if (a > b) return a;
    else return b;
}

function max(a, b) { return (a > b) ? a : b; }
function max(a, b) { return Math.max(a, b); }

// 2. Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
function maxOfThree(a, b, c) {
    if (a > b && a > c) return a;
    else if (b > a && b > c) return b;
    else if (c > a && c > b) return c;
}
function max(a, b, c) { return Math.max(a, b, c); }

// 3. Write a function isVowel() that takes a character (i.e. a string of length 1)
// and returns true if it is a vowel, false otherwise
function isVowel(chr) {
    if (chr.length != 1) {
        alert("give me a charachter");
        return;
    }
    if ("AEIOUaeiou".includes(chr)) return true;
    else false;
}

//4. Define a function sum() and a function multiply() that sums and multiplies (respectively)
//all the numbers in an input array of numbers.
//For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
//Note/Hint: Do these using Imperative programming approach (i.e. for…loop or while…loop)
function sum(arr) {
    let sum = 0;
    for (let e of arr) sum += e;
    return sum;
}
function multiply(arr) {
    let d = 1;
    for (let e of arr) d *= e;
    return d;
}
console.log(sum([1, 2, 3, 4]));
console.log(multiply([1, 2, 3, 4]));

function sumD(arr) {
    return arr.reduce((pre, cur) => pre + cur, 0);
}
function multiplyD(arr) {
    return arr.reduce((pre, cur) => pre * cur, 1);
}
console.log(sumD([1, 2, 3, 4]));
console.log(multiplyD([1, 2, 3, 4]));

//5. Define a function reverse() that computes the reversal of a string.
//For example, reverse("jag testar") should return the string "ratset gaj".
function reverse(str) {
    return str.split("").reverse().join("");
}
console.log(reverse("jag testar"));

//or
function reverse(str) {
    return str.split("").reduce((pre, cur) => cur + pre, "")
}
console.log(reverse("jag testar"));

//6. Write a function findLongestWord() that takes an array of words
//and returns the length of the longest one.
function findLongestWord(arr) {
    return arr.reduce((pre, cur) => pre.length < cur.length ? cur : pre, "");
}
console.log(findLongestWord(["Hello", "all", "example"]));

//7. Write a function filterLongWords() that takes an array of words and an integer i 
//and returns a new array containing only those words that were longer than i characters.
function filterLongWords(arr, i) {
    return arr.filter(e => e.length > i);
}
console.log(filterLongWords(["Hello", "all", "Example"], 3));

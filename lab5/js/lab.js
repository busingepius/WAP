/*
1.
Define a function max() that takes two numbers as arguments and returns the largest of them.
Use the if-then-else construct available in Javascript
*/

function max() {
    if (arguments[0] > arguments[1]) {
        return arguments[0];
    } else {
        return arguments[1]
    }
}

console.log(max(1, 2));

/*
2.
Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
 */

function maxOfThree() {
    if (arguments[0] > arguments[1] && arguments[0] > arguments[2]) {
        return arguments[0];
    } else if (arguments[1] > arguments[0] && arguments[1] > arguments[2]) {
        return arguments[1]
    } else {
        return arguments[2];
    }
}

console.log(maxOfThree(4, 5, 3));

/*
3.
Write a function isVowel() that takes a character (i.e. a string of length 1)
and returns true if it is a vowel, false otherwise.
 */

function isVowel(a) {
    if (a.match("^[aeiou]$")) {
        return true;
    } else {
        return false;
    }
}

console.log(isVowel("w"));

/*
4.
Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in the
given array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
 */

function sum(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum = sum + array[i];
    }
    return sum;
}

function multiply(array) {
    let multiply = 1;
    for (let i = 0; i < array.length; i++) {
        multiply = multiply * array[i];
    }
    return multiply;
}

console.log(sum([1, 2, 3, 4]));
console.log(multiply([1, 2, 3, 4]));

/*
5.
Define a function reverse(str) that computes the reversal of a string.
For example, reverse("jag testar") should return the string "ratset gaj".
 */

let s = "";
function reverse(string) {
    if(string === ""){
        return;
    }
    reverse(string.substring(1))
    s = s+string.charAt(0);
    return s;
}

console.log(reverse("jag testar"));

/*
6.
Write a function findLongestWordLength() that takes an array of words and returns the length of the longest
one.
 */

function findLongestWordLength(words) {
    let longestWordLength = -Infinity;
    for (let i = 0; i < words.length; i++) {
        if (longestWordLength < words[i].length) {
            longestWordLength = words[i].length;
        }
    }
    return longestWordLength;
}

console.log(findLongestWordLength(["atetrt", "ab", "abc"]));

/*
7.
Write a function filterLongWords() that takes an array of words and an integer i and returns a new array
containing only those words that were longer than i characters.
 */

function filterLongWords(words, int) {
    let newArray = [];
    let index = 0;
    for (let i = 0; i < words.length; i++) {
        if (words[i].length > int) {
            newArray[index++] = words[i];
        }
    }
    return newArray;
}

console.log(filterLongWords(["atetrt", "ab", "abc"], 2));

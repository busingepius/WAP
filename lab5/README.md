#### JavaScript Intro lesson review questions:

1.	What are the 8 JavaScript types?
2.	What does it mean to be ‘loosely typed’?
3.	What is the difference of 'var' and 'let' and ‘const’?
4.	What is 1 + 2 + "2"?  what is "2" + 1 + 2?    what is  1 + 2 + 2?
5.	When should const be used instead of let?
6.	What is the difference of == and ===?  Which should be used and why?
7.	How can you convert from a string to an int or float?
8.	What values are falsey?  What values are truthy?
9.	What is the value of !!0 and why?
10.	What is the difference of null and undefined?
11.	What is the difference of a variable with value undefined and a reference error?
12.	What operations will operate an array like a stack?  like a queue?
13.	What is a pure function?
14.	How does the arrow function notation relate to an anonymous function expression?
15.	What are map, filter, reduce ?  Why are they recommended over for loops?
16.	What is the difference of a function declaration and function expression?
17.	What is overloading and how does it work in Java and JavaScript?
18.	What is the argument object and how does it relate to the rest parameter?
19. What is the difference of array.forEach and array.map?
20. Could you use array.forEach to filter an array instead of array.filter?  Should you?



	Write a square (i.e., x * x) function as a function declaration, function expression, and arrow function.
	Use the square function with arrow functions to map an array to squares. 
	Use the square function with arrow functions to reduce an array of numbers to find the sum of squares.


	OVERLOADING, FUNCTION PARAMETERS, ARROW FUNCTIONS, MAP/FILTER/REDUCE and LOOPING

#### part 2 lab
```
1. Implement code for the following JavaScript functions, and be sure to use "use strict";
    a) Write a function named, computeSumOfSquares, that takes as input, an array of numbers and calculates
       and returns the sum of the squares of each number in the input array. E.g. computeSumOfSquares([1,2,3])
       should be computed as 12 + 22 +32 = 14. Note: Write your Javascript code without using Imperative
       programming. i.e. Do NOT use any explicit looping construct; instead use functional programming
       style/approach.
       
    b) Write a function named, printOddNumbersOnly, that takes as input, an array of numbers and it finds and
       prints only the numbers which are odd.
       
    c) Write a function named printFibo, that takes as input, a given length, n, and any two starting numbers a and
       b, and it prints-out the Fibonacci sequence, e.g. (0, 1, 1, 2, 3, 5, 8, 13, 21, 34,…) of the given length,
       beginning with a and b. (e.g. printFibo(n=1, a=0, b=1), prints-out: "0", as output; printFibo(n=2, a=0, b=1),
       prints-out: "0, 1", as output; printFibo(n=3, a=0, b=1), prints-out: "0, 1, 1", as output; printFibo(n=6, a=0,
       b=1), prints-out: "0, 1, 1, 2, 3, 5", as output; and printFibo(n=10, a=0, b=1), prints-out: "0, 1, 1, 2, 3, 5, 8, 13,
       21, 34", as output).
```

```html
2. Destructuring assignment:
We have an object:

let user = {
name: "John",
years: 30
};

Write the destructuring assignment that reads:
name property into the variable name.
years property into the variable age.
isAdmin property into the variable isAdmin (false, if no such property)
Here’s an example of the values after your assignment:

    let user = { name: "John", years: 30 };
// your code to the left side:
// ... = user
     alert( name ); // John
     alert( age ); // 30
     alert( isAdmin ); // false
```

```html
3. let libraryBooks = [
{ title: "The Road Ahead", author: "Bill Gates", libraryID: 1235 },
{ title: "Walter Isaacson", author: "Steve Jobs", libraryID: 4268 },
{ title: "The Road Ahead", author: "Bill Gates", libraryID: 4268 },
{ title: "Mockingjay: The Final Book of The Hunger Games", author: "Suzanne Collins", libraryID: 3257 }
];
Write the following JavaScript functions:
- addBook, which will take title, author, and libraryID as inputs. It will create a new book object and add it to the
   library. addBook should return the newly created book.
- getTitles, which will return all the book titles in libraryBooks in an alphabetically ordered array.
- findBooks, which will take the keyword of title as input. It will find books which contain the given keyword in
the title and return books alphabetically ordered by the author.
```
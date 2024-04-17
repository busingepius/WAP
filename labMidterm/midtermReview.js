
// const colors = ["red", "yellow", "blue"];
// colors[5] = "purple";
// colors.forEach((item, index) => {
//     console.log(`${index}: ${item}`);
// });
// // Output:
// // 0: red
// // 1: yellow
// // 2: blue
// // 5: purple
//
// console.log(colors.reverse()); // ['purple', <2 empty items>, 'blue', 'yellow', 'red']

//------------------------------------------------
// Q1 MULTIPLE CHOISE
// If you pass the less number of arguments
// than the expected number of parameters to a function,
// the missing parameters get assigned the values;
// function multipleChoice(a,b,c){
//     console.log(c);
// }
// multipleChoice(1,2);

/*
short answers
Q1
const numbers = [ 1,5,18,2,77,108]; print the odd numbers.
You are not allowed to use for, while, do...while, for..of, for...in loops.
You may use forEach method.
 */

// const numbers = [1, 5, 18, 2, 77, 108];
// numbers.forEach(function (number) { //1,5,77
//     if (number % 2 !== 0) {
//         console.log(number);
//     }
// });

// OR
// numbers.filter((number)=>number % 2 !== 0 ).forEach((a)=>console.log(a))

/* Q2
create a function using function declaration named sum with one parameter of Array type,
the returned result is the sum of all elements which are greater than.
You are not allowed to use for, while, do...while,for..of,for..in loops.
You may use forEach method
sum([10,20,50,30,8]);
 */
// function sum(array){
//     let sum = 0;
//     array.forEach(function(item){
//         if(item > 20 ){
//             sum+=item;
//         }
//     })
//     return sum;
// }
// console.log(sum([10,20,50,30,8]));

// OR
// function sum(array){
//     return array.filter((item)=>item>20).reduce((a,b)=>a+b,0);
// }
// console.log(sum([10,20,50,30,8]));

/*
create function using function expression named fetNewArray with one parameter pf String Array,
return a new array which contains all string, length is greater than and equal to 5, and contains letter 'a'.
You are not allowed to use for, while, do..while, for..of, for..in loops
getNewArray(["Hello","Wonderful","Happy","People","Have a great day"]);
 */

// const getNewArray = function (a) {
//     let newArray = [];
//     let index = 0;
//     a.forEach(function (item) {
//         if (item.length >= 5 && item.includes("a")) {
//             newArray[index++] = item;
//         }
//     });
//     return newArray;
// }

// OR
// const getNewArray = function (a) {
//     return a.filter((item) => item.length >= 5)
//         .filter((item) => item.includes("a"));
// }
// console.log(getNewArray(["Hello", "Wonderful", "Happy", "People", "Have a great day"]));

/*
Q4a (non-strict mode)
What will be the output
var a = 2;
let b = 3;
function outer(){
let c = 5;
var d = 7;
return function inner(){
b=8;
let c = 9;
console.log(a);
console.log(b);
console.log(c);
console.log(d);
    }
}
outer()() // 2 8 9 7
 */
/*
Q4b
function log(e){
    console.log(e);
}
let arr = [1,2,3];
console.log("start");
setTimeout(()=>arr.forEach(log));
console.log("end");
Ans: start end 1 2 3
 */

/*
Q4c
function log(e){
    console.log(e);
}
let arr = [1,2,3];
console.log("start");
arr.forEach(log);
console.log("end");
Ans: start 1 2 3 end
 */

/*
Q6
Write a regular expression that matches a string containing a date in the format mm/dd/yyyy
^(\d\d\/\d\d\/\d\d\d\d)$
 */

/*
Q7
For the given students array below,
compute the average grade of all students who took cs303 course
which returns an object which key is students' names, value is the average
{
    "Quincy":93.5,
    "Sam": 86.5,
    "Katie":71.5
}
You are not allowed to use for, while, do...while, for..of,for..in, forEach method.
const students = [
    {name:"Quincy",grades:[99,88],courses:["cs301","cs303"]},
    {name:"Jason",grades:[29,38],courses:["cs201","cs203"]},
    {name:"Alexis",grades:[79,78],courses:["cs105","cs211"]},
    {name:"Sam",grades:[91,82],courses:["cs445","cs303"]},
    {name:"Katie",grades:[66,77],courses:["cs303","cs477"]},
];
let computeAverageGrade = students.filter(
    (student)=>student.courses.includes("cs303")).reduce((a,b)=> {
    let avg = b.grades.reduce((sum, e, cs) => sum + e, 0) / b.grades.length;
        a[b.name] = avg;
        return a; // this is called after all elements have been added hence always return it alone
},{});

console.log(computeAverageGrade);
 */

/*
Q11
When you run the code snippet below, you will observe the following output in the console
undefined: John
undefined: Pete
undefined: Alice
Your task is to correct the code using one of four different techniques
i.e., (bind, call, apply, and self pattern) to achieve the desired output:
Below is the original code:

let group = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],
    showList: function () {

        // using bind
        this.students.forEach(function (student,index, array) {
            console.log(this.title + " : " + student+" : "+index+" : "+array[index]);
        }.bind(this));

        // // using apply
        // this.students.forEach(function (student,index, array) {
        //     console.log(this.title + " : " + student+" : "+index+" : "+array[index]);
        // },this);

        // // using call
        // this.students.forEach(function (student, index, array) {
        //     console.log(this.title + " : " + student + " : " + index + " : " + array[index]);
        // }, this);

        // // using self
        // let self = this;
        // this.students.forEach(function (student) {
        //     console.log(self.title + " : " + student);
        // });
    }
};
group.showList();
 */

// const array = [1, 2, 3, 4, 5];
// ---------------To add/remove elements:-----------------------
// push(...items) – adds items to the end,
// console.log(array.push(6,7));
// console.log(array)
// pop() – extracts an item from the end
// console.log(array.pop());
// console.log(array)
// shift() – extracts an item from the beginning,
// console.log(array.shift())
// console.log(array)
// unshift(...items) – adds items to the beginning// returns the length of the array
// console.log(array.unshift(0));
// console.log(array);
// splice(pos, deleteCount, ...items) – at index pos delete deleteCount elements and insert items. // returns the deleted items
// console.log(array.splice(1,2,...[8,9]))
// console.log(array)
// slice(start, end) – creates a new array, copies elements from position start till end (not inclusive) into it
// console.log(array.slice(1,2));
// console.log(array)
// concat(...items) – returns a new array: copies all members of the current one and adds items to it.
// If any of items is an array, then its elements are taken // returns the new array
// console.log(array.concat(6,7,8,[9,10]));
// ----------------To search among elements------------------------------------
// indexOf/lastIndexOf(item, pos) – look for item starting from position pos, return the index or -1 if not found.
// console.log(array.indexOf(1));
// console.log(array.lastIndexOf(3))
// includes(value) – returns true if the array has value, otherwise false.
// console.log(array.includes(3))
// find/filter(func) – filter elements through the function, return first/all values that make it return true
// console.log(array.find((item)=>item % 2 === 0)); // returns first true
// console.log(array.filter((item)=>item % 2 === 0)); // returns all true as array
// ----------------- To iterate over elements: ------------------------------
// forEach(func) – calls func for every element, does not return anything.
// array.forEach(function(item, index, a) {
//     console.log("item: " + item + " index: " + index + " array: " +a)
// },this);
// ------------------- To transform the array --------------------------------------------
// map(func) – creates a new array from results of calling func for every element
// console.log(array.map((item, index, a) => "item: " + item + " index: " + index + " array: "+ a,this));
// sort(func) – sorts the array in-place, then returns it.
// console.log(array.sort((a,b)=>b-a));
// reverse() – reverses the array in-place, then returns it.
// console.log(array.reverse());
// split/join – convert a string to array and back.
// console.log("array".split("r"))
// console.log()

// // creating objects
// const objRef = {"field Name":1};
// objRef.add = 2;
// objRef["try"] = 22;
// objRef["more data"] = 3;
// delete objRef.try;
// console.log(objRef)
// let pt1 = {x:1 , y:2};
// let pt2 = {x:1 , y:2}; // two independent objects
// console.log(pt1 == pt2); // ??
// console.log(pt1 === pt2) // ??

// function a() {
//     console.log(x); // consult Global for x and print 20 from Global
// }
// function b() {
//     const x = 10;
//     a(); // consult Global for a
// }
// const x = 20;
// b();

// function check(i){console.log(i)}
// let timeoutID = setTimeout(check,8000,0); // run once
// let intervalID = setInterval(check,2000,0); // continuous run
// clearTimeout(timeoutID);
// clearInterval(intervalID);

// let user = {
//     firstName: "John",
//     sayHi() {
//         console.log(`Hello, ${this.firstName}!`);
//     }
// };
// user.sayHi(); //works
// setTimeout(user.sayHi, 2000); //problem! - this refers to window object
// setTimeout(()=>user.sayHi(), 2000);
// setTimeout(user.sayHi.bind(user), 2000); //works
// setTimeout(() => user.sayHi.call(user), 2000); //works
// setTimeout(() => user.sayHi.apply(user), 2000); //works

// const user = {
//     salute: "",
//     greet: function() {
//         this.salute = "Hello";
//         console.log(this.salute); //Hello
//         const setFrench = function(newSalute) { //inner function
//             this.salute = newSalute;
//         };
//         setFrench("Bonjour");
//         // setFrench.bind(this,"Bonjour")();
//         // setFrench.call(this,"Bonjour");
//         // setFrench.apply(this,["Bonjour"]);
//         console.log(this.salute); //Bonjour??
//     }
// };
// user.greet(); //Hello Hello ??

// "use strict";
// const x = { a: 1, b: 2, add() { return this.a + this.b } }
// console.log(x.add());
// const y = { a: 1, b: 2, add: () => { return this.a + this.b } }
// console.log(y.add());

// let animal = {
//     eats: true
// };
// let rabbit = {
//     jumps: true
// };
// Object.setPrototypeOf(rabbit, animal);
// rabbit. proto = animal;
// // proto is a ‘sneaky’ (deprecated) way to access [[Prototype]]
// console.log(rabbit.eats)

// let animal = {
//     eats: true,
//     walk: function() {
//         console.log("Animal walk"); }
// };
// let rabbit = Object.create(animal);
// rabbit.jumps = true;
// let longEar = Object.create(rabbit);
// longEar.earLength = 10;
// longEar.walk();

let obj = {
    0: "Hello",
    1: "world!",
    length: 2,
};
// obj.join = Array.prototype.join;
Object.setPrototypeOf(obj, Array.prototype)
console.log( obj.join(',') ); // Hello,world!
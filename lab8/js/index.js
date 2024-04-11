// function Person(f, l) {
//     this.fname = f;
//     this.lname = l;
// }
//
// Person.prototype.display = function () {
//     return `${this.fname} ${this.lname}`
// }
//
// Person.compare = function (p1, p2) {
//     if (p1.fname > p2.fname) return 1;
//     if (p1.fname < p2.fname) return -1;
//     else return 0;
// }
//
// let person1 = new Person("Smith", "Tom");
// let person2 = new Person("Anna", "Anna");
//
// function Employee( f, l,s) {
//     Person.call(this, f, l);
//     this.salary = s;
//     function display () {
//         return `${this.fname} ${this.lname} ${this.salary}`
//     }
// }
//
// // Employee.prototype.display = function () {
// //     return `${this.fname} ${this.lname} ${this.salary}`
// // }
//
// Employee.compare = function (e1, e2) {
//     return e1.salary - e2.salary;
// }
//
// Object.setPrototypeOf(Person, Employee);
// Object.setPrototypeOf(Person.prototype, Employee.prototype);
//
// let emp1 = new Employee("John", "Doe", 78000);
// // emp1.display();
//
// let emp2 = new Employee("Anna", "Smith", 150000);
// let emp3 = new Employee("Tom", "Jerry", 98000);
//
// let arr = [emp1, emp2, emp3];
// arr.sort(Employee.compare);
// console.log(arr);
// console.log(person1.display())
//
// let a = Employee.compare( emp1, emp2);
// console.log(a)
//
// // console.log(emp2 instanceof Person);
// // console.log(emp2 instanceof Employee);
// // console.log(emp2 instanceof Object);

// let animal = {
//     eats: true,
//     walk: function() { console.log("Animal walk"); }
// };
// let rabbit = Object.create(animal);
// rabbit.jumps = true;
// let longEar = Object.create(rabbit);
// longEar.earLength = 10;
// longEar.walk();

// // animal has methods
// let animal = {
//     walk: function() {
//         if (!this.isSleeping) {
//             console.log(`I walk`);
//         }
//     },
//     sleep: function() {
//         this.isSleeping = true;
//     }
// };
// let rabbit = Object.create(animal);
// rabbit.name = "White Rabbit";
// // modifies rabbit.isSleeping
// rabbit.sleep();
// console.log(rabbit.isSleeping);
// console.log(animal.isSleeping);
//
// function User(name) {
// // this = {}; (implicitly)
// // add properties to this
//     this.name = name;
//     this.isAdmin = false;
// // return this; (implicitly)
// }
// new User('John');

// function Rabbit(name) {this.name = name;}
// let animal = { eats:true };
// Rabbit.prototype = animal;
// let rabbit = new Rabbit("White rabbit");
// console.log(rabbit.constructor === Rabbit); // false


let obj = {
    0: "Hello",
    1: "world!",
    length: 2,
};
// obj.join = Array.prototype.join; // same
Object.setPrototypeOf(obj,Array.prototype) // same
console.log( obj.join(',') ); // Hello,world!
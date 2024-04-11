// QUESTION ONE
let student = {
    firstName: "John",
    lastName: "Smilga",
    grades: [],
    insertGrade: function(newGrade){
        this.grades.push(newGrade);
    },
    computeAverageGrade: function (){
        return this.grades.reduce((a, b) => a + b)/this.grades.length;
    }
}

student.insertGrade(1)
student.insertGrade(2)
student.insertGrade(3)
student.insertGrade(4)
student.insertGrade(5)
console.log(student.computeAverageGrade());

function Student(f, l, g) {
    this.firstName = f;
    this.lastName = l;
    this.grades = g;
}

let student1 = new Student("a", "", [])
let student2 = new Student("b", "", [])
let student3 = new Student("c", "", [])

Student.prototype.insertGrade = function (newGrade) {
    return this.grades.push(newGrade);
}
Student.prototype.computeAverageGrade = function () {
    return this.grades.reduce((a, b) => a + b) / this.grades.length;
}

student1.insertGrade(4)
student1.insertGrade(5)
student2.insertGrade(1)
student2.insertGrade(2)
console.log(student1.computeAverageGrade());
console.log(student2.computeAverageGrade());


// QUESTION THREE
let arr = [student2, student1, student3];
Array.prototype.mySort = function () {
    return this.sort(function (a, b) {
        if ((a.lastName + a.firstName + a.grades.length) > (b.lastName + b.firstName + a.grades.length)) return 1;
        if ((a.lastName + a.firstName + a.grades.length) < (b.lastName + b.firstName + a.grades.length)) return -1;
        else return 0;
    })
}

// Object.setPrototypeOf(arr, Array.prototype);
console.log(arr.mySort())

function Animal(n, s) {
    this.name = n;
    this.speed = s;
}

Animal.prototype.run = function (speed) {
    return this.speed += speed;
}

Animal.compareBySpeed = function (a1, a2) {
    return a1.speed - a2.speed;
}

function Rabbit(n, s) {
    Animal.call(this, n, s);
}

Rabbit.prototype.run = function () {
    return `${this.name} hides`
}

let animal = new Animal("animal", 120)
let rabbit = new Rabbit("rabbit", 230)

Object.setPrototypeOf(Rabbit, Animal)
Object.setPrototypeOf(Rabbit.prototype, Animal.prototype)
console.log(rabbit.run())

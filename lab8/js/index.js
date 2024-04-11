function Person(f, l) {
    this.fname = f;
    this.lname = l;
}

Person.prototype.display = function () {
    return `${this.fname} ${this.lname}`
}

Person.compare = function (p1, p2) {
    if (p1.fname > p2.fname) return 1;
    if (p1.fname < p2.fname) return -1;
    else return 0;
}

let person1 = new Person("Smith", "Tom");
let person2 = new Person("Anna", "Anna");

function Employee( f, l,s) {
    Person.call(this, f, l);
    this.salary = s;
    function display () {
        return `${this.fname} ${this.lname} ${this.salary}`
    }
}

// Employee.prototype.display = function () {
//     return `${this.fname} ${this.lname} ${this.salary}`
// }

Employee.compare = function (e1, e2) {
    return e1.salary - e2.salary;
}

Object.setPrototypeOf(Person, Employee);
Object.setPrototypeOf(Person.prototype, Employee.prototype);

let emp1 = new Employee("John", "Doe", 78000);
// emp1.display();

let emp2 = new Employee("Anna", "Smith", 150000);
let emp3 = new Employee("Tom", "Jerry", 98000);

let arr = [emp1, emp2, emp3];
arr.sort(Employee.compare);
console.log(arr);
console.log(person1.display())

let a = Employee.compare( emp1, emp2);
console.log(a)

// console.log(emp2 instanceof Person);
// console.log(emp2 instanceof Employee);
// console.log(emp2 instanceof Object);
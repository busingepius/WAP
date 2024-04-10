// "use strict"
// Question 3
// let group = {
//     title: "Our Group",
//     students: ["John", "Pete", "Alice"],
//     showList: function() {
//         this.students.forEach(function(student) {
//         console.log()
//             console.log(this.title + ": " + student
//             );
//         }.bind(this));
//     }
// };
// group.showList();

// PERSONAL
// let user = {
//     firstName: "John",
//     sayHi() {
//         console.log(this)
//         console.log(`Hello, ${this.firstName}!`);
//     }
// };
// // user.sayHi(); //works
// setTimeout(user.sayHi, 2000); //problem!

// QUESTION TWO
// function askPassword(ok, fail) {
//     let password = prompt("Password?", "");
//     if (password == "rockstar") ok();
//     else fail();
// }
//
// let user = {
//     name: "John",
//     loginOk() {
//         alert(`${this.name} logged in`)
//     },
//     loginFail() {
//         alert(`${this.name} failed to login in`);
//     },
// };

function askPassword(ok, fail) {
    let password = "Password?" + "";
    if (password == "rockstar") ok();
    else fail();
}

let user = {
    name: "John",
    loginOk() {
        console.log(`${this.name} logged in`)
    },
    loginFail() {
        console.log(`${this.name} failed to login in`);
    },
};

// askPassword(user.loginOk.bind(user), user.loginFail.bind(user));
askPassword(() => user.loginOk.call(user,), () => user.loginFail.call(user,));
// askPassword(()=>user.loginOk.apply(user,[]), ()=>user.loginFail.apply(user,[]));

"use strict"
// Question THREE
let group = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],
    showList: function() {
        this.students.forEach(function(student) {
        console.log()
            console.log(this.title + ": " + student
            );
        }.bind(this));
    }
};
group.showList();


// QUESTION TWO
function askPassword(ok, fail) {
    let password = prompt("Password?", "");
    if (password == "rockstar") ok();
    else fail();
}

let user = {
    name: "John",
    loginOk() {
        alert(`${this.name} logged in`)
    },
    loginFail() {
        alert(`${this.name} failed to login in`);
    },
};
askPassword(function () {
    return user.loginOk(); // immediately invoked to pass context
}, function () {
    return user.loginFail(); // immediately invoked to pass context
});
askPassword(user.loginOk.bind(user), user.loginFail.bind(user));
askPassword(() => user.loginOk.call(user,), () => user.loginFail.call(user,));// immediately invoked
askPassword(()=>user.loginOk.apply(user,[]), ()=>user.loginFail.apply(user,[])); // immediately invoked


// QUESTION ONE

/* (a). CONSOLE LOG
Greetings,  John
hi undefined
hello Smith
 */

/* (b) */

let str = "Greetings, ";
let user1 = {
    firstName: "John",
    lastname: "Smith",
    display: function () {
        console.log(str, this.firstName);
        show("hi");
        // show.call(this,"hi");// correct way
    }
};
user1.display();
function show(msg) {
    console.log(msg + " " + this.lastname);
}
show.call(user1, "hello");
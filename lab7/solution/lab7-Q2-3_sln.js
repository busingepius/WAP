//Question 2: Fix using wrapper, bind, call, apply.
function askPassword(ok, fail) {
    let password = prompt("Password?", '');
    if (password == "rockstar") ok();
    else fail();
}

let user = {
    name: 'John',
    loginOk() {
        console.log(`${this.name} logged in`);
    },
    loginFail() {
        console.log(`${this.name} failed to log in`);
    },
};


// askPassword(user.loginOk.bind(user), user.loginFail.bind(user));
// askPassword(() => user.loginOk.call(user), () => user.loginFail.call(user));
// askPassword(() => user.loginOk.apply(user), () => user.loginFail.apply(user));
// askPassword(() => user.loginOk(), () => user.loginFail());

// Question 3: Fix the code below using bind
let group = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],

    showList: function () {
        this.students.forEach(function (student) {
            console.log(this.title + ": " + student);
        });
    }
};
// group.showList();

// Solutions:
//using bind
let groupSln = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],

    showList: function () {
        this.students.forEach(function (student) {
            console.log("bind solution: " + this.title + ": " + student);
        }.bind(this));
    }
};
groupSln.showList();

//self pattern
let groupSlnSelf = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],

    showList: function () {
        let self = this;
        this.students.forEach(function (student) {
            console.log("self pattern solution: " + self.title + ": " + student);
        }.bind(this));
    }
};
groupSlnSelf.showList();

//arrow function
let groupSlnArrowF = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],

    showList: function () {
        this.students.forEach((student) => {
            console.log("arrow function: " + this.title + ": " + student);
        });
    }
};
groupSlnArrowF.showList();

//call 
let groupSlnCall = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],

    showList: function () {
        function log(student) {
            console.log("call solution: " + this.title + ": " + student);
        }

        this.students.forEach((student) => {
            log.call(this, student)
        });
    }
};
groupSlnCall.showList();
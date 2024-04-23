const students = require("../mockData/mockData")

class Student {
    constructor(id, name, program) {
        this.id = id;
        this.name = name;
        this.program = program;
    };

    static getAllStudents() {
        console.log(students)
        return [...students];
    }

    static getStudentById(id) {
        return students.find((student) => student.id === Number(id));
    }

    static deleteStudentById = (id) => {
        const index = students.findIndex((student) => student.id === Number(id));
        let deletedStudent;
        if (index !== -1) {
            deletedStudent = students.splice(index, 1);
        }
        return deletedStudent;
    }
    createStudent = () => {
        const student = students.find((student) => student.id === this.id);
        if (!student) {
            students.push(this);
        }
        return student;
    }

    static updateStudentById(id, data) {
        const index = students.findIndex((student) => student.id === Number(id))
        let updatedStudent;
        if (index !== -1) {
            students.map((student) => {
                if (student.id === Number(id)) {
                    for (let item in data) {
                        if (data[`${item}`]) {
                            student[`${item}`] = data[`${item}`];
                        }
                    }
                    updatedStudent = student;
                }
                return student;
            });
        }
        return updatedStudent;
    }
}

module.exports = Student;
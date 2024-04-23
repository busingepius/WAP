let students = [
    { id: 112589, name: "Anna Smith", program: "Compro" },
    { id: 615879, name: "Tom Smith", program: "Compro" },
    { id: 617575, name: "Kerry Smith", program: "MBA" },
];

class Student {
    constructor(id, n, p) {
        this.name = n
        this.id = id;
        this.program = p;
    }
    static getAllStudents() {
        return students.map(e => e); //shallow copy, if we will see the deep copy, during the practice time
    }
    static getStudentById(id) {
        return students.find(s => s.id == id)
    }
    static deleteById(id) {
        let index = students.findIndex(s => s.id == id)
        let deletedStudent;
        if (index != -1) {
            deletedStudent = students[index];
            deletedStudent = students.splice(index, 1)[0]
        }
        return deletedStudent;
    }
    create() {
        let student = students.find(s => s.id == this.id);
        if (!student) {
            students.push(this);
        }
        return student;
    }

    //implement updateById, filterBy, and sortBy methods 
    // you may decide the parameters 
    // static or instance

}

module.exports = Student;
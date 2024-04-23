const Student = require("../model/student");

let studentController = {
    getStudentByID: (req, res) => {
        let id = req.params.id;
        if (id) {
            let student = Student.getStudentById(id);
            if (student) {
                res.json(200, student);
            }
            else {
                res.json(404, { message: "Not found" });
            }
        } else {
            res.json({ message: "Provide ID" })
        }

    },
    getAllStudents: (req, res) => {
        if (Object.keys(req.query).length != 0) {
            res.json(200, "pls implement");
            // implement 
            // consider filter and sort
            // should not sort original array 



        }
        else res.json(200, Student.getAllStudents());
    },
    deleteStudentById: (req, res) => {
        let id = req.params.id;
        if (id) {
            let student = Student.deleteById(id);
            if (student) {
                res.json(200, { message: "deleted a student with id" + student.id });
            }
            else {
                res.json(404, { message: "not found student" });
            }
        }
        else {
            res.json({ message: "Provide ID" })
        }

    },
    createStudent: (req, res) => {
        console.log(req.body);
        let { id, name, program } = req.body;
        if (id && name && program) {
            let student = new Student(id, name, program);
            let stu = student.create();
            if (stu) {
                res.json({ message: "student is already registered" });
            }
            else {
                res.json(200, { message: "student is just registered" });
            }
        }
        else {
            res.json({ message: "Pleaase provide all information" });
        }
    },
    updateStudent: (req, res) => {
        //implement
    }
}

module.exports = studentController;
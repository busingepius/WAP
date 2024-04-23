const Student = require("../models/student");
const {CustomAPIError} = require("../errors/customAPIError");

function getAllStudents(req, res, next) {
    const {filters, sort} = req.query;
    let students = Student.getAllStudents();
    if (filters) {
        students = students.filter((student) => student["name"].includes(filters));
    }
    if (sort) {
        students.sort((a, b) => a[`${sort}`].localeCompare(b[`${sort}`]));
    }
    res.status(200).json({"data": students});
}

function getStudentById(req, res, next) {
    const student = Student.getStudentById(Number(req.params.id));
    if (student)
        return res.status(200).json({"data": student});
    throw new  CustomAPIError(`No id ${req.params.id}`, 404);
}

function deleteStudentById(req, res, next) {
    const student = Student.deleteStudentById(Number(req.params.id));
    if (student) {
        res.status(200).json({"data": student});
    } else {
        throw new CustomAPIError(`No ID ${req.params.id}`, 404);
    }

}

function createStudent(req, res, next) {
    const {id, name, program} = req.body;
    const student = new Student(Number(id), name, program);
    student.createStudent()
    res.status(200).json({"data": student});
}

function updateStudentById(req, res, next) {
    const {name, program} = req.body;
    const student = Student.updateStudentById(req.params.id, {name, program})
    if (student)
        res.status(200).json({"data": student});
    throw new CustomAPIError(`No ${req.params.id}`, 404);
}

module.exports = {getAllStudents, getStudentById, createStudent, deleteStudentById, updateStudentById};
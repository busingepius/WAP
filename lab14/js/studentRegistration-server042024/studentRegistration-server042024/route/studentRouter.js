const express = require("express");
const studentController = require("../controller/studentController");
const router = express.Router();


router.get('/:id', studentController.getStudentByID);
router.get('/', studentController.getAllStudents);
router.delete('/:id', studentController.deleteStudentById);
router.post('/', studentController.createStudent);
router.put('/', studentController.updateStudent);

module.exports = router;
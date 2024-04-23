const express = require("express");
const router = express.Router();
const {getAllStudents,updateStudentById,deleteStudentById,getStudentById,createStudent} = require("../controllers/student")

router.route("/").get(getAllStudents).post(createStudent);
router.route("/:id").get(getStudentById).delete(deleteStudentById).put(updateStudentById);
module.exports = router;
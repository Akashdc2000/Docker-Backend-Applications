const express=require('express')
const router = new express.Router();
const student=require('../controllers/student_api_methods')

router.get('/', (request, response) => {
    response.send("<h1>Welcome all to students System</h1>")
})


router.get('/getall', student.getAllStudents);
router.get('/:_id', student.getStudentById);
router.post('/addnew', student.addNewstudent);
router.put('/update/:_id', student.updateStudent);
router.delete('/delete/:_id', student.deleteStudent);


module.exports = router;

const express = require('express')
const teacher = require('../controllers/teachers_api_methods')
const router = new express.Router();

router.get('/', (request, response) => {
    response.send("<h1>Welcome ALL to Teachers System</h1>")
})


router.get('/getall',teacher.getAllTeachers)
router.post("/addnew",teacher.addNewTeacher)
router.get('/:tid',teacher.getTeacherById)
router.put('/update/:tid',teacher.updateTeacherById)
router.delete('/delete/:tid',teacher.deleteTeacherById)


module.exports = router;

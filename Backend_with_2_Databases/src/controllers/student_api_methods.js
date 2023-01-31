//Add new student to DB
const MongoClient = require('mongodb').MongoClient
var ObjectId = require('mongodb').ObjectId;
let mongodatabase;

MongoClient.connect("mongodb://mongo:27017", { useNewUrlParser: true }, (error, result) => {
    if (error)
        throw error
    else {
        console.log("Database Connected...")
    }
    mongodatabase = result.db('students')
})

const addNewstudent = (request, response) => {
    let stud = {
        name: request.body.name,
        rollno: parseInt(request.body.rollno),
        gender: request.body.gender,
        marks: parseFloat(request.body.marks)
    }
    mongodatabase.collection('student').insertOne(stud, (error, result) => {
        if (error) response.status(505).send(error)
        response.send("Student Added Succesfully..")
    })
}


const getAllStudents = (request, response) => {
    mongodatabase.collection('student').find({}).toArray((error, result) => {
        if (error)
            throw error
        else if (result.length <= 0)
            response.send("No records Founds..")
        else
            response.send(result)
    })
}

const getStudentById = (request, response) => {
    mongodatabase.collection('student').find({ _id: ObjectId(request.params._id) }).toArray((error, result) => {
        if (error)
            throw error

        if (result.length > 0)
            response.send(result)
        else
            response.send("No User Record Found..")
    })
}

const updateStudent = (request, response) => {

    let stud = {
        name: request.body.name,
        rollno: parseInt(request.body.rollno),
        gender: request.body.gender,
        marks: parseFloat(request.body.marks)
    }
    let dataset = {
        $set: stud
    }
    mongodatabase.collection('student').updateOne({ _id: ObjectId(request.params._id) }, dataset, (error, result) => {
        if (error) response.status(500).send(error)
        if (result.modifiedCount > 0)
            response.send("Data Updated successfully...")
        else
            response.send("No records found..")
    })


}

const deleteStudent = (request, response) => {
    mongodatabase.collection('student').deleteOne({ _id: ObjectId(request.params._id) }, (error, result) => {
        if (error)
            response.status(404).send(error)
        else if (result.deletedCount > 0)
            response.send("Data Deleted Successfully..")
        else
            response.send("Student not found with given ID")
    })
}

module.exports = {
    addNewstudent, getAllStudents, updateStudent, deleteStudent, getStudentById
}
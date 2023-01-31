const express = require('express')
const dotenv = require('dotenv')

dotenv.config()

const app = express()
app.use(express.json())

const student = require('./src/routers/student')
const teacher = require('./src/routers/teacher')


app.use('/student', student)
app.use('/teacher', teacher)



app.get("/", (req, res) => {
    res.send("Hello All Welcome to my First 2 Databases Project...")
})

app.listen(2222, (error) => {
    if (error)
        throw error
    else
        console.log("Server Running...\nServer Running at localhost:2222")

})

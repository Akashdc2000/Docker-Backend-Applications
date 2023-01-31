const express = require('express')
const dotenv=require('dotenv')
dotenv.config()

const employees=require('./routes/employees')
const teachers=require('./routes/teachers')
const app=express()

app.use(express.json())

app.use('/employees',employees);
app.use('/teachers',teachers);

app.listen(7777,()=>{
    console.log("Connection Successfully Done...\nServer Running at localhost:7777")
})

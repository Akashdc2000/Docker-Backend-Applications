const express=require('express')

const app=express()

app.get('/',(request,response)=>{
    response.send("<h1>Hello From Server</h1>");
})

app.listen(7777,()=>{
    console.log("Connection Successfully Done....\nServer Running at localhost:7777");
})
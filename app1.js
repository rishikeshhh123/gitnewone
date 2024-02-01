//const http=require('http');
const express=require('express');
const app=express();
app.use((req,res,next)=>{
    console.log("hello")
    next();
})
app.use((req,res,next)=>{
    console.log("hello2")
    res.send("<h1>welcome </h1>")
})
//const server=http.createServer(app);
app.listen(3001);
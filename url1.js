const path=require('path');
const express=require('express')
const bodyParser=require('body-parser')
const app=express();

const adminfile=require('./group-chat/chatapp')
const shopfile=require('./shop')
app.use(bodyParser.urlencoded({extended:false}))
app.use('/chatapp',adminfile)
app.use('/shop',shopfile)
app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname,'view','404.html'))
});

app.listen(4004)
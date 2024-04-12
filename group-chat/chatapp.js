const path=require('path')
const express=require('express');
const rootdir=require('../util/path')
const router=express.Router();
router.use(express.urlencoded({ extended: false }));

router.get('/login', (req, res, next) => {
    res.sendFile(path.join(rootdir,'view','new-product.html'));
});
router.post('/',(req,res,next)=>{
    console.log(req.body)
     res.redirect('/');
//fs.writeFile("username.txt",`${req.body.username}:${req.body.message}`,{flag:'a'} ,(err)=>err? console.log(err):res.redirect('/'))

})

    
module.exports=router;
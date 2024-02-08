const path=require('path');
const express = require('express');
const rootdir = require(path.join(__dirname, '..', 'util', 'path')); 

const router = express.Router();

router.get('/', (req, res, next) => {
    res.sendFile(path.join(rootdir,'view','shop.html'))
});
module.exports=router;
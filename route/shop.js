const express=require('express');
const router=express.Router();
router.use(express.urlencoded({ extended: false }));
router.get('/add-product', (req, res, next) => {
   // res.send('<h1>welcome everyone !</h1>');
   res.sendFile(path.join(__dirname, '../', 'view', 'shop.html'));
});


module.exports=router;

const product=require('../model.product')

exports.getAddProduct=(req,res,next)=>{
    res.render('add-product',{
        pageTitle:'Add Product',
        path:'/admin/add-product',
        formCSS:true,
        productCSS:true,
        activeAddProduct:true
    });
};
exports.postAddProduct=(req,res,next)=>{
    const product=new product(req.body.title);
    product.save();
    res.redirect('/');
};
exports.getProducts=(req,res,next)=>{
    product.fetchAll( (products)=>{

    
    res.render('shop',{
        prods:products,
        pageTitle:'shop',
        path:'/',
        hasProduct:products.length>0,
        activeShop:true,
        productCSS:true 

    })
})
}
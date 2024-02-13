const fs=require('fs')
const path=require('path');
const p=path.join(path.dirname(require.main.filename),'data','cart.json')

module.exports=class cart{
static addProduct(id,productPrice){
    fs.File(p,(err,fileContent)=>{
    let cart={products:[],totalPrice:0}
    if(!err){
        cart=JSON.parse(fileContent)
    }
    const existingCart=cart.products(prod=>prod.id===id);
    const existingProduct=cart.products[existingCart]
    let updatedProduct;
    if(existingCart){
        updatedProduct={...existingProduct}
        updatedProduct.qty=updatedProduct.qty+1;
        cart.products=[...cart.products];
        cart.products[existingCart]=  updatedProduct
    }
    else{
        updatedProduct={id:id,qty:1}
        cart.products=[...cart.products,updatedProduct]
    }
    cart.totalPrice+=+productPrice;
    fs.writeFile(p,JSON.stringify(cart),err=>{
        console.log(err)
    })
    })
}
}
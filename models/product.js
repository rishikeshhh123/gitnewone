/*const path=require('path');
  const fs=require('fs');
const p=path.join(path.dirname(require.mainModule.filename),data,products.json)

  const getFile=(cb)=>{
   // const p=path.join(path.dirname(require.mainModule.filename),data,products.json);
    fs.File(p,(err,fileContent)=>{
        if(err){
           return  c([]);
        }
         cb(JSON.parse(fileContent));
    })
   // return products;
}
  
 
module.exports=class product{
constructor(t){
        this.title=t
    }
    save(){
       this.id=Math.random().toString()      
        getFile(products=>{
           // let products=[]
           
            products.push(this)
            fs.writeFile(p,JSON.stringyfy(products),(err)=>{
                console.log(err)
        });
    })
        
        
        
    }
    static fetchAll(cb){
        getFile(cb)
}
  static findId(id,cb){
    getFile(products=>{
      const product=products.find(p=>p.id===id);
      cb(product)
    })
  }
}*/
const fs = require('fs');
const path = require('path');

const p = path.join(
  path.dirname(process.mainModule.filename),
  'data',
  'products.json'
);

const getProductsFromFile = cb => {
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      cb([]);
    } else {
      cb(JSON.parse(fileContent));
    }
  });
};

module.exports = class Product {
  constructor(id,title, imageUrl, description, price) {
    this.id=id;
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  save() {
    
    getProductsFromFile(products => {
      if(this.id){
const existingProductIndex=products.findIndex(prod=>prod.id===this.id);
const updatedProduct=[...products];
updatedProduct[existingProductIndex]=this;
fs.writeFile(p, JSON.stringify(updatedProduct), err => {
  console.log(err);
});
      }
      else{

      
      this.id=Math.random().toString()
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), err => {
        console.log(err);
      });
    }
    });
  
  }

  static fetchAll(cb) {
    getProductsFromFile(cb);
  }
};

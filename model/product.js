const path=require('path');
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
        getFile(products=>{
           // let products=[]
           
            products.push(this)
            fs.writeFile(p,JSON.stringyfy(products),(err)=>{
                console.log(err)
        });
    })
        
        
        
    }
    static fetchAll(cb){
        grtFile(cb)
}
}
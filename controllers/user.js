const User=require('../models/users')

const addUser=async (req,res,next)=>{
    try{
     
    const name=req.body.name;
    const email=req.body.email;
    const phonenumber=req.body.number;
    const data=await User.create({name:name,email:email,phonenumber:phonenumber})
    res.status(201).json({newUserDetails:data});
    }
    catch(err){
      res.status(500).json({
        error:err
      })
    }
  }
  const getUser=async (req,res,next)=>{
    try{
    const users=await User.findAll();
    
    res.status(200).json({allUsers:users});
    }
    catch(err){
      res.status(500).json({
        error:err
      })
    }
  
  }
  const deleteUser=async(req,res,next)=>{
    try{
      if(req.params.id ==='undefined'){
        console.log('id is missing')
        return res.status(400).json({err:'id is missing'})
      }
    const uId=req.params.id;
    await User.destroy({where:{id:uId}});
    res.sendStatus(200); 
    }
    catch(err){
      console.log(err);
      res.status(500).json(err)
    }
  }
  module.exports={
    addUser,
    getUser,
    deleteUser
  }
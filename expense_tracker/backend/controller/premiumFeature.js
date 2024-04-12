const User=require('../models/users');
const Expense=require('../models/Expense');
const sequelize=require('../util/databse');
const e=require('express');

const getuserLeaderBoard=async(req,res)=>{
   
    try{
        const leaderboardofusers=await User.findAll({
        
            attributes:['id','name',[sequelize.fn('sum',sequelize.col('expenses.expenseamount')),'total_cost']]
           ,include:[
            {
                model:Expense,
                attributes:[]
            }
           ],
            group:['user.id'],
            order:[[sequelize.col('total_cost'),"DESC"]]
        });
     
        
        
       
        res.status(200).json(leaderboardofusers)
        
    }   
    catch(err){
        console.log(err);
        res.status(500).json(err);
    }
      
}
module.exports={
    getuserLeaderBoard
}
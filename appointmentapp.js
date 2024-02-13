const path = require('path');
const sequelize = require('sequelize');

const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');
const db = require('./util/database');
const User=require('./models/users');
var cors=require('cors');

const app = express();
app.use(cors());

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./route/admin');
const shopRoutes = require('./route/shop');
const userRoutes=require('./route/user')

/*db.execute('SELECT * FROM products')
  .then(result => {
    console.log(result[0], result[1]);
  })
  .catch(err => {
    console.log(err);
  });
*/  
app.use(bodyParser.json({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);
app.use('/user',userRoutes)

app.use(errorController.get404);
console.log("Database object:", db); 
db.sequelize.sync().then((result)=>{
  app.listen(3006);
})
.catch((err)=>console.log(err));



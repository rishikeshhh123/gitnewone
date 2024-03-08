const  Sequelize  = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', 'Sachin@123', {
  dialect: 'mysql',
  host: 'localhost'
});

sequelize.authenticate()
  .then(() => {
    console.log('Database connection successful');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
    throw err;
  });

module.exports = sequelize;

const  Sequelize  = require('sequelize');
const dotenv = require('dotenv');
dotenv.config();

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME,process.env.DB_PASSWORD, {
  dialect: 'mysql',
  host: process.env.DB_HOST
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

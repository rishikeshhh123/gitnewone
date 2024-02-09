const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', 'Sachin@123', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;

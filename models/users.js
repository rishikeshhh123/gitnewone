const {DataTypes} = require('sequelize');

const sequelize = require('../util/database');

const User = sequelize.define('user', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  name: DataTypes.STRING,
  email: {
    type:DataTypes.STRING,
    unique: true
  },
  phonenumber: {
    type:DataTypes.STRING,
    unique: true 
  }
  
});

module.exports = User;

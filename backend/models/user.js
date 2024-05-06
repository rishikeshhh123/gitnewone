const { DataTypes, Sequelize } = require('sequelize');
const sequelize = require('../util/database');

const User = sequelize.define('groupchat-user', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  phoneNumber: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  isPremiumUser: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  totalExpenses: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  }
});

module.exports = User;

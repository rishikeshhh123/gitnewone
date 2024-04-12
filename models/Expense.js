// models/Expense.js
const { sequelize, Sequelize } = require('../util/database');

const Expense = sequelize.define('Expense', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  item: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false
  },
  amount: {
    type: Sequelize.FLOAT,
    allowNull: false
  },
  date: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW
  },
});

module.exports = Expense;

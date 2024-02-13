// controllers/expenseController.js
const Expense = require('../models/Expense');

exports.getExpenses = async (req, res) => {
  try {
    const expenses = await Expense.findAll();
    res.json(expenses);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.createExpense = async (req, res) => {
  const { item,description, amount } = req.body;
  try {
    const newExpense = await Expense.create({ item,description, amount });
    res.status(201).json(newExpense);
  } catch (error) {
    console.error('Error creating expense:', error); 
    res.status(500).send(error.message);
  }
};

exports.deleteExpense = async (req, res) => {
  const { id } = req.params;
  try {
    await Expense.destroy({
      where: { id }
    });
    res.sendStatus(204);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.editExpense = async (req, res) => {
  const { id } = req.params;
  const { description, amount } = req.body;
  try {
    await Expense.update({ description, amount }, { where: { id } });
    const updatedExpense = await Expense.findByPk(id);
    res.json(updatedExpense);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

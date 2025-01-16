const express = require('express');

const {
  addExpense,
  getExpenses,
  deleteExpense,
  updateExpense,
} = require('../controllers/expenseController');

const authenticateToken = require('../utils/authenticateToken');

const router = express.Router();

router.post('/', authenticateToken, addExpense);
router.get('/', authenticateToken, getExpenses);
router.put('/:id', authenticateToken, updateExpense);
router.delete('/:id', authenticateToken, deleteExpense);

module.exports = router;

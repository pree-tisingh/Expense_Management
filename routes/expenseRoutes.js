const express = require('express');
const expenseController = require('../Controller/expenseController');

const router = express.Router();

router.post('/add-expense', expenseController.addExpense);
router.get('/expenses', expenseController.getExpense);
router.delete('/delete-expense/:expenseId', expenseController.deleteExpense);
router.put('/update-expense/:expenseId', expenseController.updateExpense);

module.exports = router;

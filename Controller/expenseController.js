const Expense = require('../models/expense');

exports.addExpense = async (req,res,next)=>{
    const {description , category , amount , date} = req.body;
    try{
        const expense = await Expense.create({description , category , amount , date});
        res.status(200).json(expense);
    }
   catch(err){
    res.status(500).json('Failed to add the data');
   }
}

exports.getExpense = async (req, res, next) => {
    try {
      const expenses = await Expense.findAll();
      res.status(200).json(expenses);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Failed to fetch expenses' });
    }
  };

exports.deleteExpense = async (req,res,next)=>{
    const expenseId = req.params.expenseId;
    try{
        const expense = await Expense.destroy({where: {id: expenseId} });
        res.status(200).json('expense deleted');
    }
    catch(err){
        res.status(500).json('Failed to delete the data');
    }
}

exports.updateExpense = async (req,res,next)=>{
    const expenseId = req.params.expenseId;
    const {description , category , amount , date} = req.body;
    try{
        const expense = await expense.findByPk(expenseId);
        if(!expenseId){
            return res.status(404).json({error: 'Expense Not Found'});
        }
    expense.description = description;
    expense.category = category;
    expense.amount = amount;
    expense.date = date;
    await expense.save();
    res.status(200).json(expense);
    }
    catch(err){
        res.status(500).json('Failed to update the data');
    }
}
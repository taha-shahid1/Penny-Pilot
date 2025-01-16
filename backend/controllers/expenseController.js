const Expense = require('../models/expense')

exports.addExpense = async (req, res) => {
    const { description, amount, category, date } = req.body;

    try {
        const newExpense = new Expense({
            user:req.user._id,
            description,
            amount,
            category,
            date,
        });
        await newExpense.save();
        res.status(201).send('Expense saved');
    } catch (error){
        res.status(500).send(error);
    }
};

exports.getExpenses = async (req, res) => {
    try{
        const expenses = await Expense.find({user: req.user._id});
        res.json(expenses);
    } catch (error){
        res.status(500).send(error);
    }
};

exports.deleteExpense = async (req, res) => {
    try {
      const expense = await Expense.findOneAndDelete({
        _id: req.params.id,
        user: req.user._id,
      });
  
      if (!expense) return res.status(404).send('Expense not found');
  
      res.send('Expense deleted');
    } catch (error) {
      res.status(500).send(error);
    }
};

exports.updateExpense = async (req, res) => {
    const { description, amount, category, date } = req.body;

    try{
        const expense = await Expense.findOneAndUpdate(
            { _id: req.params.id, user: req.user._id },
            { description, amount, category, date },
            { new: true }
        );

        if (!expense){
            return res.status(404).send('Expense not found');
        };

        res.json(expense);
    } catch (error){
        res.status(500).send(error);
    }
};


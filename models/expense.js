const Sequelize = require('sequelize');
const sequelize = require('../utils/database');

const Expense = sequelize.define('Expense', {
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        unique:true,
        allowNull:false,
        primaryKey:true
    },
    description:{
        type:Sequelize.STRING,
        allowNull:false,
    },
    category:{
        type:Sequelize.STRING,
        allowNull:false,
    },
    amount:{
        type:Sequelize.FLOAT,
        allowNull:false,
    },
    date:{
        type:Sequelize.DATE,
        allowNull:false,
    }
});

module.exports = Expense;

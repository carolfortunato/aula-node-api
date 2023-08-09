const { Schema, model } = require('mongoose')

const transactionModel = new Schema({
    title: String,
    type: String,
    category: String,
    amount: Number
}, { timestamps: true })

module.exports = model('Transactions', transactionModel)
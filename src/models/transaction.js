const { Schema, model } = require('mongoose')

const transactionModel = new Schema({
    title: { type: String, required: true },
    type: { type: String, required: true },
    category: { type: String, default: null },
    amount: { type: Number, required: true }
}, { timestamps: true })

module.exports = model('Transactions', transactionModel)

const { Router} = require('express');
const { createTransaction } = require('../../controller/createTransactionController')
const { listTransactions } = require('../../controller/listTransactionsController')
const { updateTransaction } = require('../../controller/updateTransactionController')
const { deleteTransaction } = require('../../controller/deleteTransactionController')

const routes = Router();

routes.get('/transactions', listTransactions);
routes.post('/transaction', createTransaction)
routes.put('/transaction/:id', updateTransaction)
routes.delete('/transaction/:id', deleteTransaction)

module.exports = routes;
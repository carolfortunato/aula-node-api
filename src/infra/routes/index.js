const { Router} = require('express');
const { createTransaction } = require('../../controller/createTransactionController')
const { listTransactions } = require('../../controller/listTransactionsController')

const routes = Router();

routes.get('/transactions', listTransactions);
routes.post('/transaction', createTransaction)

module.exports = routes;
const { Router} = require('express');
const { createTransaction } = require('../../controller/createTransactionController')

const routes = Router();

// routes.get()
routes.post('/transaction', createTransaction)

module.exports = routes;
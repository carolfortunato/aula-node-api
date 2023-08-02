const express = require('express')
const routes = require('./infra/routes')
// const transactions = require('./infra/db/dados')

const app = express()
app.use(express.json())
app.use(routes)

// app.get('/transactions', (request, response) => {
//  return response.status(200).json(transactions)
// })

module.exports = app
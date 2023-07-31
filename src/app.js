const express = require('express')
const transactions = require('./infra/db/dados')

const app = express()
app.use(express.json())

app.get('/transactions', (request, response) => {
  return response.status(200).json(transactions)
})

app.post('/transaction', (request, response) => {
  const body = request.body
  
  if (!body.id || !body.type || !body.value) {
    return response.status(400).json( {error: 'missing id or type or value'} )
  }
  
  if ( transactions.find( t => t.id == body.id ) ) {
    return response.status(400).json( {error: 'transaction already exists'} )
  }

  transactions.push(body)
  return response.status(201).json(body)
})

module.exports = app
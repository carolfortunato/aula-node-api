const transactions = require('../infra/db/dados')

function create(params) {
  transactions.push(params)
}

function findById(id) {
	return transactions.find( t => t.id === id)
}

function findAll() {
  return transactions
}

module.exports = { create, findById, findAll }
const { startConnection, closeConnection } = require('../infra/db/mongodb')
const transactionModel = require('../models/transaction')

class TransactionRepository{
  async create(params){
    await startConnection();
    await transactionModel.create(params)
    await closeConnection();
  }

  async findAll(){
    await startConnection();
    const transactions = await transactionModel.find()
    await closeConnection();
    return transactions
  }
}

module.exports = TransactionRepository

/*
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
*/
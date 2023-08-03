const repository = require('../repositories/transactionRepository')

function execute() {
  const transactions = repository.findAll()

	return transactions
}

module.exports = { execute }
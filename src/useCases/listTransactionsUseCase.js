const Repository = require('../repositories/transactionRepository')

async function execute() {
  const repository = new Repository()

	return await repository.findAll()
}

module.exports = { execute }
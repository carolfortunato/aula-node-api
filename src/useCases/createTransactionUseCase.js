const Repository = require('../repositories/transactionRepository')

async function execute(body) {
  const repository = new Repository()
  
  await repository.create( body )

  return { success: true }
}

module.exports = execute
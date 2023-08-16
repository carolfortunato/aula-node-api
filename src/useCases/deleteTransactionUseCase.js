const Repository = require('../repositories/transactionRepository')

async function execute(id) {
  const repository = new Repository()

  try {
    await repository.delete(id)
    return { success: true}
  } catch (error) {
    return { success: false, errorMessage: error.message }
  }
}

module.exports = { execute }

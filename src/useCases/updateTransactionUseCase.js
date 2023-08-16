const Repository = require('../repositories/transactionRepository')

async function execute(id, data) {
  const repository = new Repository()  

  try {
    await repository.update(id, data)
    return { success: true}
  } catch (error) {
    return { success: false, errorMessage: error.message }
  }
}

module.exports = { execute }
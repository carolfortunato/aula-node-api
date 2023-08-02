const repository = require('../repositories/transactionRepository')

function execute(body) {
  if ( repository.findById(body.id) ) {
    return {
      success: false,
      code: 400,
      message: 'transaction already exists'
    }
  }
  
  repository.create( body )

  return { success: true }
}

module.exports = execute
const create = require('../useCases/createTransactionUseCase')

function createTransaction(request, response) {
  const body = request.body
    
  if (!body.id || !body.title || !body.type || !body.amount) {
    return response.status(400).json( {error: 'missing field: id, title, type or amount'} )
  }

	const result = create(body)

	if(!result.success){
		return response.status(result.code).json( {error: result.message })
	}

  return response.status(201).json(body)
}

module.exports = { createTransaction }
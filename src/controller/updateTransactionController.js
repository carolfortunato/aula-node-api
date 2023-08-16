const update = require('../useCases/updateTransactionUseCase')

async function updateTransaction(request, response) {
  const { id } = request.params
  const data = request.body

  const result = await update.execute(id, data)

  if(!result.success){
		return response.status(500).json( { error: result.errorMessage })
	}

  return response.status(200).json(data)
}

module.exports = { updateTransaction }
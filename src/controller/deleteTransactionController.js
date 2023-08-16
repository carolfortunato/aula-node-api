const deleteTransactionUseCase = require('../useCases/deleteTransactionUseCase')

async function deleteTransaction(request, response){
  const { id } = request.params

  const result = await deleteTransactionUseCase.execute(id)

  if(!result.success){
		return response.status(500).json( { error: result.errorMessage })
	}

  return response.status(200).json(id)
}

module.exports = { deleteTransaction }
const list =  require('../useCases/listTransactionsUseCase')

async function listTransactions(request, response) {
  const result = await list.execute()

  if(result.errorMessage) {
    return response.status(500).json({ error: result.errorMessage})
  }

  return response.status(200).json(result)
}

module.exports = { listTransactions }
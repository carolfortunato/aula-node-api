const list =  require('../useCases/listTransactionsUseCase')

async function listTransactions(request, response) {
  const result = await list.execute()

  return response.status(200).json(result)
}

module.exports = { listTransactions }
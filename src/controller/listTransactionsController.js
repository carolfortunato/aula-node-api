const list =  require('../useCases/listTransactionsUseCase')

function listTransactions(request, response) {
  const result = list.execute()

  return response.status(200).json(result)
}

module.exports = { listTransactions }
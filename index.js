const express = require('express')
const app = express()
const port = 3000
const message = { message: 'API ok'}

app.get('/', (req, res) => {
  res.status(200).json(message)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
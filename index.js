const express = require('express')
const app = express()
const cors = require('cors')

require('dotenv').config()
app.use(cors())
app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/', require('./src/routes'))

app.use('*', (req, res) => {
  return res.status(404).json({
    success: false,
    message: 'Resource not found',
  })
})

app.listen(3000, () => {
  console.log('App listening on port 3000!')
})

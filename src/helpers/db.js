const { Client, Query } = require('pg')

const db = new Client({
  connectionString: process.env.DATABASE_URL,
})

db.connect()
  .then(() => {
    console.log('Connected to PostgreSQL database.')
  })
  .catch((err) => {
    console.error('Error connecting to PostgreSQL database:', err.stack)
  })

const submit = Query.prototype.submit
Query.prototype.submit = function () {
  const text = this.text
  console.log(text)
  submit.apply(this, arguments)
}

module.exports = db

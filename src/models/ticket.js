const db = require('../helpers/db')

exports.createTicketType = (data, cb) => {
  const query = 'INSERT INTO ticket_type(name, date_time) VALUES($1, $2) RETURNING *'
  const value = [data.name, data.dateTime]
  db.query(query, value, (err, res) => {
    if (res) {
      //   console.log(res.rows)
      cb(err, res.rows[0])
    } else {
      console.log(err)
      cb(err)
    }
  })
}

exports.getAllTicketType = (cb) => {
  db.query('SELECT * FROM ticket_type', (err, res) => {
    cb(res.rows)
  })
}

exports.deleteTicketType = (id, cb) => {
  const query = 'DELETE FROM ticket_type WHERE id=$1 RETURNING *'
  const value = [id]
  db.query(query, value, (err, res) => {
    cb()
  })
}

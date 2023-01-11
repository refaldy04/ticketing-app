const ticket = require('express').Router()
const ticketController = require('../controllers/ticket')

ticket.post('/ticketType', ticketController.ticketType)
ticket.get('/getAllTicketType', ticketController.getAllTicketType)
ticket.delete('/deleteTicket/:id', ticketController.deleteTicketType)

module.exports = ticket

const ticket = require('express').Router()
const ticketController = require('../controllers/ticket')

ticket.post('/ticketType', ticketController.ticketType)
ticket.get('/getAllTicketType', ticketController.getAllTicketType)
// auth.post('/login', ...loginValidation, authController.login)

module.exports = ticket

const ticketModel = require('../models/ticket')
const response = require('../helpers/standardResponse')
const errorResponse = require('../helpers/errorResponse')

exports.ticketType = (req, res) => {
  ticketModel.createTicketType(req.body, (err, result) => {
    return response(res, 'Create new ticket type success', result)
  })
}

exports.getAllTicketType = (req, res) => {
  ticketModel.getAllTicketType((result) => {
    return response(res, 'List all ticket type', result)
  })
}

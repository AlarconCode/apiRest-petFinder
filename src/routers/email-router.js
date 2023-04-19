const express = require('express')
const contactByMail = require('../controller/email-controller')
const emailRouter = express.Router()

emailRouter.post('/email', contactByMail)

module.exports = emailRouter

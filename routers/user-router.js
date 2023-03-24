const express = require('express')
const { postUser, putUser } = require('../controller/user-controller')
const userRouter = express.Router()

userRouter.post('/users', postUser)
userRouter.put('/users', putUser)

module.exports = userRouter

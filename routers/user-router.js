const express = require('express')
const { postUser, putUser, postLogin } = require('../controller/user-controller')
const userRouter = express.Router()

userRouter.post('/users', postUser)
userRouter.put('/users', putUser)
userRouter.post('/login', postLogin)

module.exports = userRouter

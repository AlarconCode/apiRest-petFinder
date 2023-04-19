const express = require('express')
const { postUser, putUser, postLogin, getUser } = require('../controller/user-controller')
const userRouter = express.Router()

userRouter.get('/users', getUser)
userRouter.post('/users', postUser)
userRouter.put('/users', putUser)
userRouter.post('/login', postLogin)

module.exports = userRouter

const express = require('express')
const postPublication = require('../controller/post-controller')
const postRouter = express.Router()

postRouter.post('/posts', postPublication)

module.exports = postRouter
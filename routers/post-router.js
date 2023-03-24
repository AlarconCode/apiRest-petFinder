const express = require('express')
const { postPublication, deletePublication } = require('../controller/post-controller')
const postRouter = express.Router()

postRouter.post('/posts', postPublication)
postRouter.delete('/posts', deletePublication)


module.exports = postRouter
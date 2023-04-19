const express = require('express')
const { getPublications, putPublication, postPublication, deletePublication } = require('../controller/post-controller')
const postRouter = express.Router()

postRouter.get("/posts", getPublications)
postRouter.put("/posts", putPublication)
postRouter.post('/posts', postPublication)
postRouter.delete('/posts', deletePublication)







module.exports = postRouter

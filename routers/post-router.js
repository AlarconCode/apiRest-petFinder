const express = require('express')
const postRouter = express.Router();

const postCtrl= require("../controller/post-controller")
const postPublication = require('../controller/post-controller')

postRouter.get("/posts", postCtrl.getPosts)
postRouter.put("/posts", postCtrl.putPosts)
postRouter.put("/posts", postCtrl.putFoundPost)
postRouter.post('/posts', postPublication)







module.exports = postRouter

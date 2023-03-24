const express = require('express')
const { postPublication, deletePublication } = require('../controller/post-controller')
const postRouter = express.Router()

const postCtrl= require("../controller/post-controller")


postRouter.get("/posts", postCtrl.getPosts)
postRouter.put("/posts", postCtrl.putPosts)
postRouter.put("/posts", postCtrl.putFoundPost)
postRouter.post('/posts', postPublication)
postRouter.delete('/posts', deletePublication)


<<<<<<< HEAD





module.exports = postRouter
=======
module.exports = postRouter
>>>>>>> 40e64d663555bcfa3ba554f4e29425da5bc76e3f

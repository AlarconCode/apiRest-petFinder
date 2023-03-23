const express = require("express");
const postRouter = express.Router();

const postCtrl= require("../controller/post-controller")

postRouter.get("/posts", postCtrl.getPosts)
postRouter.put("/posts", postCtrl.putPosts)
postRouter.put("/posts", postCtrl.putFoundPost)

module.exports = postRouter
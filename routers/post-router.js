const { Router } = require("express");
const router = Router();

const postCtrl= require("../controller/post-controller")

router.get("/posts", postCtrl.getPosts)
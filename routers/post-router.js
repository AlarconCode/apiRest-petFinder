const { Router } = require("express");
const router = Router();

const postCtrl= require("../controller/post-controller")

router.get("/posts", postCtrl.getPosts)
router.put("/posts", postCtrl.putPosts)
router.put("/posts", postCtrl.putFoundPost)

module.exports = router;
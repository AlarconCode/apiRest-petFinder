if (process.env.NODE_ENV !== 'production') require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const errorHandling = require("./error/errorHandling");
const userRouter = require('./routers/user-router');
const postRouter = require('./routers/post-router');




// MiddleWares
app.set('port', process.env.PORT || 3000)
app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use(cors())
// app.use(function (req, res, next) {
//     res.status(404).json({
//         error: true,
//         codigo: 404,
//         message: "Endpoint doesn't found"
//     })
// })
app.use(errorHandling);
app.use(userRouter, postRouter)

module.exports = app;
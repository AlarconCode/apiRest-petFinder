if (process.env.NODE_ENV !== 'production') require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const errorHandling = require("./error/errorHandling");
<<<<<<< HEAD
const app = express();
const postRouter=require("./routers/post-router");
=======
const userRouter = require('./routers/user-router');

>>>>>>> main


<<<<<<< HEAD
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
=======

// MiddleWares
app.set('port', process.env.PORT || 3000)
app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use(cors())
>>>>>>> main
// app.use(function (req, res, next) {
//     res.status(404).json({
//         error: true,
//         codigo: 404,
<<<<<<< HEAD
//         message: "Endpoint doesnt found"
=======
//         message: "Endpoint doesn't found"
>>>>>>> main
//     })
// })
app.use(errorHandling);
app.use(userRouter)

app.use(postRouter);


module.exports = app;
if (process.env.NODE_ENV !== 'production') require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const errorHandling = require("./error/errorHandling");
const userRouter = require('./routers/user-router');
const postRouter = require('./routers/post-router');
//SENDEMAIL
// const nodemailer = require('nodemailer')
const bodyParser = require('body-parser')


// MiddleWares
app.set('port', process.env.PORT || 3000)
app.use(express.urlencoded({ extended: false }))
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

app.post('/formulario', (req, res) => {})
app.listen(3000, () => {
console.log('Servidor corriendo')
});


//CODIGO DE ANDY SANTANA

// const express = require("express");
// const cors = require("cors");
// const bodyParser = require("body-parser");
const configMensaje = require("./configMensaje");
// const app = express();
app.use(bodyParser.json());
// app.use(cors())
app.post("/formulario", (req, res) => {
 configMensaje(req.body);
 res.status(200).send();
})
app.listen(3000, () => {
 console.log("Servidor corriendo")
});


app.use(userRouter, postRouter)

module.exports = app;
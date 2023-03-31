if (process.env.NODE_ENV !== 'production') require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const errorHandling = require("./error/errorHandling");
const userRouter = require('./routers/user-router');
const postRouter = require('./routers/post-router');
//SENDEMAIL
const nodemailer = require('nodemailer')
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

//SENDEMAIL START
app.use(bodyParser.json())
// app.use(cors({ origin: "*" }))
app.post("/sendemail", (request, response) => {
    console.log("request came");
    let user = req.body;
    SendmailTransport(user, info => {
        console.log(`The mail has been send and the id is ${info.messageId}`);
        response.send(info);
    })
})

async function sendMail(user, callback){
    //create reusable transporter object using the default SMYP transport
    let transporter = nodemailer.createTransport({
        host:"smtp.gmail.com",
        port:587,
        secure:false, // true for 465, false for other ports
        auth:{
            user:details.email,
            pass: details.password
        
        }
    })
}
//SENDEMAIL  END

app.use(userRouter, postRouter)

module.exports = app;
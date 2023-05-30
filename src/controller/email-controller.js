const nodemailer = require('nodemailer')

const contactByMail = (req, res) => {

    let response = {error: true, code:500, result: []}
    const {name, email, phone, comments, emailUser, userName} = req.body

    console.log('ooo', req.body.email);

    const transporter = nodemailer.createTransport({

        service: 'gmail',
        host: 'smtp.gmail.com',
        port: '587',
        auth: {
            user: 'petfinderappmail@gmail.com',
            pass: 'nnfbforpwshepcnr'
        }
    })

    const mailOptions = {
      from: `${email}`,
      to: emailUser,
      subject: `🐾 PetFinder - ¡Hola ${userName}!`,
      html: `
      <p>¡Te acaban de contactar en PetFinder!</p>
      <br>
      <p><b>Nombre:</b> ${name}</p>
      <p><b>Correo:</b> ${email}</p>
      <p><b>Teléfono:</b> ${phone}</p>
      <br>
      <b>Mensaje:</b>
      <p>${comments}<p>
      <br>
      <br>
      <br>
      <br>
      🐶🐱
      `
    }

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.send(response)
        } else {
            response.error = false
            response.code = 200
            response.result = 'Sent Successfully'
            res.send(response)
        }
    })

}

module.exports = contactByMail
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
      from: 'petfinderappmail@gmail.com',
      to: emailUser,
      subject: `Hola ${userName} he encontrado tu mascota`,
      html: `
        <p>mi nombre es: ${name}</p>
        <p>mi correo es: ${email}</p>
        <p>mi teléfono es: ${phone}</p>
        <p>${comments}<p>
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
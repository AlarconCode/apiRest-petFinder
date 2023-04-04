const nodemailer = require("nodemailer")

module.exports = (formulario) => {
    var transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "hola.mariamelendez@gmail.com", // Cambialo por tu email
            pass: "pbccpggivnqcgfgm" // Cambialo por tu password
        }
    });
    const mailOptions = {
        from: `"${formulario.nombre}" <${formulario.email}>`,
        to: "hola.mariamelendez@gmail.com", // Cambia esta parte por el destinatario
        //  subject: formulario.asunto,
        subject: `PetFinder - ¡Has recibido un mensaje de ${formulario.nombre}!`,
        html: `
 <b>Nombre:</b> ${formulario.nombre} <br/>
 <b>E-mail:</b> ${formulario.email} <br/>
 <b>Mensaje:</b> ${formulario.mensaje},
 <br>
 <br>
 ¡Mucha suerte!
 `
    };
    transporter.sendMail(mailOptions, function (err, info) {
        if (err)
            console.log(err)
        else
            console.log(info);
    });
}
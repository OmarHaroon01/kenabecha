const nodemailer = require('nodemailer');

const sendEmail = async (toAddress, link) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL, //Email to send email from
            pass: process.env.PASSWORD //App password of the email
        }
    });

    const mailOptions = {
        from: "BechaKena",
        to: toAddress,
        subject: "Verify Your Email at BechaKena",
        text: `http://localhost:3000/verifyemail/${link}`,
    }

    let info = await transporter.sendMail(mailOptions);
    console.log(info);
}

exports.sendEmail = sendEmail;
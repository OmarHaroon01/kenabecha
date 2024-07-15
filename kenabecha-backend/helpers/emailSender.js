const nodemailer = require('nodemailer');

const sendEmail = async (toAddress, link) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: '', //Email to send email from
            pass: '' //App password of the email
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
const nodemailer = require("nodemailer");

const sendEmail = (options) => {
    const transporter = nodemailer.createTransport({
        service: process.env.EMAIL_PROVIDER, //
        auth: {
            user: process.env.EMAIL_USERNAME,
            pass: process.env.EMAIL_PASSWORD,
        },
    });
    
    // E.g In our auth.js forgotpassword controller mailOptions is being utilised
    const mailOptions = {
        from: process.env.EMAIL_FROM, // Our email: INJECT-DevOps@hotmail.com
        to: options.to, // Used as an argument for a users email
        subject: options.subject, // Email subject 
        html: options.text, // Email message/text 
    };

    transporter.sendMail(mailOptions, function(err, info) {
        if(err) {
            console.log(err);
        } else {
            console.log(info);
        }
    });
};

module.exports = sendEmail;
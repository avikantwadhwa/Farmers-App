const request = require('request')
const config = require('config')
const nodemailer = require('nodemailer')

const mail = async (req, res) => {
    let { subject, text } = req.body;
    try {
        let transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            secure: false,
            requireTLS: true,
            auth: {
                user: '',
                pass: ''
            }
        });
        const message = {
            from: ' ', // Sender address
            to: ' ',         // List of recipients
            subject: subject, // Subject line
            text: text // Plain text body
        }
        transporter.sendMail(message, function (err, info) {
            if (err) {
                return res.json(err)
            } else {
                return res.json(info)
            }
        });
    }
    catch (err) {
        return res.json(err.message)
    }
}
exports.mail = mail

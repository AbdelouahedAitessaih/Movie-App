const sgMail = require('@sendgrid/mail');
const {emailHtml} = require('../extras')

module.exports = (email, name, token) => {

    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    const msg = {
        from: process.env.EMAIL,
        to: email,
        subject: 'Welcome to MovieApp! Confirm Your Email',
        html: emailHtml(name,token)
    }

    sgMail.send(msg);
}
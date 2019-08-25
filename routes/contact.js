const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

// An api endpoint
router.post('/', async (req, res) => {
    console.log(req.body);
    const output = `
        <h3>Contact Details</h3>
        <ul>
            <li>Name: ${req.body.name} </li>
            <li>Email: ${req.body.email} </li>
            <li>Subject: ${req.body.subject} </li>
            <li>Message: ${req.body.message} </li>            
    `;

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: 'in-v3.mailjet.com',
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: process.env.NODEMAILER_USER, // generated ethereal user
            pass: process.env.NODEMAILER_PW   // generated ethereal password
        }
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
        from: '"NodeMailer Contact" <lee7burk@gmail.com>', // sender address
        to: 'sburk377@gmail.com', // list of receivers
        subject: 'Contact Request', // Subject line
        text: output, // plain text body
        html: output // html body
    }, (err, data) => {
        if (err) {
            res.json({
              msg: 'fail'
            })
          } else {
            res.json({
              msg: 'success'
            })
          }
    });
});

module.exports = router;
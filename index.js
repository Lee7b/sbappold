const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const mongoose = require('mongoose');

//Express
const app = express();

//Mongoose
const mongoDB = process.env.DB_CONNECTION;
mongoose.connect(mongoDB, { useNewUrlParser: true });
var db = mongoose.connection;

//On connection
db.on('connected', () => {
  console.log('Connected to db');
})

//On error
db.on('error', console.error.bind(console, 'MongoDB Connection Error'));

//Cors
app.use(cors());

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

//bodyParser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// An api endpoint
app.post('/api/contact', async (req, res) => {
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
            user: '83057429a9101486ea84bf3f4435a496', // generated ethereal user
            pass: '5033245dfb61dfd95722430adc846fd9'    // generated ethereal password
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

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
  });


const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);
const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const nodemailer = require('nodemailer');

const app = express();

//Cors
app.use(cors());

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

//bodyParser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// An api endpoint
app.post('/api/contact', (req,res) => {
    console.log(req.body);
    const output = `
        <h3>Contact Details</h3>
        <ul>
            <li>Name: ${req.body.name} </li>
            <li>Email: ${req.body.email} </li>
    `;

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: 'sburk377@gmail.com', // generated ethereal user
            pass: 'samlee#Wyatt12!' // generated ethereal password
        }
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
        from: '"NodeMailer Contact" <foo@example.com>', // sender address
        to: 'sb@samburkett.com', // list of receivers
        subject: 'Contact Request', // Subject line
        text: 'Hello world?', // plain text body
        html: output // html body
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
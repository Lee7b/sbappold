const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const nodemailer = require('nodemailer');

const app = express();
app.use(cors());

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

//bodyParser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// An api endpoint
app.get('/api/contact', (req,res) => {
    console.log(req.body);
});

// Handles any requests that don't match the ones above
app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);
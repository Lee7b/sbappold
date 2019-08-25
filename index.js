const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const mongoose = require('mongoose');
const contactRoute = require('./routes/contact');

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

app.use('api/contact', contactRoute);

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
  });


const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);
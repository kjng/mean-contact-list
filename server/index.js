const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const path = require('path');
const mongoose = require('mongoose');

// MongoDB connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/contactlist');
mongoose.connection
  .on('error', err => console.error(err))
  .once('open', () => console.log('Successfully connected to MongoDB!'));

// Express server and routing
const app = express();

// Logging, json parsing
app.use(morgan('dev'));
app.use(bodyParser.json());

// Serve static front-end files
console.log('Serving static files');
app.use(express.static('app'));

// Contact routes
console.log('Initializing contact routes');
require('./src/routes/contacts')(app);

// Catch all for angular html5mode
app.get('*', function(req, res) {
  res.sendFile(path.resolve('app/index.html'));
});

app.listen(3000, function() {
  console.log('Server listening on port 3000');
});

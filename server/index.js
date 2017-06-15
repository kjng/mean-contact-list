const express = require('express');
const morgan = require('morgan');
const path = require('path');

const app = express();

app.use(morgan('dev'));

app.use(express.static('app'));

app.get('*', function(req, res) {
  res.sendFile(path.resolve('app/index.html'));
});

app.listen(3000, function() {
  console.log('Server listening on port 3000!');
});

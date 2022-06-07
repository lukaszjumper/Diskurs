const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 9000;

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/welcome.html'));
});

app.get('/main.css', function(req, res) {
    res.sendFile(path.join(__dirname, '/main.css'));
  });

app.listen(port);

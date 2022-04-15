const express = require('express');
const path = require('path');
const fs = require('fs');
var https = require('https')
var http = require('http')

const app = express();
const httpsPort = 443;
const httpPort = 80;

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/index.html'));
});
app.use(express.static('public'))

http.createServer(app).listen(httpPort);
https.createServer({
    key: fs.readFileSync('privkey.pem'),
    cert: fs.readFileSync('fullchain.pem')
  }, app).listen(httpsPort);

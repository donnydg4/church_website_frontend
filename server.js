const express = require('express');
const path = require('path');
const forceSsl = require('force-ssl-heroku');
const app = express();
app.use(forceSsl);
app.use(express.static(__dirname + '/dist/church_website_frontend/browser'));
app.get('/*', function(req,res) {
  res.sendFile(path.join(__dirname+
    '/dist/church_website_frontend/browser/index.html'));});
app.listen(process.env.PORT || 8080);

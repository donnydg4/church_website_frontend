const express = require('express');
const path = require('path');
const app = express();
app.use(express.static('church_website_frontend' + '/dist/church_website_frontend'));
app.get('/*', function(req,res) {
  res.sendFile(path.join('church_website_frontend'+
    '/dist/church_website_frontend/index.html'));});
app.listen(process.env.PORT || 8080);

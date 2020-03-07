const express = require('express');
const path = require('path');
const app = express();
const API = require('./routes/api');

// Allow requests to acces static assets folder.
app.use( express.static(path.join(__dirname, '/static/')) );

// API
app.use(API);

// Handles any requests that don't match the ones above.
app.get('*', ( _, res ) =>{
    res.sendFile(path.join(__dirname,'./static/index.html'));
});

app.listen(3000);
// module.exports = app;


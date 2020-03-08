const express = require('express');
const path = require('path');
const app = express();
const API = require('./routes/api');

app.use(API);

// Handles any requests that don't match the ones above.
app.get('*', ( _, res ) => res.sendStatus(404));

app.listen(3000);



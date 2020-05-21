const express = require('express');
const server = express();
const path = require('path');
const API_Router = require('./api/routes/api');

server.use(express.static(path.join(__dirname, './build')))
server.use(API_Router);


// Handles any requests that don't match the ones above.
server.get('*', ( _, res ) => res.sendStatus(404));

server.listen(3000);



const express = require('express');
const server = express();
const API_Router = require('./routes/api');
const logger = require('./middleware/logger');

server.use(logger); 
server.use(API_Router);

// Handles any requests that don't match the ones above.
server.get('*', ( _, res ) => res.sendStatus(404));

server.listen(3000);



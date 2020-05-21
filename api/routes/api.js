const express = require('express');
const server = express();
const getColors  = require('../libs/getColors');
const getCoinList = require('../libs/getCoinList');

server.get('/list', ( _, res ) => {
    const coinList = getCoinList();
    res.json( coinList );
});

server.get('/colors', ( req, res ) => {
    const args = req.query.coins;
    const coins = args ? args.split(',') : [];
    const colors = getColors({ "coins": coins });
    res.json( colors );
});

module.exports = server;
const express = require('express');
const app = express();
const getColors  = require('../libs/getColors');
const getCoinList = require('../libs/getCoinList');

app.get('/list', ( _, res ) => {
    const coinList = getCoinList();
    res.json( coinList );
});

app.get('/colors', ( req, res ) => {
    const args = req.query.coins;
    const coins = args ? args.split(',') : [];
    const colors = getColors({ "coins": coins });
    res.json( colors );
});

module.exports = app;
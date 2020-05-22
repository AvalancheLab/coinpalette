const express = require('express')
const router = express.Router()
const getColors  = require('./libs/getColors')
const getCoinList = require('./libs/getCoins')
const csvToArray = require('./libs/utils/csvToArray')

router.get('/list', ( _, res ) => {
    const coinList = getCoinList()
    res.json( coinList )
});

router.get('/colors', ( req, res ) => {
    const { coins, format } = req.query
    const colors = getColors({ coins: csvToArray(coins), format })
    console.log(colors)
    res.json( colors )
});

module.exports = router
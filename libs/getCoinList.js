const coinColors = require('../colors/coinColors.json');

function getCoinList () {
    return {"coins": Object.keys(coinColors)};
}

module.exports = getCoinList;
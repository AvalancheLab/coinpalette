const coinColors = require('../colors/coinColors.json');

module.exports = function getCoinList () {
    return {"coins": Object.keys(coinColors)};
}


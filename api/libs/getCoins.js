const coinColors = require('../colorList.json');

module.exports = function getCoinList () {
    return {"coins": Object.keys(coinColors)};
}


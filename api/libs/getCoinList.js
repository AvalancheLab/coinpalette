const coinColors = require('../colors/coinColors.json');

module.exports.coins = function () {
    return {"coins": Object.keys(coinColors)};
}


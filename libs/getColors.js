const coinColors = require('../colors/coinColors.json');

function getColors({ coins }) {
    if(coins.length === 0) return coinColors
    const matching = coins.filter(coin => getCoins().coins.includes(coin));
    return matching.map(name  =>  coinColors[name]); // Return colours for specified coins.
}

module.exports = getColors;
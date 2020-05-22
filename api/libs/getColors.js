const colorList = require('../colorList.json');

// Get a list of colors for specified colors and color format.
module.exports = function getColors({ coins, format }) {

    // Return all if none specified.
    if(!coins) return colorList 

    // Filter based on specified coins.
    return coins.map(coin => ({[coin] : colorList[coin]}));
}

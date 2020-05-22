const colorList = require('../colorList.json');
const convert = require('color-convert');

// Get a list of colors for specified colors and color format.
module.exports = function getColors({ coins, format }) {

    // Return all if none specified.
    if(!coins) return colorList 

    // Filter based on specified coins.
    let matching = coins.map(coin => ({[coin] : colorList[coin]}));
    
    // Return RGB is format is not specified.
    if (!format) return matching

    // Convert to specified format if HEX or HSL are chosen.
    if (format.toLowerCase() === 'hex' || 'hsl') {
        matching = matching.map(coin => {
            return Object.keys(coin).map(color => {
                return convert.rgb[format](...color)
            })
        })
    }
    
    return matching;
}

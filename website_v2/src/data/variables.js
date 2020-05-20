const colours = {
    dark : '#191a1d',
    dark2 : '#27557d',
    light : '#f2f8fd',
    light2: '#d3e7f8',
    light3: '#a7cef1',
    accent : '#A24D91'
}

const breakpoints = {
    "min" : 320,
    "max" : 1200
}

const unit = (n) => `${Math.floor(n * 8)}px`

const fontScalingFactor = 1.086;

module.exports = { colours, breakpoints, unit, fontScalingFactor }

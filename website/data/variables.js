module.exports = {
    "colours" : {
        dark : '#191A1D', //#051625 // 191A1D 1E2330
        dark2: '#27557D',
        light : '#F2F8FD',
        light2 : '#D3E7F8',
        accent: '#A24D91',
    },
    
    "unit" : (n) => `${Math.floor(n * 8)}px`,
    "bigunit" : (n) => `${Math.floor(n * 32)}px`,
    "pageWidth" : "1200px",
    "border" : `4px`,
    "breakpoints" : {
        "max" : "1200px",
        "min" : "320px"
    }
}
   
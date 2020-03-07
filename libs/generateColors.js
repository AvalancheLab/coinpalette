const path = require('path');
const jsonFetch = require('./utils/jsonFetch');
const { writeFileSync } = require('fs');
const downloadFile = require('./utils/downloadFile');
const vibrant = require('node-vibrant');

const generateColors = async () => {
    let pageNum = 1;
    const coins = await jsonFetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=${pageNum}`);
    let palettes = {};
    await Promise.all(coins.map(async ({ id, image }) => {
        const saveURL = path.join(__dirname, `../images/${id}.png`);
        await downloadFile(image, saveURL);
        const palette = await vibrant.from(saveURL).getPalette();
        palettes[id] = palette;
    }));
    writeFileSync(path.join(__dirname, "/data/coinColorData.json"), JSON.stringify(palettes));
}

generateColors();



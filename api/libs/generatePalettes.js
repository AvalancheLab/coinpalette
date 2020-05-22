const path = require('path')
const { existsSync, mkdirSync, removeSync, writeFileSync } = require('fs-extra')
const jsonFetch = require('./utils/jsonFetch')
const downloadFile = require('./utils/downloadFile')
const vibrant = require('node-vibrant')

// Generate palettes from downloaded logo images.
async function generatePalettes () {

    // Fetch all coins from CoinGecko API.
    let coins = [];
    let i = 1
    
    while (true) {
        console.log(`Fetching coins for page ${i}.`)
        const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=${i}`;
        let result = await jsonFetch(url).catch(_ => [])
        // console.log(result)
        if (result.length === 0) break;
        coins.push(...result)
        i++
    }

    // coins = await jsonFetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=${1}`)
    // .catch(_ => []);

    if (coins.length === 0) return

    // Create temporary download folder.
    const downloadFolder = path.join(__dirname, './tmp/')
    if (!existsSync(downloadFolder)){
        mkdirSync(downloadFolder)
    }

    // Download images.
    coins = await Promise.all(coins.map(async (coin, idx) => {
        const localImagePath = path.join(downloadFolder, `${coin.id}.png`)
        await downloadFile(coin.image, localImagePath).catch(err => new Error(err))
        coin.localImagePath = localImagePath
        return coin;
    }))
    .catch(err => new Error(err));

    // Generate palettes from downloaded images.
    let palettes = {};
    await Promise.all(coins.map(async ({ id, localImagePath }) => {
        
        // Generate color palette from image.
        let colors = await vibrant.from(localImagePath).getPalette()

        // Create palette object containing rgb, hex and hsl fields.
        Object.keys(colors).map(variant => {
            const color = colors[variant];
            if (!color) return console.log(`Failed to get palettes for ${id}`)
            if (!palettes[id]) palettes[id] = {}
            palettes[id][variant] = {
                rgb : color.getRgb(),
                hex : color.getHex(),
                hsl : color.getHsl()
            }
        })
    })).catch(err => new Error(err))

    // Save palettes to JSON file.
    writeFileSync(path.join(__dirname, "../colorList.json"), JSON.stringify(palettes))

    // Delete temporary download folder.
    removeSync(downloadFolder)
    console.log('Finished.')
}

generatePalettes();





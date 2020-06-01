const path = require('path')
const { existsSync, mkdirSync, removeSync, writeFileSync } = require('fs-extra')
const jsonFetch = require('./utils/jsonFetch')
const downloadFile = require('./utils/downloadFile')
const vibrant = require('node-vibrant')
const convert = require('color-convert')

// Generate palettes from downloaded logo images.
async function generatePalettes () {

    // Fetch all coins from CoinGecko API.
    let coins = [];
    let i = 1
    while (true) {
        console.log(`Fetching coins for page ${i}...`)
        const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=${i}`;
        let result = await jsonFetch(url).catch(_ => [])
        // console.log(result)
        if (result.length === 0) break
        coins.push(...result)
        i++
    }

    if (coins.length === 0) return

    // Create temporary download folder.
    const downloadFolder = path.join(__dirname, './images/')
    if (!existsSync(downloadFolder)){
        mkdirSync(downloadFolder)
    }

    console.log('Downloading images...')
    coins = await Promise.all(coins.map(async coin => {
        const localImagePath = path.join(downloadFolder, `${coin.id}.png`)
        if (!existsSync(localImagePath)) {
            await downloadFile(coin.image, localImagePath).catch(err => new Error(err))
        }
        coin.localImagePath = localImagePath
        return coin;
    }))
    .catch(err => new Error(err));

    console.log('Generating palettes...')
    let palettes = {};
    coins.forEach(({ id }) => {
        palettes[id] = {}
    });

    await Promise.all(coins.map(async ({ id, localImagePath }) => {
        
        // Generate color palette from image.
        let colors = await vibrant.from(localImagePath).getPalette()
        .catch(err => new Error(err))

        // Create palette object containing rgb, hex and hsl fields.

        for (variant in colors) {
            const color = colors[variant];
            if (!color) return console.log(`Failed to get palettes for ${id}`)
            const rgb = roundToInt(color.getRgb());
            palettes[id][variant.toLowerCase()] = {
                rgb : rgb,
                hex : convert.rgb.hex(...rgb),
                hsl : convert.rgb.hsl(...rgb)
            }
        }
        
        function roundToInt (array) {
            return array.map(val => Math.round(val))
        }
    })).catch(err => new Error(err))

    console.log('Saving palettes to file...')
    writeFileSync(path.join(__dirname, "../colorList.json"), JSON.stringify(palettes))

    console.log('Finished.')
}

generatePalettes();





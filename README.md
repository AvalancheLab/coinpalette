<img align="left" height="60" src="https://img.icons8.com/plasticine/100/000000/color-palette.png"></img>
# CoinPalette


A simple API for fetching cryptocurrency logo colours. Ideal for use with static sites where typical server side image processing is not possible/feasible. 

## API

| Method | Path | Description | Parameters | Example |
| --- | --- | --- | --- | --- |
| GET | `/list` | Returns list of all coins. | None | `https://www.coinpalette.com/list` |
| GET | `/colors` | Return colors for specified coins. Omit parameters to request for all coins. | Comma separated list of coin names. | `https://www.coinpalette.com/colors?bitcoin,litecoin,ethereum` |

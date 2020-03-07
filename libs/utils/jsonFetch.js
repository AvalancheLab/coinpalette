const fetch = require('node-fetch');

const jsonFetch = async (url) => {
    const response = await fetch(url);
    const json = await response.json();
    return json;
}

module.exports = jsonFetch;
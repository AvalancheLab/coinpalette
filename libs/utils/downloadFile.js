const fetch = require('node-fetch');
const { createWriteStream } = require('fs')

const downloadFile = (async (url, path) => {
    const res = await fetch(url);
    const fileStream = createWriteStream(path);
    await new Promise((resolve, reject) => {
        res.body.pipe(fileStream);
        res.body.on("error", (err) => {
          reject(err);
        });
        fileStream.on("finish", function() {
          resolve();
        });
    });
});

module.exports = downloadFile;
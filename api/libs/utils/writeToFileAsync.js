const { promisify } = require('util');
const writeFileAsync = promisify(fs.writeFile);
const fs = require('fs');
const writeToFile = async ( url, data ) => {
    writeFileAsync(url, data, function(err) {
        if(err) {
            return console.log(err);
        }
        console.log("File saved.");
    }); 
}
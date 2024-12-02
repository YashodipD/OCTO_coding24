const fs = require('fs');

fs.readFile('data.txt', 'utf8', (err, data) => {
    if (err) return console.error(err);
    console.log(`The number of 'r's in the text file is: ${(data.match(/r/gi) || []).length}`);
});
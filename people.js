const fs = require('fs');

const writeData = (path, data) => {
    fs.writeFile(path, JSON.stringify(data), err => {
        if (err) console.error(err);
        else console.log('Write successful');
    })
}

const readData = (path) => {
    fs.readFile(path, 'utf-8', (err, data) => {
        if (err) console.error(err);
        else console.log(data);
    })
}

module.exports = {
    writeData,
    readData
}
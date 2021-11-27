const fs = require('fs');

///////////////////////////async////////////////////////
try {
    fs.readFile('./Text/from.txt', { encoding: 'utf8' }, (err, data) => {
        if (err) throw 'readfile ' + err;
        else {
            fs.writeFile('./Text/to.txt', String(data), 'utf8', (err) => {
                if (err) throw 'writfile ' + err;
            });
        }
    });
} catch {
}

////////////////////////sync///////////////////////////////
try {
    let dataSync = fs.readFileSync('./Text/from.txt', { encoding: 'utf8' });
    fs.writeFileSync('./Text/to.txt', String(dataSync), 'utf8');
    let dataSyncAfter = fs.readFileSync('./Text/to.txt', { encoding: 'utf8' });
    console.log(dataSyncAfter);
} catch (error) {
    console.log("" + error);
}

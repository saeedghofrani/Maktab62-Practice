const fs = require('fs');
function write(path, str) {
    let writeFilePromise = new Promise((resolve, reject) => {
        fs.writeFile(path, str, { encoding: 'utf-8' }, (err) => {
            (err) ? reject('an error occurred during writeFile method') : resolve('file has been created and list is ready');
        });
    })
    writeFilePromise.then(response => console.log(response)).catch(reject => console.log(reject));
}
module.exports = write;
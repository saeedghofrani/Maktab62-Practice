const fs = require('fs');
///////////////////////////sync//////////////////////
try {
    (fs.openSync('newFile.txt', 'w')) ? console.log('Done') : console.log('try again');
    (fs.existsSync('newFile.txt')) ? console.log('file exists') : console.log('file does not exists');
} catch (error) {
    console.log("" + error);
}


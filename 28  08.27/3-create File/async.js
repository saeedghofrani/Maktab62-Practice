const fs = require('fs');
///////////////////////////async//////////////////////
if (fs.openSync('newFile.txt', 'w'))
    console.log('Done');
else
    console.log('try again');
if (fs.existsSync('newFile.txt'))
    console.log('file exists');
else 
    console.log('file does not exists');

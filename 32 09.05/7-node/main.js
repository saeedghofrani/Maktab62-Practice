const fs = require('fs');
let shalow = (fileOne, fileTwo) => {
    fs.readdir(fileOne, 'utf8', (err, fileContentOne) => {
        if (err) return ('read first file' + err);
        fs.readdir(fileTwo, 'utf8', (err, fileContentTwo) => {
            if (err) return ('read second file' + err);
            if (fileContentOne.length === fileContentTwo.length) {
                for (let i = 0; i < fileContentOne.length; i++) {
                    if (fileContentOne[i] === fileContentTwo[i]) {
                        deep(fileContentOne[i], fileContentTwo[i]);
                    }
                    else {
                        console.log('files are not the same');
                        break;
                    }
                }
            }
            else return 'files are not the same by length';
        });
    });
};
shalow(process.argv[2], process.argv[3]);

let deep = (argOne, argTwo) => {
    fs.readFile(`${process.argv[2]}/${argOne}`, 'utf-8', (err, fileFirst) => {
        if (err) return console.log('reading file One' + err);
        fs.readFile(`${process.argv[3]}/${argTwo}`, 'utf-8', (err, fileSecond) => {
            if (err) return console.log('reading file Two' + err);
            if (fileFirst === fileSecond)
                console.log('Done');
            else console.log('not Dune');
        });
    });
};
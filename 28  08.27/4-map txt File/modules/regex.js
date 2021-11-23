const fs = require('fs');
//read file and use pattern regex//
let regexFile = (file, pattern) => {
    let group = pattern;
    let dataArrray = fs.readFileSync(`${file}`, { encoding: 'utf-8' }).match(/[^\r\n]+/g);
    resultArray = [];
    for (let i = 0; i < dataArrray.length; i++) {
        const element = dataArrray[i];
        resultArray.push(element.match(group));
    }
    return resultArray;
};
module.exports = regexFile;
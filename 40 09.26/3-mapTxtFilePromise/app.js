const checkFile = require('./modules/checkFile.js');
const readFile = require('./modules/readFile.js');
const writeFile = require('./modules/writeFile.js');
const regexMiddleware = require('./tools/regexMiddleware.js');
const mergeData = require('./tools/mergeData.js');
const printData = require('./tools/printData.js');
const numPath = './Text/numbers.txt';
const namePath = './Text/names.txt';
const resPath = './Text/list.txt';
/** 
 ** create a list of user and phone numbers.
 ** IIFE functions.
 * @param {String} numberPath - path of numbers file
 * @param {String} textPath - path of username file
 * @param {String} resultPath - path of result file
*/
const main = (numberPath, textPath, resultPath) => {
    Promise.all([checkFile(textPath), checkFile(numberPath)])
        .then(() => { return Promise.all([readFile(textPath), readFile(numberPath)]); })
        .then(result => {
            const numberArray = regexMiddleware(result[0], /^\d{0,3}|[a-zA-Z0-9$#@!%^&*()_-}{]+/g);
            const nameArray = regexMiddleware(result[1], /^.{0,3}|\b[\+]?[(]?[0-9]{2,6}[)]?[-\s\.]?[-\s\/\.0-9]{0,15}\b/g);
            const rawData = mergeData(numberArray, nameArray);
            const data = printData(rawData);
            const writeFilePromise = writeFile(resultPath, data);
            writeFilePromise.then(console.log('the list is ready'));
        })
        .catch(error => console.log(error));
};
main(numPath, namePath, resPath);
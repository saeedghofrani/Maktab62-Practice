const checkFile = require('./modules/checkFile.js');
const readFile = require('./modules/readFile.js');
const regexMiddleware = require('./tools/regexMiddleware.js');
const mergeData = require('./tools/mergeData.js');
const printData = require('./tools/printData.js');
const writeFile = require('./modules/writeFile.js');
const numPath = './Text/numbers.txt';
const namePath = './Text/names.txt';
const resPath = './Text/list.txt';
/** 
 ** create a list of user and phone numbers.
 *? real example of async await in backend.
 *? when is god time to clean code.
 * @async
 * @param {String} numberPath - path of numbers file
 * @param {String} textPath - path of username file
 * @param {String} resultPath - path of result file
*/
const map = async (numberPath, textPath, resultPath) => {
    if (await checkFile(textPath) && await checkFile(numberPath)) {
        const names = await readFile(textPath);
        const numbers = await readFile(numberPath);
        const numberArray = regexMiddleware(names, /^\d{0,3}|[a-zA-Z0-9$#@!%^&*()_-}{]+/g);
        const nameArray = regexMiddleware(numbers, /^.{0,3}|\b[\+]?[(]?[0-9]{2,6}[)]?[-\s\.]?[-\s\/\.0-9]{0,15}\b/g);
        const rawData = mergeData(numberArray, nameArray);
        const data = printData(rawData);
        writeFile(resultPath, data) ? console.log("the list is ready") : console.log("it apeares to be a problem in writing file");
    }
};
map(numPath, namePath, resPath);


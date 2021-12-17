//modules//
const fs = require('fs');
const regex = require('./modules/regex.js');
const mergeArray = require('./modules/array.js');
const print = require('./modules/print.js');
const write = require('./modules/writePromise.js');

//process//
//regex//merge//write//
try {
    const nameArray = regex('./Text/names.txt', /^\d{0,3}|[a-zA-Z0-9$#@!%^&*()_-}{]+/g);
    const numberArray = regex('./Text/numbers.txt', /^.{0,3}|\b[\+]?[(]?[0-9]{2,6}[)]?[-\s\.]?[-\s\/\.0-9]{0,15}\b/g);
    const result = mergeArray(nameArray, numberArray);
    let data = print(result);
    console.log(result);
    //write file//
    write('./Text/list.txt', data);

} catch (error) {
    console.log("" + error);
}



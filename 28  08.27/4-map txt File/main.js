//modules//
const fs = require('fs');
const regex = require('./modules/regex.js');
const mergeArray = require('./modules/array.js');
const print = require('./modules/print.js');

//process//
//regex//merge//write//
const nameArray = regex('./Text/names.txt', /^\d{0,3}|[a-zA-Z0-9$#@!%^&*()_-}{]+/g);
const numberArray = regex('./Text/numbers.txt', /^.{0,3}|\b[\+]?[(]?[0-9]{2,6}[)]?[-\s\.]?[-\s\/\.0-9]{0,15}\b/g);
const result = mergeArray(nameArray, numberArray);
let data = print(result);
write('./Text/list.txt', data);

//write file//
function write(path , str) {  
    fs.writeFile(path, str, {encoding: 'utf-8'}, (err) => {
        if(err)
            console.log('an error occurred during writeFile method');
        else 
            console.log('file has been created and list is ready');
    });
};

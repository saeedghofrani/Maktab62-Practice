const fs = require('fs');

///////////////////////////////sync///////////////////////////////
// let pluralText = "";
// fs.readFile('./Text/from.txt', { encoding: 'utf8' }, (err, data) => {
//     if (err)
//     console.log('readfile form.txt ' + err);
//     else {
//         pluralText += `${data}`;
//         fs.readFile('./Text/append.txt', { encoding: 'utf8' }, (err, data) => {
//             if (err)
//             console.log('readfile append.txt ' + err);
//             else {
//                 pluralText += ` and ${data}`;
//                 fs.writeFile('./Text/to.txt', String(pluralText), 'utf8', (err) => {
//                     if (err)
//                         console.log('writfile ' + err);
//                 });
//             }
//         });
//     }
// });


//////////////////////////////////sync append////////////////////////////////
// fs.readFile('./Text/from.txt', { encoding: 'utf8' }, (err, data) => {
//     if (err)
//         console.log('readfile form.txt ' + err);
//     else {
//         fs.appendFile('./Text/to.txt', String(data), { encoding: 'utf8' }, function (err) {
//             if (err)
//                 console.log('append to to.txt ' + err);
//         });
//         fs.readFile('./Text/append.txt', { encoding: 'utf8' }, (err, data) => {
//             if (err)
//                 console.log('readfile append.txt ' + err);
//             else {
//                 fs.appendFile('./Text/to.txt', String(data), function (err) {
//                     if (err)
//                         console.log('append to to.txt 2 ' + err);
//                 });
//             }
//         });
//     }
// });


////////////////////////////////async////////////////////////////////
let dataForm = fs.readFileSync('./Text/from.txt', { encoding: 'utf8' });
let dataappend = fs.readFileSync('./Text/append.txt', { encoding: 'utf8' });
fs.appendFileSync('./Text/to.txt', `${dataForm} ${dataappend}`, 'utf8');
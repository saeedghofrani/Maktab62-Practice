"use strict";
const fs = require('fs');
/**
 ** write passed data into a file.
 * @promise
 * @param {String} path - path of the file to write.
 * @param {String|JSON} str - data to implements in file.
 * @returns {true} true.
 * @throws {NotFoundError} When the file does not exists or unreadable.
 */
const writeFile = (path, str) => {
    const promiseFunc = new Promise((resolve, reject) => {
        fs.writeFile(path, str, { encoding: 'utf-8', flags: 'w' }, (err) => {
            (err) ? reject(err) : resolve(true);
        });
    });
    return promiseFunc;
};
module.exports = writeFile;
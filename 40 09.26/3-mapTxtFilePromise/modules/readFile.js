"use strict";
const fs = require("fs");
/**
 ** read data from a file.
 * @promise
 * @param {String} path - of the file to read.
 * @returns {data} content of file.
 * @throws {NotFoundError} When the file does not exists or unreadable.
 */
const readFile = (path) => {
    const promiseFunc = new Promise((resolve, reject) => {
        fs.readFile(`${path}`, { encoding: 'utf-8' }, (err, data) => {
            (err) ? reject(err) : resolve(data);
        });
    });
    return promiseFunc;
};
module.exports = readFile;
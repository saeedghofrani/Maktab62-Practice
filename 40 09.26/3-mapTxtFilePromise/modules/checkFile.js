"use strict";
const fs = require("fs");
/**
 ** check if a file exists.
 * @promise
 * @param {String} path - of the file to check.
 * @returns {true} true.
 * @throws {NotFoundError} When the file does not exists or unreadable.
 */
const checkFile = (path) => {
    const promiseFunc = new Promise((resolve, reject) => {
        fs.access(path, fs.constants.F_OK | fs.constants.R_OK, (err) => {
            (err) ? reject(err) : resolve(true);
        });
    });
    return promiseFunc;
};
module.exports = checkFile;
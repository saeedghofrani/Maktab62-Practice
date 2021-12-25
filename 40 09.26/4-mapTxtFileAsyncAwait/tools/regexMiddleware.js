"use strict";
/**
 ** prepare array of data.
 * @param {Array} data - passed array to prepare.
 * @param {Regex} pattern - regex to be matched against data.
 * @returns {Array} array of prepared dat.
 */
const regexMiddleware = (data, pattern) => {
    const dataArray = data.match(/[^\r\n]+/g);
    const resultArray = [];
    for (const element of dataArray) {
        resultArray.push(element.match(pattern));
    }
    return resultArray;
};
module.exports = regexMiddleware;
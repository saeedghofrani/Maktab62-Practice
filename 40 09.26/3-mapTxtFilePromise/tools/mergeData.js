"use strict";
/**
 ** merge two Array and remove duplicated data.
 * @param {Object} array1 - first array to be merged.
 * @param {Object} array2 - second array to be merged.
 * @returns {array} - result array contain merged data.
 */
const mergeData = (array1, array2) => {
    //remove counters//
    const unique = (a) => {
        for (let i = 0; i < a.length; ++i) {
            for (let j = i + 1; j < a.length; ++j) {
                if (a[i] === a[j])
                    a.splice(j, 1);
            }
        }
        a.splice(0, 1);
        return a;
    };
    //push 2 array in 1//
    const result = [];
    for (let i = 0; i < array1.length; i++) {
        if (array1[i][0] == array2[i][0])
            result.push([...array1[i], ...array2[i]]);
        unique(result[i]);
    }
    return result;
};
module.exports = mergeData;
"use strict";
/**
 ** crate string with proper information about users and numbers.
 * @param {String} result - result data.
 * @param {Object} array - passed array of users and numbers.
 * @returns {reult} string of data.
 */
let result = '';
const data = (array) => {
    for (const element of array) {
        switch (element.length) {
            case 1:
                result += `${element} hasn’t any phone number\n`;
                break;
            case 2:
                result += `${element[0]}’s phone number is ${element[1]}\n`;
                break;
            default:
                let phoneNumbers = '';
                for (let j = 1; j < element.length; j++)
                    phoneNumbers += element[j] + ',';
                result += `${element[0]}’s phone numbers are ${phoneNumbers.substring(0, phoneNumbers.length - 1)}\n`;
                break;
        }
    }
    return result;
};
module.exports = data;

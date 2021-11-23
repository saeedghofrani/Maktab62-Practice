let result = '';
let data = (array) => {
    for (let i = 0; i < array.length; i++) {
        switch (array[i].length) {
            case 1:
                result += `${array[i]} hasn’t any phone number.\n`;
                break;
            case 2:
                result += `${array[i][0]}’s phone number is ${array[i][1]}\n`;
                break;
            default:
                let phoneNumbers = '';
                for (let j = 1; j < array[i].length; j++)
                    phoneNumbers += array[i][j] + ',';
                result += `${array[i][0]}’s phone numbers are ${phoneNumbers.substring(0, phoneNumbers.length - 1)}\n`;
                break;
        }
    }
    return result;
};

module.exports = data;

let mergeArray = (array1, array2) => {
    //remove counters//
    Array.prototype.unique = function () {
        var a = this.concat();
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
    let result = [];
    for (let i = 0; i < array1.length; i++) {
        if (array1[i][0] == array2[i][0]) {
            result.push([...array1[i], ...array2[i]].unique());
        }
    }
    return result;
};
module.exports = mergeArray;

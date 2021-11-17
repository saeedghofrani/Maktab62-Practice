function mergeById(array1, array2) {
    let result = [];
    for (let i = 0; i < array1.length; i++) {
        for (let j = 0; j < array2.length; j++) {
            if (array1[i].uid === array2[j].uid) {
                result.push({ ...array1[i], ...array2[j] });
            }
        }
    };
    return result;
}
function read() {
    console.log(result);
}
//create function//
function create(obj) {
    for (let i = 0; i < result.length; i++) {
        if (result[i].uid === obj.uid) {
            alert(`uid is not unique`);
            return;
        }
    }
    result.push(obj);
    alert(`succesful`);
}
//validation//
function isObjectValid(obj) {
    for (const [key, value] of Object.entries(obj)) {
        if (value === 'undefined' || value === '') {
            return false;
        }
    }
    return true;
}
//update function//
function update(obj) {
    let i = result.findIndex(x => x.uid === obj.uid);
    if (i >= 0) {
        for (const [key] of Object.entries(obj)) {
            result[i][key] = obj[key];
        }
    }
    else
        console.log("object with this UID does not exist!");
}
//delete function//
function _delete(uid) {
    let index = result.findIndex(x => x.uid === uid);
    if (index >= 0) {
        result.splice(index, 1);
        alert("succesful");
    }
    else
        alert(`couldnt find uid ${uid}`)
}
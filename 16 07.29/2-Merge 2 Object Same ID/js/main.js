let personData =
    [
        {
            uid: 1,
            firstName: "Ali",
            lastName: "Mahdavi"
        },
        {
            uid: 2,
            firstName: "Reza",
            lastName: "Shahmardan"
        },
        {
            uid: 3,
            firstName: "Hassan",
            lastName: "Qolami"
        },
        {
            uid: 4,
            firstName: "Morteza",
            lastName: "Hamedani"
        },
        {
            uid: 5,
            firstName: "Sina",
            lastName: "Hejazi"
        },
        {
            uid: 6,
            firstName: "Hadi",
            lastName: "Sadri"
        }
    ]

let additionalPersonData =
    [
        {
            uid: 3,
            position: "UI Designer",
            city: "Biarjmand"
        },
        {
            uid: 1,
            position: "Back-End Develope",
            city: "Taleqan"
        },
        {
            uid: 2,
            position: "Front-End Developer",
            city: "Behbahan"
        },
        {
            uid: 4,
            position: "Devops",
            city: "Shiraz"
        },
        {
            uid: 6,
            position: "Server Admin",
            city: "Tehran"
        },
        {
            uid: 5,
            position: "Product Manager",
            city: "Hamedan"
        }
    ]

// simple function 
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
console.log(mergeById(personData, additionalPersonData));



// used map and find method for merging
let mergedByMap = personData.map(t1 => ({ ...t1, ...additionalPersonData.find(t2 => t2.id === t1.id) }));
console.log(mergedByMap);



// with this function user can choose id
function mergeById_Updated(array1, array2, id) {
    if (!validation(array1, array2, id))
        return `Invalid input`;
    let result = [];
    for (let i = 0; i < array1.length; i++) {
        for (let j = 0; j < array2.length; j++) {
            if (array1[i][id] === array2[j][id]) {
                result.push({ ...array1[i], ...array2[j] });
            }
        }
    };
    return result;
}
function validation(arr1, arr2, id) {
    if (!Array.isArray(arr1) || !Array.isArray(arr2) || arr1.length !== arr2.length)
        return false;
    for (let i = 0; i < arr2.length; i++) {
        if (typeof arr1[i] !== 'object' || Array.isArray(arr1[i]) || arr1[i] === null)
            return false;
        if (typeof arr2[i] !== 'object' || Array.isArray(arr2[i]) || arr2[i] === null)
            return false;
        if(!arr1[i].hasOwnProperty(id) || !arr2[i].hasOwnProperty(id))              
            return false;
        for (let j = 0; j < arr1.length; j++) {
            if (i !== j && (arr1[i][id] === arr1[j][id] || arr2[i][id] === arr2[j][id]))
                return false;
        }
    }
    return true;
}
console.log(mergeById_Updated(personData, additionalPersonData, "uid"));


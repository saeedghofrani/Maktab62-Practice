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
let id5 = {
    uid: 5,
    country: "iran"
}
let id9 = {
    uid: 9,
    country: "iran"
}
let existId = {
    uid: 3,
    firstName: `hhhhhhhhhhhh`,
    country: "iran"
}
let notExist = {
    uid: 10,
    firstName: `saeed`
}
//main function
function mergeById(array1, array2) {
    let res = [];
    for (let i = 0; i < array1.length; i++) {
        for (let j = 0; j < array2.length; j++) {
            if (array1[i].uid === array2[j].uid) {
                res.push({ ...array1[i], ...array2[j] });
            }
        }
    };
    return res;
}
let result = mergeById(additionalPersonData, personData);
console.log(result);



//read function exclusive for result
function read() {
    console.log(result);
}
read();

//create function
function create(obj) {
    for (let i = 0; i < result.length; i++) {
        if (result[i].uid === obj.uid) {
            console.log(`uid is not unique`);
            return;
        }
    }
    result.push(obj);
}
create(id5);
read();
create(id9);


//update function
function update(obj) {
    let i = result.findIndex(x => x.uid === obj.uid);
    if (i >= 0) {
        for (const [key, value] of Object.entries(obj)) {
            result[i][key] = obj[key];
        }
    }
    else
        console.log("object with this UID does not exist!");
}
update(existId);
read();
update(notExist);

//delete function
function _delete(uid) {
    let index = result.findIndex(x => x.uid === uid);
    if (index >= 0) {
        result.splice(index, 1);
        console.log("succesful");
    }
    else
        console.log(`couldnt find uid ${uid}`)
}
_delete(1);
read();
_delete(100)




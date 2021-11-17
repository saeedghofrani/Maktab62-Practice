//kind of database//
let personData =
    [
        {
            uid: 1,
            firstName: "Ali",
            lastName: "Mahdavi",
            postal_Code: 2345672345,
            Phone_Number: 092114545
        },
        {
            uid: 2,
            firstName: "Reza",
            lastName: "Shahmardan",
            postal_Code: 23456726548,
            Phone_Number: 09211455858
        },
        {
            uid: 3,
            firstName: "Hassan",
            lastName: "Qolami",
            postal_Code: 2345677777,
            Phone_Number: 09211454777
        },
        {
            uid: 4,
            firstName: "Morteza",
            lastName: "Hamedani",
            postal_Code: 2345672888,
            Phone_Number: 0921145451111
        },
        {
            uid: 5,
            firstName: "Sina",
            lastName: "Hejazi",
            postal_Code: 2345672999,
            Phone_Number: 09211959595
        },
        {
            uid: 6,
            firstName: "Hadi",
            lastName: "Sadri",
            postal_Code: 234567222,
            Phone_Number: 0921188888
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
//merging arrays//
let result = mergeById(personData, additionalPersonData);
// use for table head data
let objData = Object.keys(result[0]);
let rowsCount = 0;
//create table //
initGUI();
tableCreation();
registerEvents();

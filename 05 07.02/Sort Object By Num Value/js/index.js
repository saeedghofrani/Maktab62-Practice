"use strict"
let mainOperator = 
{
    firstName : "saeed",
    lastName : "ghofrani",
    age : 50,
    male : true
};
let sameOperator = 
{
    firstName : "saeed",
    lastName : "ghofrani",
    age : 50,
    male : true
};
let diffrentOperator = 
{
    firstName : "saeed",
    lastName : "ghofrani ivari",
    age : 23,
    male : false,
};
let lengthOperator = 
{
    firstName : "saeed",
    lastName : "ghofrani",
    age : 50,
    male : true,
    female : false
};
let wrongoperator = 
{
    firstName : "saeed",
    lastName : "ghofrani",
    age : 50,
    male : true,
    female : false
};
let fakeOperator = ["sasas", 454, true];
let employees = [
    {
        firstName: 'John',
        lastName: 'Doe',
        id: 254457,
        age : 54,
        joinedDate: 'December 15, 2017'
    },

    {
        firstName: 'Ana',
        lastName: 'Rosy',
        id: 254545,
        age : 88,
        joinedDate: 'January 15, 2019'
    },

    {
        firstName: 'Zion',
        lastName: 'Albert',
        id: 354540,
        age : 22,
        joinedDate: 'February 15, 2011'
    }
];
// simple quick fast not dynamic
function simpleSort (array)
{
    let lastArray = array.sort((a, b) => parseFloat(a.id) - parseFloat(b.id));
    console.log(lastArray)
}
// simpleSort(employees);
// more general and efficient way to sort objects
function generalSort(array, propName)
{
    if (!Array.isArray(array))
        console.log("Invalid input for array")
    for (let i = 0; i < array.length; i++)
    {
        if (typeof(array[i]) !== "object")
            console.log("Invalid input")
    }
    for (let j = 0; j < array.length; j++)
    {
        if (!array[j].hasOwnProperty(propName))
            console.log(" object " + (j + 1) + " is not valid")
    }
    let lastArray = array.sort((a, b) => parseFloat(a[propName]) - parseFloat(b[propName]));
    console.log(lastArray);
}
// generalSort(employees, "age");
// generalSort(employees, "id");
generalSort(employees, "firstName");


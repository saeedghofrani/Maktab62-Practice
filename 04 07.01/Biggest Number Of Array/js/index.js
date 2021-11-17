"use strict"
function max(array, num = 1)
{ 
    if(!checkArrayForError(array, num))
        return;
    let x = array.sort((a, b) => a - b);
    for (let i = 0; i < num; i++)
    {
        console.log(x[array.length-1-i]);
    }
}
function checkArrayForError(array, num)
{
    let isArray = true;
    if (!Array.isArray(array))
    {
        console.log("invalid input for array");
        isArray = false;
    }
    let isNumber = true;
    if (typeof(num) !== "number")
    {
        console.log("invalid input for number");
        isNumber = false;
    }    
    let lengthNumber = true;
    if ( isArray && isNumber && num > array.length)
    {
        console.log("number is grater than arrays length");
        lengthNumber = false;
    }
    if (isNumber && num < 0)
    {
        console.log("invalid input for number, must be greater than 0");
        isNumber = false;
    }
    let isArrayNum = true;
    for(let i=0;i<array.length;i++)
    {
        if(typeof(array[i])!=="number")
        {
            console.log("invalid type at item "+(i+1));
            isArrayNum = false;
        }
    }
    return isArray && isNumber && lengthNumber && isArrayNum;
} 
max([1,5,3,4,15], 1);
max([1,5,3,4,15]);
max([1,5,3,4,15], -1);
max([1,5,3,4,15], "");
max([1,5,3,4,""], "");
max("2525252", 5);
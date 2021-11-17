let operator = 
{
    firstName : "saeed",
    lastName : "ghofrani",
    age : 50,
    male : true
}
let fakeOperator = ["sasas", 454, true];
function isObject(any)
{
    return Object.prototype.toString.call(any) === "[object Object]";
}
function objectVal(object)
{
    if (isObject(object))
    {
        for (let value of Object.values(object)) 
        {
            console.log(value);
        }
    }
    else
        console.log("this isn`t an Object")
}
objectVal(operator);
objectVal(fakeOperator);






/*
console.log(operator);
console.log(operator["money"]);
for (const iterator of object) {
    Array
}
for (const key in object) 
{
        const element = object[key];
}
object,assign();
array.forEach(element => {
    
});
let a = operator["string"];
console.log(a);
*/
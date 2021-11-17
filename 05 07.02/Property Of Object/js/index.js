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
function objectPro(object)
{
    if (isObject(object))
    {
        let prop = Object.getOwnPropertyNames(object);
        console.log(prop);
    }
    else
       console.log("its not an object")
}  
objectPro(operator);
objectPro(fakeOperator);


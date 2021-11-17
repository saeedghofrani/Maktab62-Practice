let operator = 
{
    firstName : "saeed",
    lastName : "ghofrani",
    age : 50,
    male : true
}
function pairObj (object)
{
    if ( Object.prototype.toString.call(object) === "[object Object]")
    console.log(Object.entries(object));
}
pairObj(operator)

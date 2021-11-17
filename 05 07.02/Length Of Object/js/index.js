let operator = 
{
    firstName : "saeed",
    lastName : "ghofrani",
    age : 50,
    male : true
}
function lengthObj (object)
{
    let count = 0;
    for (key in operator) 
    {
        if (operator.hasOwnProperty(key))
        count++;
    }
    console.log(count);
}
lengthObj(operator);



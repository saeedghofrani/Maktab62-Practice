let operator = 
{
    firstName : "saeed",
    lastName : "ghofrani",
    age : 50,
    male : true
}

function changePlace (object)
{
    let newObj = {};
    for (var key in operator)
    {
        newObj[object[key]] = key;
    }
    console.log(newObj)
}
changePlace(operator);


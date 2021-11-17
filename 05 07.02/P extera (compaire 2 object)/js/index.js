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
let fakeOperator = ["sasas", 454, true];


// function below will work if 2 object have same order //
/*function compairObj(object1, object2)
{
    if (JSON.stringify(object1) === JSON.stringify(object2))
        console.log("true");
    else
        console.log("false");
}
compairObj(operator, operator1);*/

function compairObj2 (object1, object2)
{
    let bothObj = true;
    let lengthObj = true;
    if (typeof(object1) !== "object" || typeof(object2) !== "object")
    {
        console.log("they are not the same, not object");
        bothObj = false;
    }
    if (bothObj == true && Object.keys(object1).length !== Object.keys(object2).length)
    {
        console.log("they are not the same, different length");
        lengthObj = false;
    }
    if (lengthObj == true && bothObj == true)
    {
        for(var key in object1)
        {
            if(!object2.hasOwnProperty(key) || object1[key]!==object2[key])
            {
                console.log("they are not the same, key-value mismatch")
                return;
            }
        }
    }
    if (lengthObj && bothObj)
    {
        console.log("they are the same");
    }
}
compairObj2(mainOperator, sameOperator);


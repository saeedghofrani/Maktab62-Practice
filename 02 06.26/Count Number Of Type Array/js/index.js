let arrayInput = ["ssssss", "aaaaaa",55 , false, [22, 55]];
function arrayCount(array)
{
    let str = 0;
    let boo = 0;
    let num = 0;
    let arr = 0;
    for (let i = 0; i < array.length; i++)
    {z
        switch (typeof array[i])
        {
            case "string":
            {
                str++;
                break;
            }    
        
            case "boolean":
            {
                boo++;
                break;

            }
       
            case "number":
            {
                num++;
               break;
            }
            case Array.isArray(array[i]):
            {
                arr++;
            }
        }
    }
    console.log("string "+ str);
    console.log("boolean " + boo);
    console.log("number " + num);
    console.log("array " + arr);   
}
arrayCount(arrayInput);




/*
console.log(typeof a[i]);
if ( typeof a[i] === "string" )
s++;
else if (typeof a[i] === "boolean")
b += 1;
else if (typeof a[i] === "number")
n += 1;
else if (typeof a[i] === "object")
r += 1;
*/
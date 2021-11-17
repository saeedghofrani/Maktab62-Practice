let test = [10, [25, 13], [14, [55]], 2];
//recursive function !!!!!!!!!!!
function arrayDepthPlus(array) 
{
    let merged = [];
    for (let x = 0, len = array.length; x < len; x++)
    {
        if (Array.isArray(array[x]))    
        {
            let temp = arrayDepthPlus(array[x]);
            for (let i = 0; i < temp.length; i++)
            {
                merged.push(temp[i])
            }
        }
        else
            merged.push(array[x])
    }
    return merged;
};




// simple function without recursive !!!!!!!!!!!!
function flatArray(array)
{
    let i = 0;
    while (i < array.length)
    {
        if (Array.isArray(array[i]))
        {
            array.push(...array[i])
            array = array.filter(item => item !== array[i]);
        }
        else
            i++
    }
    return array;
}
console.log(test);
console.log(arrayDepthPlus(test));
console.log(flatArray(test));










// function below work with reduce method that would execute on each element of the array, passing in the return value from the calculation on the element and concat inner array!!!!!!!!!!!!
// function flatten(arr) 
// {
//     return arr.reduce(function (flat, toFlatten) 
//     {
//       return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
//     }, []);
// };
// console.log(flatten(test));

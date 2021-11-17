let array = [10, [25, 13], [14, [55]], 2];
let test = [2, [2]]
function arrayDepth(arrayD, count = 1) 
{
    let max = count;
    for (let x = 0, len = arrayD.length; x < len; x++)
    {
        if (Array.isArray(arrayD[x]))
        {
            let depth = arrayDepth(arrayD[x], count + 1);
            if(depth > max)
            {
                max = depth;
            }
        }
    }
    return max;
};
// function below : with if statment check if there's array in array and if there is it sums it up with 1 to count depth then spread it with ... and with map function make it recursive and for stop else statement return 0
function getArrayDepth(arrayD) 
{
    return Array.isArray(arrayD) ? 1 + Math.max(...arrayD.map(getArrayDepth)) :
      0;
};
console.log(array);
console.log(getArrayDepth(array));
console.log(arrayDepth(array));
console.log(array);
console.log(arrayDepth(test));
console.log(test);


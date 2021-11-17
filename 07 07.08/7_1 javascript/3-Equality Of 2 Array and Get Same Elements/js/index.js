let first = [[1, 2, 3],"ali", "reza", 1, 1, [3, 2, 1]];
let second = [ "ali" , true, 1, 100, 1, [1,3,2]];
// isEqual() function used 
function find(arrayA, arrayB) 
{
    let newArray = []
    for (let i = 0; i < arrayA.length; i++)
    {
        for (let j = 0; j < arrayB.length; j++)
        {    
            let cond1 = Array.isArray(arrayA[i]) && Array.isArray(arrayB[j]) && isEqual(arrayA[i],arrayB[j]);
            let cond2 = arrayB[j] === arrayA[i];
            if ((cond1 || cond2) && (!newArray.includes(arrayA[i])))
            {
                newArray.push(arrayB[j]);
            }
        } 
    }
    return isDuplicate(newArray);
}
function isEqual(arrA, arrB)
{
    if (arrA.length != arrB.length)
    {
        return false;
    }
    for (let i = 0; i < arrB.length; i++)
    {
        let flag = false;
        for (let j = 0; j < arrA.length; j++)
        {
            if (arrB[i] === arrA[j])
            {
                flag = true
                break;
            }
        }
        if (!flag)
        {
            return false;
        }
    }
    return true;
}
function isDuplicate(array)
{
    dupArray = []
    for (let i = 0; i < array.length; i++)
    {
        if (!dupArray.includes(array[i]))
        {
            dupArray.push(array[i])
        }
    }
    return dupArray;
}
console.log(find(first, second));

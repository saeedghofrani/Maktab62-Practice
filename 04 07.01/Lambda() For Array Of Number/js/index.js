function sortAsc(array)
{
    if (!Array.isArray(array))
    {
        console.log("invalid input");
        return;
    }
    for (let i = 0; i < array.length - 1; i++)
    {
        for (let j = i + 1; j < array.length; j++)
        {
            if (array[i] > array[j])
            {
                let temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
        }
    }
    return array;
}
console.log(sortAsc([1, 5, 4, 8944, 9, 2, 3]));
console.log(sortAsc([1, 5, 4, "", true, false,  undefined, -1, -122, 9, 2, 3]));

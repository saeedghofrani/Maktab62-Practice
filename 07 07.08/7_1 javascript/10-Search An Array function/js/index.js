// this function will also find array in an array but !!!!!!i couldn't find a way to specify the index of []!!!!!
function searchArray(array = [], item = 0)
{
    let index = "";
    if (Array.isArray(item))
    {
        let obj = {};
        for(let i = 0 ; i < array.length; i++) 
        {
            obj[array[i]] = i;
        }
        if(obj.hasOwnProperty(item))
        {
            return "yes" 
        }
    }
    for (let i = 0; i < array.length; i++)
    {
        if (array[i] === item)
        {
            index += i+1;
        }
    }
    if (index.length === 0)
    {
        return "not found";
    }
    if (index.length > 1)
    {
        return "index: " + index.split("").join(" and ");
    }
    return "index: " + index + 1;
}
console.log(searchArray(["hello", 20, "a", "hi", "a"], "a"));
console.log(searchArray());
console.log(searchArray(["hello", 20, [5], "a", "hi", "a",], [5]));



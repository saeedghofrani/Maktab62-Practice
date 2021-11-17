function largest(array)
{
    let larg = Number.MIN_VALUE;
    let flag = true;
    let invaid = [];
    for (let i = 0; i < array.length; i++)
    {
        if (typeof(array[i]) !== "number")
        {
            flag = false;
            invaid.push(i);
        }
        if (array[i] > larg)
        {
            larg = array[i]
        }
    }
    if (flag)
    {
        return larg
    }
    else
    {
        return "index " + invaid + " of array contain Nun-numbrical value"
    }
}
console.log(largest([5, 4, 1, 100, 1, 100, ""]));
console.log(largest([5, 4, 1, 100, 1, 100, 100]));
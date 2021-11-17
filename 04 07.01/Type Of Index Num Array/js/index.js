function type(array, num)
{
    if (!Array.isArray(array))
        return "Invalid input";
    else if (typeof(num) !== "number")
        return "Invalid input";
    else if (num >= array.length)
        return "Chosen number is grater than arrays length!";
    else if (num < 0)
        return "Number should be grater than 0";
    else if (Array.isArray(array[num]))
        return "array";
    else 
        return typeof(array[num]);
}
console.log(type([1, "sdfsd", 65, true, " "], 4));
console.log(type([1, "sdfsd", 65, true, " "], -1));
console.log(type([1, "sdfsd", 65, true, " "], ""));
console.log(type("1,sdfsd,65,true", 4));
console.log(type([1, "sdfsd", 65, true, []], 4));

function type(input)
{
    if ( Array.isArray(input))
        return "Array";
    else 
        return typeof(input);
}
console.log(type([]));
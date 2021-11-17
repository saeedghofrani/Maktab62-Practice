function compairReverseString(str) 
{
    let rev = str.split("").reverse().join("");
    if (rev == str)
    {
        return true;
    }
    return false;
}
console.log(compairReverseString("d  d"));
console.log(compairReverseString("dsad"));
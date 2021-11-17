let strInput = "aaa555sssss"
function middle(str)
{
    let half = Math.floor(str.length / 2);
    if (str.length == 2 || str.length == 1)
    {
        console.log("Unable");
    }
    else if ( str.length % 2 == 0)
    {
        console.log("number is EVEN");
    }
    else
    {
        let x = str.slice(half - 1, (half+2))
        console.log(x)
    } 
}
middle(strInput);





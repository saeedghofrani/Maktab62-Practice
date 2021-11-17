let a = [12, 45, 87, "dfsfd", "sfsd", 0, false, " ", 0, 0, undefined];
function remove(array)
{
    for (let i = 0; i < a.length; i++)
    {
        switch (array[i])
        {
            case false:
            console.log(delete a[i]);
            case 0:
            console.log(delete a[i]);
            case " ":
            console.log(delete a[i]);
            case undefined:
            console.log(delete a[i]);
        } 
    }
    console.log(a)
}
remove(a);



/*
if (a[i] == false ||a[i] == 0 || a[i] == " " || a[i] == undefined)
    {
        console.log(delete a[i])
    }
if (true )
{
    console.log("1");
}
if (false )
{
    console.log("1");
}
if ("")
{
    console.log("1");
}
if (undefined)
{
    console.log("1");
}
*/
let strInput = "SDHDdlkgD"
function stringChange(str)
{
    let str_prim = "";
    for (let i = 0; i < str.length; i++)
    {
        if (str.charCodeAt(i) > 96)
        {
            str_prim += str[i].toUpperCase();
        }
        else 
        {
            str_prim += str[i].toLowerCase();
        }
    }
    console.log(str_prim);
}
stringChange(strInput);







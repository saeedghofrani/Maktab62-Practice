let strInput = "  never give up  ";
let x;
function upperCase (str)
{
    let nStr = "";
    nStr += str.charAt(0).toUpperCase();
    for (let i = 1; i < str.length; i++)
    {
        if (str.charCodeAt(i) == 32)
        {
            nStr +=" "+ str[i+1].toUpperCase();
            i++;
        }
        else
        {
           nStr += str[i];
        }
        console.log(delete nStr[i+2])
    }
    console.log(nStr);
}
upperCase(strInput);


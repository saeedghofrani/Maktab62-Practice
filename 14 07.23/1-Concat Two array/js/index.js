let o = ["rd", "th", "nd", "st"];
let color = ["blue", "red", "yellow", "green", "purple", "black", "orange", "pink", "gray"];
function plusArr(ordinal, colors) 
{
    // 2 way swutch case and else if;!!!!!!!!
    let result = "Result -> \n";
    if (!Array.isArray(ordinal) || !Array.isArray(colors))
    {
        return `Invalid Input`;
    };
    for (let i = 0, len = colors.length; i < len; i++) 
    {
        switch (i) 
        {
            case 0:
                //result += (i + 1) + ordinal[3] + " choice is " + color[i] + '\n';
                result += `${i + 1}${ordinal[3]} choice is ${colors[i]}\n`;
                break;
            case 1:
                //result +=  (i + 1) + ordinal[3] + " choice is " + color[i] + '\n';
                result += `${i + 1}${ordinal[2]} choice is ${colors[i]}\n`;
                break;
            case 2:
                //result +=  (i + 1) + ordinal[3] + " choice is " + color[i] + '\n';
                result += `${i + 1}${ordinal[0]} choice is ${colors[i]}\n`;
                break;
            default:
                //result +=  (i + 1) + ordinal[3] + " choice is " + color[i] + '\n';
                result += `${i + 1}${ordinal[1]} choice is ${colors[i]}\n`;
                break;
                
        }
        // if (i === 0) 
        // {
        //     //result +=  (i + 1) + ordinal[3] + " choice is " + color[i] + '\n';
        //     result += `${i + 1}${ordinal[3]} choice is ${colors[i]}\n`;
        // } 
        // else if (i === 1) 
        // {
        //     //result +=  (i + 1) + ordinal[3] + " choice is " + color[i] + '\n';
        //     result += `${i + 1}${ordinal[2]} choice is ${colors[i]}\n`;
        // }
        // else if (i === 2) 
        // {
        //     //result +=  (i + 1) + ordinal[3] + " choice is " + color[i] + '\n';
        //     result += `${i + 1}${ordinal[0]} choice is ${colors[i]}\n`;
        // }
        // else 
        // {
        //     //result +=  (i + 1) + ordinal[3] + " choice is " + color[i] + '\n';
        //     result += `${i + 1}${ordinal[1]} choice is ${colors[i]}\n`;
        // }
    };
    return result
}
console.log(plusArr(o, color));

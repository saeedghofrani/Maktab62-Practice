"use strict"
let text = "s aeed       dghhoofrani ivai i iran"
console.log(removeDuplicate2(text));
function removeDuplicate2(string)
{
    let space = "";
    let newString = "";
    let current = 0;
    let next = 1;
    while(next <= string.length)
    {
        if(string[next] === " ")
        {
            next++;
            space = " ";
        }
        else
        {
            if(string[current] !== string[next])
            {
                newString += string[current] + space;
                space = "";
            }
            current = next;
            next++;
        }
    }
    return newString;
}




/*
function removeDuplicate1(string)
{
    let newString = "";
    for (let i = 0; i < string.length; i++)
    {
        if (string[i + 1] === " ")
        {
            newString += string[i] + " ";
            if (string[i] !== string[i+2])
            {
                i = i+1;
            }
            else if (string[i] === string[i+2])
            {
                i = i+2;
            }
        }
        else if (string[i] !== string[i + 1])
        {
            newString += string[i];
        }
    }
    return newString;
}*/

// console.log(removeDuplicate1(text));















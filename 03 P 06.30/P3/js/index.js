"use strict"
let num = prompt("number :");
let x = [];
for (let i = 0; i < num; i++)
{
    x.push(prompt("light mod"));
}
let co = changeMod(x);
function changeMod (lightMode)
{
    let count = 0;
    for (let i = 0; i < lightMode.length - 1; i++)
    {
        if (lightMode[i] !== lightMode[i + 1])
        {
            count++;
        }
    }
    return count;
}
document.write(co);


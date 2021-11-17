"use strict"
function birthDay (dayOfBorn, chosenNumber)
{
    let Factorial  = 1;
    let count = 0;
    for (i = 1; i - 1 < dayOfBorn; i++)
    {
        Factorial  = Factorial * i;
    }
    let fac = Factorial.toString();
    console.log(fac);
    for (let j = 0; j < fac.length; j++)
    {   
        if (chosenNumber === fac[j])
        {
            count++
        }
    }
    document.write(count);
}

birthDay (prompt("day"), prompt("number"))
function mistake(strShow, strInput)
{
    let mis = 0;
    for (let i = 0; i < strShow.length; i++)
    {
        if (strShow[i] !== strInput[i])
        {
            mis++;
        }
    }
    console.log(mis);
}
mistake(prompt("input1"), prompt("input2"));

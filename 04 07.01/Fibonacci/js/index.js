function Fibonacci(num = 10)
{
    let n1 = 1;
    let n2 = 1;
    let nextTerm;
    if (typeof(num) !== "number")
        console.log("Please inter a valid number");
    else if (Math.sign(num) === -1)
        console.log("Please inter a valid number.");
    else if (num === 1)
    {
        console.log(n1);
        return;
    }
    else if (num === 2)
    {
        console.log(n1, n2);
        return;
    }
    else 
    {
        for (let i = 1; i <= num; i++) 
        {
            console.log(n1);
            nextTerm = n1 + n2;
            n1 = n2;
            n2 = nextTerm;
        }
    }
}
//Fibonacci("");
Fibonacci(5.2);
//Fibonacci(-5);
//Fibonacci();


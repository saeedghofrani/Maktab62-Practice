function Game()
{
    let maxNum = prompt("please inter range of number") ;
    function mainGame(MaximumRange)
    {
        let guessTime = guessTimes(MaximumRange);
        let randomeNumber = randomNum(MaximumRange);
        console.log(randomeNumber);
        console.log("you can guess " + guessTimes(MaximumRange) + " times");
        let i = 1;
        let flag = true;
        while (i <= guessTime)
        {
            let guessedNummber = prompt("please inter your choosen number ");
            console.log("step " + i);
            if (guessedNummber < 0)
            
            {
                return "you lost"
            }
            if ((typeof(guessedNummber)) === "number")
            {
                return "you lost"
            }
            if (guessedNummber === null)
            {
                return "you lost"
            }
            if (guessedNummber < randomeNumber)
            {
                console.log("More than " + guessedNummber);
                i++
            }
            else if (guessedNummber > randomeNumber)
            {
                console.log("less than " + guessedNummber);
                i++
            }
            else if (guessedNummber == randomeNumber)
            {
               flag = false;
               return console.log("you win");
            }
        }
        if (!flag) 
        {
            console.log("you win");
        }
        else (flag)
            console.log("you lost");
    };
    function randomNum(Maxrange)
    {
        return Math.floor(Math.random() * Maxrange);
    };
    function guessTimes(Maximum)
    {
        let count = 0;
        if (Maximum % 2 == 0)
        {
            while(Maximum > 0)
            {
                Maximum = Math.floor(Maximum / 2);
                count++;
            }
        }
        else 
        {
            Maximum--;
            while(Maximum > 0)
            {
                Maximum = Math.floor(Maximum = Maximum / 2);
                count++;
            }
        }
        return count;
    };
    return mainGame(maxNum);
}
Game();

/*
let Maximum = prompt("please inter range of number")
let gusse;
let pleaseGusse;
let randomNum;
let guessTime = (function gusseTime(num)
{
    let count = 0;
    if (n % 2 == 0)
    {
        while(num > 0)
        {
            num = num / 2;
            count++;
        }
    }
    else 
    {
        num--;
        while(num > 0)
        {
            num = num / 2;
            count++;
        }
    }
});
console.log( "you can guess " + guessTime);

for (let i = 0; i < maxGusse; i++)
{
    pleaseGusse = prompt("peek anumber");
    if (typeof(pleaseGusse) !== "number")
    {
        alert("you lost")
    }
    if (pleaseGusse > 0)
    {
        alert("you lost")
    }
    // if ()
}
*/
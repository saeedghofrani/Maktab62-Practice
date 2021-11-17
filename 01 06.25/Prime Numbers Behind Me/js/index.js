let q = 654
function prime (num)
{
    for ( let n = 1; n< num; n++)
    {
        if (n == 1)
        {
            console.log();
        }
        let flag = true;
        for (let i = 2; i <= n/2; i++) 
        {
            if (n % i == 0) 
            {
                flag = false;
                break;
            }
        
        }
        if (flag)
        console.log(n);  
    }
}
prime(q);




/*var a = 10;
 for (var f = 0; f <= a; f++) {
     for (var j = 2; j <= f/2; j++) {
         if (f % j == 0) console.log(f);

     }
 }
*/
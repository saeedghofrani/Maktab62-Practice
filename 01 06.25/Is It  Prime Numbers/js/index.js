var n = 54;

if (n == 1)
{
    console.log("its neither")
}
let flag = true;
for (let i = 2; i <= n/2; i++) 
{
    if (n % i == 0) 
    {
        console.log("its not prime number")
        flag = false;
        break;
    }

}
if (flag)
console.log("its prime number");
    
/*let n = 1234;
function reverse(n)
{
    while(n != 0)
    {
    let r = n % 10;
    var p = p * 10 + r;
    n = n / 10;
    }
    return p
}
console.log(reverse(n));
  */


let x = 1234;
function recessive(num)
{
  let p = 0;
  while(num != 0)
  {
      let r = num % 10;
      p = p * 10 + r;
      num = Math.floor(num / 10);
  }
  console.log(p);
}
recessive(x);











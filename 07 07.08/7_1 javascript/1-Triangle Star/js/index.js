function trianglePerymed(shape, num)
{
  if (!validation(num))
  {
    return "please inter a valid number"
  }
  let str = ""
  for (let i = 1; i <= num; i++) 
  {
    for (let j = 1; j <= num - i; j++) 
    {
      str += " ";
    }
    for (let x = 0; x < i ; x++) 
    {
      if (x == i - 1)
        str += shape ;
      else 
        str += shape + " ";
    }
    str += "\n";
  }
  return str;
}
function validation(num)
{
  if (typeof(num) === "number" && num > 0 )
  {
    return true;
  }
}
console.log(trianglePerymed("#", 4));
console.log(trianglePerymed("#", -4));
console.log(trianglePerymed("#", "s"));































/*
function triangleHalfPerymed(shape, num)
{
  let str = "";
  for (let i = 1; i <= num; i++)
  {
    for (let j = 1; j <= num - i; j++)
    {
      str += " ";
    }
    for (let x = 0; x < i; x++)
    {
      str += shape ;
    }
    str += "\n";
  }
  return str;
}
console.log(triangleHalfPerymed("*", 5));
function trianglePerymedNoSpace(shape, num)
{
  let str = ""
  for (let i = 1; i <= num; i++) 
  {
    for (let j = 1; j <= num - i; j++) 
    {
      str += " ";
    }
    for (let x = 0; x < 2 * i - 1 ; x++) 
    {
      str += shape ;
    }
    str += "\n";
  }
  return str;
}
console.log(trianglePerymedNoSpace("*", 5));
function trianglePerymedNoSpaceReverce (shape, num)
{
  let str = "";
  for (let i = 0; i <= num; i++)
  {
    for (let j = 2 * i - 1; j > 0; j--)
    {
      str += shape;
    }
    for (let x = 0; x < num; x++)
    {
      str += " ";
    }
  }
  return str;
}
console.log(trianglePerymedNoSpaceReverce("*", 5))*/
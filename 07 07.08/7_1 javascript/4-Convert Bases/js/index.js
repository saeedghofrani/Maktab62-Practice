// function below will return a reverse answer and reversStr() function reverse it 
function convertBases(Base10num, base)
{
  let str = "";
  if (Base10num < 0)
    return "false"
  while (Base10num > 0)
  {
    let digit = Base10num % base;
    let reminder = Math.floor(Base10num / base);
    str += digit;
    Base10num = reminder;
  }
  console.log(reversStr(str));
}
function reversStr(str)
{
  let splitString = str.split(""); 
  var reverseArray = splitString.reverse();
  var joinArray = reverseArray.join("");
  return joinArray;
}
convertBases(100, 2)
function largestStr(str)
{
    strSplit = str.split(" ");
    strSplit.sort((a, b) => b.length - a.length);
    console.log(strSplit[0]);
}
largestStr("Web Development Tutorial");

function find_longest_word(str)
{
  let array1 = str.match(/\w[a-z]{0,}/gi);
  let result = array1[0];

  for(let x = 1 ; x < array1.length ; x++)
  {
    if(result.length < array1[x].length)
    {
    result = array1[x];
    } 
  }
  return result;
}
console.log(find_longest_word('Web Development Tutorial'));
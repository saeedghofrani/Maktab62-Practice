function mostRepeat(array) 
{
    var most = -1;
    let index = [];
    for (let i = 0; i < array.length; i++) 
    {
        let value = searchArray(array, array[i]);
        if (value === most && !index.includes(array[i]))
        {
            index.push(array[i]);
        } 
        else if (value > most) 
        {
            most = value;
            index = [array[i]];
        }
    }
    return index + " (" + most + " times" + ")";
}
function searchArray(array, item)
{
    let count = 0;
    for (let i = 0; i < array.length; i++)
    {
        if (array[i] === item)
        {
            count += 1;
        }
    }
    return count;
}
console.log(mostRepeat(["b", "b", "1", "1", "a", "9", "1", "a", "w", "w"]));


// function modeString(array) 
// {

//     if (array.length == 0) return null;
//     var modeMap = {},
//       maxEl = array[0],
//       maxCount = 1;
  
//     for (var i = 0; i < array.length; i++) {
//       var el = array[i];
  
//       if (modeMap[el] == null) modeMap[el] = 1;
//       else modeMap[el]++;
  
//       if (modeMap[el] > maxCount) {
//         maxEl = el;
//         maxCount = modeMap[el];
//       } else if (modeMap[el] == maxCount) {
//         maxEl += "&" + el;
//         maxCount = modeMap[el];
//       }
//     }
//     return maxEl;
// }
// console.log(modeString("aaaasd1112547dw8ewwww"))


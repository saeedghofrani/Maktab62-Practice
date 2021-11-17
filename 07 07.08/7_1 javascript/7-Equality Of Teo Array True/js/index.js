let first = [
    [1, 2, 3], "reza", 1, "ali", ""
];
let second = ["ali", "reza", 1, "", [1, 2, 3]];
console.log(isEqualMain(first, second));
// the place of items in this function won't matter, also if there is an array inside array it will work 
function isEqualMain(arrayA, arrayB) {
    for (let i = 0; i < arrayA.length; i++) {
        {
            for (let j = 0; j < arrayB.length; j++) {
                let cond1 = Array.isArray(arrayA[i]) && Array.isArray(arrayB[j]) && isEqualInner(arrayA[i], arrayB[j]);
                let cond2 = arrayB[j] === arrayA[i];
                if ((cond1 || cond2)) {
                    return true
                }
            }
        }
        return false;
    }
}

function isEqualInner(arrA, arrB) {
    if (arrA.length != arrB.length) {
        return false;
    }
    for (let i = 0; i < arrB.length; i++) {
        let flag = false;
        for (let j = 0; j < arrA.length; j++) {
            if (arrB[i] === arrA[j]) {
                flag = true
                break;
            }
        }
        if (!flag) {
            return false;
        }
    }
    return true;
}



















// function isEqual(arrA, arrB)
// {
//     let flag2 = true;
//     let flag4 = true;
//     if (arrA.length !== arrB.length)
//     {
//         return false;
//     }
//     for (let i = 0; i < arrA.length; i++)
//     {
//         let flag = false;
//         for (let j = 0; j < arrA.length; j++)
//         {
//             if (Array.isArray(arrA[i]) === Array.isArray(arrB[j]) && Array.isArray(arrA[j]) === Array.isArray(arrB[i]) && arrB[i].length == arrA[j].length)
//             {
//                 let flag3 = false;
//                 for (let x = 0; x < arrA.length; x++)
//                 {
//                     for (let y = 0; y < arrA.length; y++)
//                     {
//                         if (arrA[i][x] === arrB[j][x] && arrB[i][x] === arrA[j][x])
//                         {
//                             flag3 = true
//                             break;
//                         }
//                     }
//                     if (!flag3)
//                     {
//                         flag4 = false;
//                         return false;
//                     }
//                     if (flag4)
//                     {
//                         return true;
//                     }
//                 }
//             }
//             if (arrA[i] === arrB[j] && arrB[i] === arrA[j])
//             {
//                 flag = true;
//                 break;
//             }
//         }
//         if (!flag)
//         {
//             flag2 = false;
//             return false;
//         }
//     }
//     if (flag2)
//     {
//         return true;
//     }
// }
// selectRow();

// function selectRow() {
//     let arrayOfTd = [];
//     x = document.getElementById("table").rows;
//     for (let i = 1; i < result.length + 1; i++) {
//         x[i].onclick = function () {
//             let cells = x[i].getElementsByClassName('td');
//             let cell = cells[3].textContent;
//             console.log(cell);
//             arrayOfTd.push(cell);
//         }
//     }
//     return arrayOfTd;
// }

// function findRow(classNumber) {

// }



































// function generalSort(array) {
//     // if (!Array.isArray(array))
//     //     console.log("Invalid input for array")
//     // for (let i = 0; i < array.length; i++) {
//     //     if (typeof (array[i]) !== "object")
//     //         console.log("Invalid input")
//     // }
//     // for (let j = 0; j < array.length; j++) {
//     //     if (!array[j].hasOwnProperty(propName))
//     //         console.log(" object " + (j + 1) + " is not valid")
//     // }
//     return lastArray = array.sort((a, b) => b - a);
// }
// // console.log(generalSort(result, ''));
// function sortTable() {
//     document.getElementById('th1').onclick = function () {
//         generalSort(result, 'uid');
//         document.getElementById('table').remove();
//         tableCreation();
//         clearInfo();
//         choose();
//     }
//     document.getElementById('th2').onclick = function () {
//         function compare(a, b) {
//             const VarA = a.firstName.toUpperCase();
//             const VarB = b.firstName.toUpperCase();
//             let comparison = 0;
//             if (VarA < VarB) {
//                 comparison = 1;
//             } else if (VarA > VarB) {
//                 comparison = -1;
//             }
//             return comparison;
//         }
//         result.sort(compare);
//         document.getElementById('table').remove();
//         tableCreation();
//         clearInfo();
//         choose();
//     }
//     document.getElementById('th3').onclick = function () {
//         function compare(a, b) {
//             const VarA = a.lastName.toUpperCase();
//             const VarB = b.lastName.toUpperCase();
//             let comparison = 0;
//             if (VarA < VarB) {
//                 comparison = 1;
//             } else if (VarA > VarB) {
//                 comparison = -1;
//             }
//             return comparison;
//         }
//         result.sort(compare);
//         document.getElementById('table').remove();
//         tableCreation();
//         clearInfo();
//         choose();
//     }
//     document.getElementById('th4').onclick = function () {
//         generalSort(result, 'postal_Code');
//         document.getElementById('table').remove();
//         tableCreation();
//         clearInfo();
//         choose();

//     }
//     document.getElementById('th5').onclick = function () {
//         generalSort(result, 'Phone_Number');
//         document.getElementById('table').remove();
//         tableCreation();
//         clearInfo();
//         choose();

//     }
//     document.getElementById('th6').onclick = function () {
//         function compare(a, b) {
//             const VarA = a.position.toUpperCase();
//             const VarB = b.position.toUpperCase();
//             let comparison = 0;
//             if (VarA < VarB) {
//                 comparison = 1;
//             } else if (VarA > VarB) {
//                 comparison = -1;
//             }
//             return comparison;
//         }
//         result.sort(compare);
//         document.getElementById('table').remove();
//         tableCreation();
//         clearInfo();
//         choose();

//     }
//     document.getElementById('th7').onclick = function () {
//         function compare(a, b) {
//             const VarA = a.city.toUpperCase();
//             const VarB = b.city.toUpperCase();
//             let comparison = 0;
//             if (VarA < VarB) {
//                 comparison = 1;
//             } else if (VarA > VarB) {
//                 comparison = -1;
//             }
//             return comparison;
//         }
//         result.sort(compare);
//         document.getElementById('table').remove();
//         tableCreation();
//         clearInfo();
//         choose();

//     }
//     // clear();
// }
// sortTable()




//variables//
let fName = 'saeed';
let lName = 'ghofrani';
//callback function//
function print(string) {  
    console.log(string);
}
//main function//
function fullName(firstName, lastName, cbf) {  
    let result = `${String(firstName)} ${String(lastName)}`;
    cbf(result);
}
//calling function//
fullName(fName, lName, print);
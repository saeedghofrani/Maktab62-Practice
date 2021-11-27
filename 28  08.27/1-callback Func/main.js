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
fullName('saeed', 'ghofrani', print);
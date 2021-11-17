let id = (id) => document.getElementById(id);

let username = id('username');
password = id('password');
rePassword = id('re-password')
pUsernamerEror = id('errorUsername');
pPasswordError = id('errorPassword');
pRePasswordError = id('errorRePassword');
let flag = true;
let engine = (id, target) => {
    if (id.value.trim() === '') {
        target.style.display = 'block';
        target.innerHTML = 'necessary '
        id.style.border = '1px solid red'
        flag = false
    }
    else {
        id.style.border = '1px solid green'
        target.style.display = 'none';
        target.innerHTML = ''
    }
}
function passwordCheck() {
    let strInput = String((password.value.trim()));
    let strInputP = rePassword.value;
    let input = password.value;
    console.log(input);
    console.log(strInputP);
    let flagNum = false;
    let flagL = false;
    let flagSame = false;
    if (strInput.length < 8) {
        pPasswordError.innerHTML = '';
        pPasswordError.style.display = 'block';
        password.style.border = '1px solid red';
        pPasswordError.innerText += '8 Character required';
    };
    for (let i = 0; i < input.length; i++) {
        console.log('asdasd')
        if (input[i] - 0) {
            flagNum = true;
            console.log(flagNum);
        }
        if (typeof input[i] === 'string' && !(input[i] - 0)) {
            flagL = true;
        }
        if (strInputP.length !== input.length || strInputP[i] !== input[i]) {
            flagSame = true;
        }
    }
    if (flagSame) {

        pRePasswordError.style.display = 'block';
        pRePasswordError.innerText = 'The passwords entered are not the same ';
        rePassword.style.border = '1px solid red';
    }
    if (flagNum === false) {
        pPasswordError.style.display = 'block';
        password.style.border = '1px solid red';
        pPasswordError.innerText += "at least 1 number required";
    }
    if (!flagL) {
        pPasswordError.style.display = 'block';
        password.style.border = '1px solid red';
        pPasswordError.innerText += "at least 1 letter required";
    }
}
document.addEventListener('submit', (e) => {
    e.preventDefault();
    engine(username, pUsernamerEror);
    engine(password, pPasswordError);
    engine(rePassword, pRePasswordError);
    passwordCheck();
})


















// console.log('asdfasdf')
// console.log(flagL);
// console.log(strInputP[i])
// console.log('12222222222222222222222222222222')
//  console.log(strInputP[i])
// console.log(input[i]);
// console.log(typeof input[i]);
// console.log('3333333333333333333333333')
// if(flagL && flagNum && strInput.length > 8)
// {
//     pPasswordError.style.display = 'none';
//     password.style.border = '1px solid green';
// }
// let passArray = password.value.trim().split("");
// let flagNum = false;
// let flagL = false;
// if (!flag)
//     return;
// else {
//     if (passArray.length < 8) {
//         pPasswordError.style.display = 'block';
//         password.style.border = '1px solid red'
//         pPasswordError.innerText += '8 Character required'
//     };
//     for (let i = 0; i < passArray.length; i++) {
//         if (typeof passArray[i] === 'number') {
//             flagNum = true;
//         }
//         if (typeof passArray[i] === 'string') {
//             flagL = true;
//         }
//     }
//     if (!flagNum) {
//         pPasswordError.style.display = 'block';
//         password.style.border = '1px solid red'
//         pPasswordError.innerText0 += "at least 1 number required";
//     }
//     if (!flagL) {
//         pPasswordError.style.display = 'block';
//         password.style.border = '1px solid red';
//         pPasswordError.innerText += "at least 1 letter required";
//     }
// for (let i = 0; i < passArray.length; i++) {
//     if (passArray[i] === Number)
//     {
//         flag = true;
//     }        
//     if ((pass.value.charCodeAt(i) > 64 && pass.value.charCodeAt(i) < 91 )|| (pass.value.charCodeAt(i) > 96 && pass   value.charCodeAt(i) < 123))
//     {
//         flagL = true;
//     }
// }
// if (id.value.trim() !== '' && passArray.length < 8) {
//     pPasswordError.style.display = 'block';
//     pass.style.border = '1px solid red'
//     pPasswordError.innerHTML = '8 Character required'
//     rePassword.style.border = '1px solid red important!'
//     return
// }
// if (!flagL && id.value.trim() !== '')
// {
//     pPasswordError.style.display = 'block';
//     pass.style.border = '1px solid red'
//     pPasswordError.innerHTML = "at least 1 letter required"
// }
// if (!flag && id.value.trim() !== '')
// {
//     pPasswordError.style.display = 'block';
//     pass.style.border = '1px solid red'
//     pPasswordError.innerHTML = "at least 1 number required"
// }
// if (id.value.trim() !== pass.value.trim() && passArray.length > 8) {
//     target.style.display = 'block';
//     id.style.border = '1px solid red'
//     target.innerHTML = 'The passwords entered are not the same' 
// }
// if (id.value.trim() !== '' && id.value.trim() === pass.value.trim()) {
//     target.style.display = 'none';
//     id.style.border = '1px solid green';
//     target.innerHTML = '';
// }
// }




// DOM Syntax
// select.property = value;


//***************************************************************************
// selectors
//***************************************************************************
console.log(document);

// id
console.log(document.getElementById('demo'));

// class
console.log(document.getElementsByClassName('test'));

// tag
console.log(document.getElementsByTagName('p')[0]);

// query selector
console.log(document.querySelector('p.test'));
console.log(document.querySelectorAll('#demo'));





//***************************************************************************
// html manipulation
//***************************************************************************
// console.log(document.getElementById('demo').innerHTML)
// document.getElementById('demo').innerHTML = 2;
// console.log(document.getElementById('demo').innerHTML)

// create an element
let spanElement = document.createElement('span');

let content = document.createTextNode('new element');

spanElement.appendChild(content);

let body = document.getElementsByTagName('body')[0];

body.appendChild(spanElement)


// remove element
let parent = document.getElementById('parent');
let child = document.getElementById('child');
parent.removeChild(child);


// replace element





//***************************************************************************
// css manipulation
//***************************************************************************
console.log(document.getElementsByTagName('p')[1].style.color);
console.log(document.getElementsByTagName('p')[2].style.color);

let element = document.getElementsByTagName('p')[2];
console.log(window.getComputedStyle(element).backgroundColor);

document.getElementsByTagName('p')[2].style.color = 'rgb(255, 200, 100)'


document.getElementById('heading').classList.remove('bg-teal')




//***************************************************************************
// attr manipulation
//***************************************************************************
console.log(document.getElementById('division').getAttribute('class'));
document.getElementById('division').setAttribute('ggg', 'rrr');
document.getElementById('division').removeAttribute('class');



//***************************************************************************
// event
//***************************************************************************
function dateLogger() {
    let date = new Date()
    document.getElementById('container').innerHTML = `${date.getFullYear()}/${date.getMonth()}/${date.getDate()}`;
};

document.getElementsByTagName('button')[0].onclick = dateLogger;




//***************************************************************************
// sample1
//***************************************************************************
document.getElementById('sample1').onclick = function() {
    this.innerHTML += ' added text!'
}


//***************************************************************************
// sample1
//***************************************************************************
document.getElementById('sample1').onclick = function() {
    this.innerHTML += ' added text!'
}



document.getElementsByTagName('input')[0].onkeyup = function() {
    document.getElementById('inputValue').innerHTML = this.value;
}










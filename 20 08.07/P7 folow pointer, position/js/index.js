let cursor = document.getElementById("cursor");
blackDiv = document.getElementById('black');
redDiv = document.getElementById('red');
relLocationCaption = document.getElementById("5");
console.log(blackDiv.getBoundingClientRect().left + " : " + blackDiv.getBoundingClientRect().right);
console.log(blackDiv.getBoundingClientRect().top + " : " + blackDiv.getBoundingClientRect().bottom);
let shift_x = 50;
let shift_y = 60;
let width = 20;
cursor.style.width = `${width}px`;
cursor.style.height = `${width}px`;
document.body.addEventListener("mousemove", function (e) {
  cursor.style.left = (e.clientX + shift_x - width / 2) + "px";
  cursor.style.top = (e.clientY + shift_y - width / 2) + "px";
  updateInformationTab(e);
  let inside = isInside(e);
  if (inside[0] == 0) {
    changeColor('red', inside[1],inside[2]);
  }
  else if (inside[0] == 1) {
    changeColor('black', inside[1],inside[2]);
  }
  else {
    changeColor('blue');
  }
});
function updateInformationTab(e) {
  let x = e.clientX;
  let y = e.clientY;
  positionMouse = 'X: ' + (x) + ' Y: ' + (y);
  positionCircle = `X: ${x + shift_x} Y: ${y + shift_y}`;
  document.getElementById("3").innerHTML = positionMouse;
  document.getElementById("4").innerHTML = positionCircle;
};
function isInside(e) {
  let blackRect = blackDiv.getBoundingClientRect();
  let redRect = redDiv.getBoundingClientRect();
  let x = e.clientX + shift_x ;
  let y = e.clientY + shift_y;
  if (x >= blackRect.left + width / 2 && x <= blackRect.right - width / 2 && y >= blackRect.top + width / 2 && y <= blackRect.bottom - width / 2)
    return [0,e.clientX + shift_x-blackRect.left,e.clientY + shift_y-blackRect.top];
  else if (x >= redRect.left + width / 2 && x <= redRect.right - width / 2 && y >= redRect.top + width / 2 && y <= redRect.bottom - width / 2)
    return [1,e.clientX + shift_x-redRect.left,e.clientY + shift_y-redRect.top];
  return [-1,-1,-1];
}
function changeColor(color, pos_x,pos_y) {
  document.getElementById('cursor').style.backgroundColor = color;
  if (color === 'blue')
    relLocationCaption.style.display = 'none';
  else
  {
    relLocationCaption.style.display = 'block';
    relLocationCaption.innerHTML = 'X: ' + (pos_x) + ' Y: ' + (pos_y);
  }
};










// let rect1 = blackDiv.getBoundingClientRect();
// console.log(rect1);
// function changeColorRed() {
//   let rect2 = cursor.getBoundingClientRect();
//   let rect1 = redDiv.getBoundingClientRect();
//   if (rect1.right <= rect2.left || rect1.left >= rect2.right || rect1.bottom <= rect2.top || rect1.top >= rect2.bottom) {
//     document.getElementById('cursor').style.backgroundColor = '#4a78c7';
//     document.getElementById("5").style.display = 'none'
//   }
//   else {
//     document.getElementById('cursor').style.backgroundColor = 'black';
//     document.getElementById("5").style.display = 'block'
//     positionInDiv = `X: ${(x + 50) - 200} Y: ${(y + 60) - 200}`;
//     document.getElementById("5").innerHTML = positionInDiv;
//   }
// }
// changeColorRed();
// else if (rect3.right <= rect2.left || rect3.left >= rect2.right || rect3.bottom <= rect2.top || rect3.top >= rect2.bottom) {
//   document.getElementById('cursor').style.backgroundColor = '#4a78c7';
//   document.getElementById("5").style.display = 'none'
// }
// else {
//   document.getElementById('cursor').style.backgroundColor = 'black';
//   document.getElementById("5").style.display = 'block'
//   positionInDiv = `X: ${(x + 50) - 200} Y: ${(y + 60) - 200}`;
//   document.getElementById("5").innerHTML = positionInDiv;
// }
//Left: 315, Top: 417.5, right: 315, bottom: 617.5
// if (((y + 60) < 621 && (y + 60) > 421) && ((x + 50) < 516) && (x + 50) > 316) {
//   document.getElementById("5").style.display = 'block'
//   document.getElementById('cursor').style.backgroundColor = 'red';
//   positionInDiv = `X: ${(x + 50) - 200} Y: ${(y + 60) - 200}`;
//   document.getElementById("5").innerHTML = positionInDiv;
// }
// else if (!((y + 60) < 421 && (y + 60) > 221) && ((x + 50) < 516) && (x + 50) > 316) {
//   document.getElementById('cursor').style.backgroundColor = '#4a78c7';
//   document.getElementById("5").style.display = 'none'
// }
// else if (((y + 60) < 621 && (y + 60) > 421) && ((x + 50) < 816) && (x + 50) > 616) {
//   document.getElementById("5").style.display = 'block'
//   positionInDiv = `X: ${(x + 50) - 200} Y: ${(y + 60) - 200}`;
//   document.getElementById("5").innerHTML = positionInDiv;
//   document.getElementById('cursor').style.backgroundColor = 'black';
// }
// else {
//   document.getElementById("5").style.display = 'none'
//   document.getElementById('cursor').style.backgroundColor = '#4a78c7';
// }
// document.getElementById('black').addEventListener('mouseenter', function () {
//   document.getElementById('cursor').style.backgroundColor = 'red';
// })
// document.getElementById('black').addEventListener('mouseleave', function () {
//   document.getElementById('cursor').style.backgroundColor = '#4a78c7';
// })
// document.getElementById('red').addEventListener('mouseenter', function () {
//   document.getElementById('cursor').style.backgroundColor = 'black';
// })
// document.getElementById('red').addEventListener('mouseleave', function () {
//   document.getElementById('cursor').style.backgroundColor = '#4a78c7';
// })

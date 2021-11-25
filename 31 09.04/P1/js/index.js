// function randomFunc() {
//     var obj1 = { name: "Vivian", age: 45 };

//     return x = () => {
//         console.log(obj1.name + this + " is " + "awesome"); // Has access to obj1 even when the randomFunc function is executed
//     }
// }

// var initialiseClosure = randomFunc(); // Returns a function

// initialiseClosure();

var passed = 3;
var addTo = function () {  
    var inner = 2;
    return passed + inner;
};
console.log(addTo);
'use strict'

//global part of the code
let blank_map = [];
for (let i = 0; i < 300; i++) {
    blank_map.push(`_`);
}


let numCar = Number(prompt(`How many cars?`));
let car = function (carName) {
    this.carName = carName;
    this.x = 0;
    this.step = 0;
};
let playerCar = [];
for (let i = 0; i < numCar; i++) {
    let nameCar = prompt("please write car's name");
    playerCar.push(new car(nameCar));
}




// speed of the cars beetwen 0 to 10
function setSteps(cars) {
    for (let i = 0; i < numCar; i++) {
        if (cars[i].x < 300)
            cars[i].step = Math.floor((Math.random() * 11));
    }
}


// game logic where cars move, hit and information log
function gameLogic(cars) {
    setSteps(cars);
    let temp = [];
    let orders = generateOrders(numCar);
    for (let i = 0; i < numCar; i++) {
        cars[i].x = Math.min(300, cars[i].x + cars[i].step);
        temp.push(cars[i].x);
    }
    console.log(temp);
    for (let p = 0; p < numCar; p++) {
        for (let j = 0; j < numCar; j++) {
            if (p !== j && cars[p].x < 300 && cars[p].x === cars[j].x) {
                let indexp = orders.indexOf(p);
                let indexj = orders.indexOf(j);
                if (indexp < indexj) {
                    cars[p].x = 0;
                }
                else {
                    cars[j].x = 0;
                }
            }
        }
    }
    drawGame(cars);
}


// generate random order for movment of cars
function generateOrders(num) {
    let orders = [];
    while (orders.length < num) {
        let r = Math.floor(Math.random() * num);
        if (orders.indexOf(r) === -1)
            orders.push(r);
    }
    return orders;
}


// show map and cars place
function drawGame(cars) {
    let current_map = [...blank_map];
    for (let i = 0; i < numCar; i++) {
        if (cars[i].x < 300)
            current_map.splice(cars[i].x, 1, cars[i].carName);
    }
    console.log(current_map.join(""));
}


//mainGame is acontainer, end game condition and winners
function mainGame() {
    let flag = true;
    let champions = [];
    while (flag) {
        gameLogic(playerCar);
        for (let i = 0; i < playerCar.length; i++) {
            if (playerCar[i].x >= 300 && !champions.includes(playerCar[i]))
                champions.push(playerCar[i]);
            if (champions.length === numCar)
                flag = false;
        }
    };
    console.log(champions);
    console.log(`${blank_map.join("")} THE END`);
    for (let i = 0; i < champions.length; i++) {
        switch (i) {
            case 0:
                console.log(champions[0].carName + ' won the game');
                break;
            case 1:
                console.log(champions[1].carName + ' is in the second place');
                break;
            case 2:
                console.log(champions[2].carName + ' won the third place');
                break;
        }
    }
}
mainGame();

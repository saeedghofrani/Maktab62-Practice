'use strict'


function readInput() {
    let blank_map = [];
    let map = Number(prompt(`create yor map length`))
    // lat map = 300;
    for (let i = 0; i < map; i++) {
        blank_map.push(`_`);
    }
    let numCar = Number(prompt(`How many cars?`));
    // let numCar = 1;
    let car = function (carName) {
        this.carName = carName;
        this.x = 0;
        this.step = 0;
    };
    let playerCar = [];
    let nameCar;
    for (let i = 0; i < numCar; i++) {
        let nameCar = prompt("please write car's name");
        // let nameCar = "a"
        playerCar.push(new car(nameCar));
    }
    let speed = Number(prompt(`give your cars max speed`))
    let hitInfo = ``;
    if (speed.length === 0)
        speed = 10;
    if (numCar.length === 0)
        numCar = 1;
    if (map.length === 0)
        map = 300;
    if (playerCar.length === 0)
        nameCar = "a";

    return [map, blank_map, numCar, playerCar, speed, hitInfo];
}
let infoArray = readInput();
let map = infoArray[0];
let blank_map = infoArray[1];
let numCar = infoArray[2];
let playerCar = infoArray[3];
let speed = infoArray[4];
let hitInfo = infoArray[5];

// speed of the cars beetwen 0 to 10
function setSteps(cars) {
    let speedArray = [];
    for (let i = 0; i < numCar; i++) {
        if (cars[i].x < map) {
            cars[i].step = Math.floor((Math.random() * (speed + 1)));
            speedArray.push(cars[i].step);
        }
    }
    console.log(`speed of every car => ${speedArray}`);
}


// game logic where cars move, hit and information log
function gameLogic(cars) {
    setSteps(cars);
    let temp = [];
    let orders = generateOrders(numCar);
    for (let i = 0; i < numCar; i++) {
        cars[i].x = Math.min(map, cars[i].x + cars[i].step);
        temp.push(cars[i].x);
    }
    for (let p = 0; p < numCar; p++) {
        for (let j = 0; j < numCar; j++) {
            if (p !== j && cars[p].x < map && cars[p].x === cars[j].x) {
                let indexp = orders.indexOf(p);
                let indexj = orders.indexOf(j);
                if (indexp < indexj) {
                    cars[p].x = 0;
                    hitInfo += `${cars[j].carName} hit ${cars[p].carName} at position ${cars[p].x} \n`
                }
                else {
                    cars[j].x = 0;
                    hitInfo += `${cars[p].carName} hit ${cars[j].carName} at position ${cars[p].x} \n`
                }
            }
        }
    }
    console.log(`place of cars in map => ${temp}`);
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
        if (cars[i].x < map)
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
            if (playerCar[i].x >= map && !champions.includes(playerCar[i]))
                champions.push(playerCar[i]);
            if (champions.length === numCar)
                flag = false;
        }
    };
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
    console.log(champions);
    if (hitInfo.length === 0) {
        hitInfo += `no accident`
        console.log(hitInfo)
    }
    else
        console.log(hitInfo);
}
mainGame();


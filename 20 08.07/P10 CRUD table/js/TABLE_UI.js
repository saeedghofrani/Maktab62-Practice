//initialize graphic user interface//
//body style//
function initGUI() {
    let main = document.body;
    main.setAttribute("id", "main");
    //style//
    main.style.display = "flex";
    main.style.flexDirection = "column";
    main.style.justifyContent = "center";
    main.style.alignItems = "center";
    main.style.boxSizing = "border-box";
    main.style.fontFamily = ' Arial, Helvetica, sans-serif';
    //call create Pannel and Table//
    optionPanel();
    CreateTableContainer();
}

//pannel container//
function div1(id) {
    let div = document.createElement("DIV");
    div.setAttribute("id", id);
    div.setAttribute("class", 'divPannel');
    document.getElementById("pannel").appendChild(div);
}

// create button in div in pannel//
function btnDiv5(id, text, disable) {
    // button//
    let btn = document.createElement("button");
    btn.setAttribute("id", id);
    btn.setAttribute("class", 'btn');
    btn.disabled = disable;
    let content = document.createTextNode(text);
    btn.appendChild(content);
    //style//
    document.getElementById('div5').appendChild(btn);
}

//create input and span on top//
function input(id, parent, txt) {
    //span//
    let span = document.createElement("span");
    span.setAttribute("class", 'spanDetail');
    document.getElementById(parent).appendChild(span);
    let textToAdd1 = document.createTextNode(txt);
    span.appendChild(textToAdd1);
    //input//
    let input = document.createElement("input");
    input.setAttribute("id", id);
    document.getElementById(parent).appendChild(input);
    input.setAttribute('type', 'text');
    input.setAttribute('class', 'lable inputOver');
    //style//
    // styleInput(input, 'red');
}

function optionPanel() {
    // div container//
    let div = document.createElement("DIV");
    div.setAttribute("id", "pannel");
    document.getElementById("main").appendChild(div);
    //style//
    div.style.width = "100%";
    div.style.height = "200px";
    div.style.border = "1px solid black";
    div.style.marginBottom = '10px'
    div.style.overflow = "hidden"
    div.style.display = 'none';
    div.style.flexDirection = 'row';
    // main.style.justifyContent = "center";
    // main.style.alignItems = "center";
    //calling functions//
    // creating 5div for pannel//
    div1("div1");
    div1("div2");
    div1("div3");
    div1("div4");
    div1("div5");
    //create 4 button in div5//
    btnDiv5('btn1', 'ADD', false);
    btnDiv5('btn2', 'EDIT', true);
    btnDiv5('btn3', 'REMOVE', true);
    btnDiv5('btn4', 'DONE', true);
    //create 7 input//
    input('lableUidInput', 'div1', 'UID');
    input('lableFirstNameInput', 'div2', 'First Name');
    input('lableLastNameInput', 'div2', 'Last Name');
    input('lablePostalInput', 'div3', 'Postal Code');
    input('lablePhoneInput', 'div3', 'Phone Number');
    input('lableCityInput', 'div4', 'City');
    input('lablePositionInput', 'div4', 'Position');
}


//function create tanle container//
function CreateTableContainer() {
    // div container//
    let div = document.createElement("DIV");
    div.setAttribute("id", "TableContainer");
    document.getElementById("main").appendChild(div);
    //style//
    div.style.width = "100%";
    div.style.height = "auto";
    div.style.display = 'flex';
    div.style.flexDirection = 'row';
    // main.style.justifyContent = "center";
    // main.style.alignItems = "center";
    div.style.border = "1px solid black";
    div.style.overflow = "hidden"
}

//function create table skeleton//
function generateTableSkeleton() {
    let table = document.createElement('table');
    table.setAttribute('id', 'table')
    document.getElementById("TableContainer").appendChild(table);
    //style//
    table.style.width = '100%'
    table.style.border = '1px solid #ddd';
    table.style.borderCollapse = 'collapse';
}

// function initialize table head using an object of keys//
function initHeader(table, obj) {
    // tHead//
    let thead = table.createTHead();
    // th row//
    let row = thead.insertRow();
    // create th of rows//
    let th = document.createElement("th");
    th.setAttribute('id', `thRow`)
    let text = document.createTextNode('Row');
    th.appendChild(text);
    row.appendChild(th);
    let count = 0;
    // create main th//
    for (let key of obj) {
        count++;
        let th = document.createElement("th");
        let text = document.createTextNode(key);
        th.appendChild(text);
        row.appendChild(th);
        //style//
        th.style.border = '1px solid black'
        th.setAttribute('id', `th${count}`)
    }
    //style//
    row.style.color = '#FFFFFF';
    row.style.backgroundColor = '#2E2E2E';
    row.style.border = '1px solid black';
    row.style.cursor = 'pointer';
}

//function build table completly//
function tableCreation() {
    generateTableSkeleton();
    initHeader(table, objData);
    fillTable(result);
    registerTableEvents();
}

//rigester sort function with onclick on th//
//rigester select function with onclick on th//
function registerTableEvents() {
    let counter = 1;
    for (let key of objData) {
        document.getElementById('th' + (counter++)).onclick = function () {
            function compare(a, b) {
                //sort for number
                let VarA = a[key];
                let VarB = b[key];
                //sort for string
                if (typeof a[key] !== 'number') {
                    VarA = a[key].toUpperCase();
                    VarB = b[key].toUpperCase();
                }
                let comparison = 0;
                if (VarA < VarB) {
                    comparison = 1;
                } else if (VarA > VarB) {
                    comparison = -1;
                }
                return comparison;
            }
            //style//
            result.sort(compare);
            document.getElementById('table').remove();
            tableCreation();
            clearInfo();
        }
    }
    //select function //
    x = document.getElementById("table").rows;
    for (let i = 1; i < result.length + 1; i++) {
        x[i].onclick = function () {
            //input will be editable//
            setInputReadOnly(true, true);
            //fill inputs value//
            let cells = x[i].getElementsByClassName('td');
            let cell = cells[0].textContent;
            let fill = document.getElementById('lableUidInput');
            fill.value = cell;
            let cell1 = cells[1].textContent;
            let fill1 = document.getElementById('lableFirstNameInput');
            fill1.value = cell1;
            let cell2 = cells[2].textContent;
            let fill2 = document.getElementById('lableLastNameInput');
            fill2.value = cell2;
            let cell3 = cells[3].textContent;
            let fill3 = document.getElementById('lablePostalInput');
            fill3.value = cell3;
            let cell4 = cells[4].textContent;
            let fill4 = document.getElementById('lablePhoneInput');
            fill4.value = cell4;
            let cell5 = cells[5].textContent;
            let fill5 = document.getElementById('lablePositionInput');
            fill5.value = cell5;
            let cell6 = cells[6].textContent;
            let fill6 = document.getElementById('lableCityInput');
            fill6.value = cell6;
            //style
            styleInput('2px solid green', '2px solid green');
            //button should be clickable//
            buttonDisabled(true, false, false, true);
            document.getElementById('btn1').disabled = true;
        }
    }
}
//create table body//
function generatTableBody() {
    let tBody = document.createElement('tBody');
    tBody.setAttribute('id', 'tBody');
    document.getElementById("table").appendChild(tBody);
    return tBody;
}

//fill table with information //
function fillTable(array) {
    //generate tBody
    let tBody = generatTableBody();
    let row_counter = 0;
    for (let i of array) {
        //create rows
        let row = tBody.insertRow();
        row.setAttribute('class', 'row')
        row.setAttribute('id', `${row_counter}`);
        //create cells
        let cell = row.insertCell();
        let text = document.createTextNode(++row_counter);
        cell.appendChild(text);
        for (key in i) {
            let cell = row.insertCell();
            let text = document.createTextNode(i[key]);
            cell.setAttribute('class', `td`);
            cell.setAttribute('rowNumber', `${(row_counter) - 1}`);
            cell.appendChild(text);
            //style//
            cell.style.border = '1px solid black'
            cell.style.textAlign = 'center';
            cell.style.verticalAlign = 'middle';
        }
        //style//
        cell.style.border = '1px solid black'
        cell.style.textAlign = 'center';
        cell.style.verticalAlign = 'middle';
        if (row_counter % 2 == 0) {
            row.style.backgroundColor = '#C9C9C9';
        }
    }
}

//clear dataa from pannel//
function clearInfo() {
    let cell = '';
    let fill = document.getElementById('lableUidInput');
    fill.value = cell;
    let cell1 = '';
    let fill1 = document.getElementById('lableFirstNameInput');
    fill1.value = cell1;
    let cell2 = '';
    let fill2 = document.getElementById('lableLastNameInput');
    fill2.value = cell2;
    let cell3 = '';
    let fill3 = document.getElementById('lablePostalInput');
    fill3.value = cell3;
    let cell4 = '';
    let fill4 = document.getElementById('lablePhoneInput');
    fill4.value = cell4;
    let cell5 = '';
    let fill5 = document.getElementById('lablePositionInput');
    fill5.value = cell5;
    let cell6 = '';
    let fill6 = document.getElementById('lableCityInput');
    fill6.value = cell6;
    //style//
    styleInput('1px solid black', '1px solid black');
    //button should be clickable//
    buttonDisabled(false, true, true, true)
    document.getElementById('btn1').disabled = false;
}

//options button events//
function show_hide() {
    if (document.getElementById('pannel').style.display === 'flex')
        document.getElementById('pannel').style.display = 'none';
    else
        document.getElementById('pannel').style.display = 'flex';
}

function styleInput(color, emptyColor) {
    for (let i = 0; i < 7; i++) {
        let target = document.getElementsByClassName('lable')[i];
        if (target.value === 'undefined' || target.value === '' || target.value.length == 0) {
            target.style.border = emptyColor;
        }
        else
            target.style.border = color;
    }
}

function buttonDisabled(btn1, btn1, btn3, btn4) {
    document.getElementById('btn1').disabled = btn1;
    document.getElementById('btn2').disabled = btn1;
    document.getElementById('btn3').disabled = btn3;
    document.getElementById('btn4').disabled = btn4;
}


/*jshint esversion: 6 */
//initialize graphic user interface//
//body style//
function initGUI() {
    let main = $('body,html');
    main.attr("id", "main");
    //style//
    $('#main').css({
        'display': 'flex',
        'flex-direction': 'column',
        'justify-content': 'center',
        'align-item': 'center',
        'box-sizing': 'border-box',
        'font-family': 'Arial, Helvetica, sans-serif',
    });
    //call create Pannel and Table//
    optionPanel();
    CreateTableContainer();
}
//pannel container//
function div1(idDiv) {
    //style//
    let style = {
        id: idDiv,
        class: 'divPannel'
    };
    let add = $('<div>', style);
    $('#pannel').append(add);
}

// create button in div in pannel//
function btnDiv5(idBtn, text, disable) {
    //style//
    let style = {
        id: idBtn,
        class: 'btn',
    };
    let add = $('<button>', style);
    add.html(text);
    $('#div5').append(add);
    add.attr('disabled', disable);
}

//create input and span on top//
function input(idIn, parent, txt) {
    //style//
    let style = {
        class: 'spanDetail',
    };
    //span//
    let add = $('<span>', style);
    add.html(txt);
    $(parent).append(add);
     //style//
    let mainStyle = {
        id: idIn,
        class: 'lable inputOver',
        type: 'text'
    };
    let mainAdd = $('<input>', mainStyle);
    $(parent).append(mainAdd);
}

function optionPanel() {
    // div container//
    let style = {
        id: 'pannel',
        //style//
        css: {
            "width": '100%',
            "height": '200px',
            'border': '1px solid black',
            'margin-bottom': '10px',
            'overflow': 'hidden',
            'display': 'none',
            'flex-direction': 'row'
        }
    };
    let add = $('<div>', style);
    $('#main').append(add);
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
    input('lableUidInput', '#div1', 'UID');
    input('lableFirstNameInput', '#div2', 'First Name');
    input('lableLastNameInput', '#div2', 'Last Name');
    input('lablePostalInput', '#div3', 'Postal Code');
    input('lablePhoneInput', '#div3', 'Phone Number');
    input('lableCityInput', '#div4', 'City');
    input('lablePositionInput', '#div4', 'Position');
}


//function create tanle container//
function CreateTableContainer() {
    // div container//
    let style = {
        id: 'TableContainer',
        //style//
        css: {
            "width": '100%',
            "height": 'auto',
            'border': '1px solid black',
            'overflow': 'hidden',
            'display': 'flex',
            'flex-direction': 'row'
        }
    };
    let add = $('<div>', style);
    $('#main').append(add);
    $('#main').css('justify-content', "center");
    $('#main').css('align-items', "center");

}

//function create table skeleton//
function generateTableSkeleton() {
    let style = {
        id: 'table',
        //style//
        css: {
            'width': '100%',
            'border': '1px solid black',
            'border-collapse': 'collapse'
        }
    };
    let add = $('<table>', style);
    $('#TableContainer').append(add);
}

// function initialize table head using an object of keys//
function initHeader(table, obj) {
    let count = 0;
    let header = $('<thead />', { id: 'tHead' }).appendTo(table);
    $('<th />', {
        text: 'ROW', id: `rowNumber`,
        css: {
            'border': '1px solid black'
        }
    }).appendTo(header);
    for (let i = 0; i < columnCount; i++) {
        count++;
        $('<th />', {
            text: obj[i].toUpperCase(), id: `th${count}`,
            //style//
            css: {
                'border': '1px solid black'
            }
        }).appendTo(header);
    }
    //style//
    $('#tHead').css({
        'color': '#FFFFFF',
        'background-color': '#2E2E2E',
        'border': '1px solid black',
        'cursor': 'pointer'
    });
}

//function build table completly//
function tableCreation() {
    generateTableSkeleton();
    initHeader(table, objData);
    fillTable(result);
    registerTableEvents();
}

//create table body//
function generatTableBody() {
    let tBody = $('<tbody />').appendTo('#table');
    tBody.attr('id', 'tBody');
}

//fill table with information 
function fillTable(array) {
    //generate tBody
    generatTableBody();
    let row_counter = 0;
    for (let i of array) {
        //create rows
        let row = $('<tr />').appendTo('#tBody');
        row.attr('class', 'row');
        row.attr('id', `${row_counter}`);
        //create cells
        let cell = $('<td />', {
            text: `${++row_counter}`
        }).appendTo(row);
        for (let key in i) {
            let cell = $('<td />', {
                text: i[key]
            }).appendTo(row);
            cell.attr('class', `td`);
            cell.attr('rowNumber', `${(row_counter) - 1}`);
            //style//
            cell.css('border', '1px solid black');
            cell.css('textAlign', 'center');
            cell.css('verticalAlign', 'middle');
        }
        //style//
        cell.css('border', '1px solid black');
        cell.css('textAlign', 'center');
        cell.css('verticalAlign', 'middle');
        if (row_counter % 2 == 0) {
            row.css('backgroundColor', '#C9C9C9');
        }
    }
}

//clear dataa from pannel//
function clearInfo() {
    let cell = '';
    let fill = $('#lableUidInput');
    fill.val(cell);
    let cell1 = '';
    let fill1 = $('#lableFirstNameInput');
    fill1.val(cell1);
    let cell2 = '';
    let fill2 = $('#lableLastNameInput');
    fill2.val(cell2);
    let cell3 = '';
    let fill3 = $('#lablePostalInput');
    fill3.val(cell3);
    let cell4 = '';
    let fill4 = $('#lablePhoneInput');
    fill4.val(cell4);
    let cell5 = '';
    let fill5 = $('#lablePositionInput');
    fill5.val(cell5);
    let cell6 = '';
    let fill6 = $('#lableCityInput');
    fill6.val(cell6);
    //style//
    styleInput('1px solid black', '1px solid black');
    //button should be clickable//
    buttonDisabled(false, true, true, true);
    document.getElementById('btn1').disabled = false;
}
//options button events//
function show_hide() {
    if ($("#pannel").css('display') == 'flex')
        $('#pannel').css('display', 'none');
    else
        $('#pannel').css('display', 'flex');
}

//function to syle inputs//
function styleInput(color, emptyColor) {
    for (let i = 0; i < 7; i++) {
        let target = $(`.lable:eq(${i})`);
        if (target.val() === 'undefined' || target.val() === '' || target.val().length == 0)
            target.css('border', emptyColor);
        else
            target.css('border', color);
    }
}
// function to disable buttons in events 
function buttonDisabled(btn1, btn2, btn3, btn4) {
    $('#btn1').prop('disabled', btn1);
    $('#btn2').prop('disabled', btn2);
    $('#btn3').prop('disabled', btn3);
    $('#btn4').prop('disabled', btn4);
}
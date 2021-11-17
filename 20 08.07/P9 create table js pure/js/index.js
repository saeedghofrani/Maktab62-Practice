let personData =
    [
        {
            uid: 1,
            firstName: "Ali",
            lastName: "Mahdavi",
            postal_Code: 2345672345,
            Phone_Number: 092114545
        },
        {
            uid: 2,
            firstName: "Reza",
            lastName: "Shahmardan",
            postal_Code: 23456726548,
            Phone_Number: 09211455858
        },
        {
            uid: 3,
            firstName: "Hassan",
            lastName: "Qolami",
            postal_Code: 2345677777,
            Phone_Number: 09211454777
        },
        {
            uid: 4,
            firstName: "Morteza",
            lastName: "Hamedani",
            postal_Code: 2345672888,
            Phone_Number: 0921145451111
        },
        {
            uid: 5,
            firstName: "Sina",
            lastName: "Hejazi",
            postal_Code: 2345672999,
            Phone_Number: 09211959595
        },
        {
            uid: 6,
            firstName: "Hadi",
            lastName: "Sadri",
            postal_Code: 234567222,
            Phone_Number: 0921188888
        }
    ]

let additionalPersonData =
    [
        {
            uid: 3,
            position: "UI Designer",
            city: "Biarjmand"
        },
        {
            uid: 1,
            position: "Back-End Develope",
            city: "Taleqan"
        },
        {
            uid: 2,
            position: "Front-End Developer",
            city: "Behbahan"
        },
        {
            uid: 4,
            position: "Devops",
            city: "Shiraz"
        },
        {
            uid: 6,
            position: "Server Admin",
            city: "Tehran"
        }, 
        {
            uid: 5,
            position: "Product Manager",
            city: "Hamedan"
        }
    ];
function mergeById(array1, array2) {
    let result = [];
    for (let i = 0; i < array1.length; i++) {
        for (let j = 0; j < array2.length; j++) {
            if (array1[i].uid === array2[j].uid) {
                result.push({ ...array1[i], ...array2[j] });
            }
        }
    };
    return result;
}
let result = mergeById(personData, additionalPersonData);
console.log(result);
let objData = Object.keys(result[0]);




let main = document.body;
main.setAttribute("id", "main");
main.style.display = "flex";
main.style.flexDirection = "column";
main.style.justifyContent = "center";
main.style.alignItems = "center";
main.style.boxSizing = "border-box";
main.style.fontFamily = ' Arial, Helvetica, sans-serif';

function pannel() {
    // div container
    let div = document.createElement("DIV");
    div.setAttribute("id", "pannel");
    document.getElementById("main").appendChild(div);
    //style
    div.style.width = "100%";
    div.style.height = "200px";
    div.style.border = "1px solid black";
    div.style.marginBottom = '10px'
    div.style.overflow = "hidden"
}
pannel();


function divContainer() {
    // div container
    let div = document.createElement("DIV");
    div.setAttribute("id", "container");
    document.getElementById("main").appendChild(div);
    //style
    div.style.width = "100%";
    div.style.height = "auto";
    div.style.display = 'flex';
    div.style.flexDirection = 'row';
    main.style.justifyContent = "center";
    main.style.alignItems = "center";
    div.style.border = "1px solid black";
    div.style.overflow = "hidden"
}
divContainer();



function generateTableSkeleton() {
    let table = document.createElement('table');
    table.setAttribute('id', 'table')
    document.getElementById("container").appendChild(table);
    //style
    table.style.width = '100%'
    table.style.border = '1px solid #ddd';
    table.style.borderCollapse = 'collapse';
}
generateTableSkeleton();



function generateTableHead(table, obj) {
    let thead = table.createTHead();
    let row = thead.insertRow();
    let th = document.createElement("th");
    let text = document.createTextNode('Row');
    th.appendChild(text);
    row.appendChild(th);
    for (let key of obj) {
        let th = document.createElement("th");
        let text = document.createTextNode(key);
        th.appendChild(text);
        row.appendChild(th);
        //style
        th.style.border = '1px solid black'
    }
    //style
    row.style.color = '#FFFFFF';
    row.style.backgroundColor = '#2E2E2E';
    row.style.border = '1px solid black';
    row.style.cursor = 'pointer';
}
generateTableHead(table, objData);



function generatTableBody() {
    let tBody = document.createElement('tBody');
    tBody.setAttribute('id', 'tBody');
    document.getElementById("table").appendChild(tBody);
}
generatTableBody();



function generateTable(tBody, array) {
    let row_counter = 0;
    for (let i of array) {
        let row = tBody.insertRow();
        let cell = row.insertCell();
        let text = document.createTextNode(++row_counter);
        cell.appendChild(text);
        for (key in i) {
            let cell = row.insertCell();
            let text = document.createTextNode(i[key]);
            cell.appendChild(text);
            //style
            cell.style.border = '1px solid black'
            cell.style.textAlign = 'center';
            cell.style.verticalAlign = 'middle';
        }
        //style
        cell.style.border = '1px solid black'
        cell.style.textAlign = 'center';
        cell.style.verticalAlign = 'middle';
        if (row_counter % 2 == 0) {
            row.style.backgroundColor = '#C9C9C9';
        }
    }
}
generateTable(tBody, result);
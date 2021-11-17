function registerEvents() {
    // Register Add button event//
    let add = document.getElementById('btn1')
    add.onclick = function () {
        clearInfo();
        flagOnWhat = true;
        setInputReadOnly(false, false);
        alert('fill the table data');
        //style//
        styleInput('2px solid green', '2px solid red');
        //button should be clickable//
        buttonDisabled(true, true, true, false);
    }
    // Register edit button event//
    let edit = document.getElementById('btn2')
    edit.onclick = function () {
        flagOnWhat = false;
        alert('change the data');
        setInputReadOnly(false, true);
        //button should be clickable//
        buttonDisabled(true, true, true, false);
    }
    // Register remove button event//
    let remove = document.getElementById('btn3')
    remove.onclick = function () {
        let uidRemove = Number(document.getElementById('lableUidInput').value);
        _delete(uidRemove);
        document.getElementById('table').remove();
        tableCreation();
        clearInfo();
    }
    // Register done button event//
    let flagOnWhat = true;
    let done = document.getElementById('btn4');
    done.onclick = function () {
        if (!flagOnWhat) {
            //update object//
            let updatePerson = {
                uid: Number(document.getElementById('lableUidInput').value),
                firstName: document.getElementById('lableFirstNameInput').value,
                lastName: document.getElementById('lableLastNameInput').value,
                postal_Code: document.getElementById('lablePostalInput').value,
                Phone_Number: document.getElementById('lablePhoneInput').value,
                city: document.getElementById('lableCityInput').value,
                position: document.getElementById('lablePositionInput').value
            }
            console.log(updatePerson);
            console.log(document.getElementById('lableUidInput').value)
            if (!isObjectValid(updatePerson)) {
                alert('empty field detected');
                return;
            }
            update(updatePerson);
            console.log(result);
        }
        else {
            //create object//
            let newPerson = {
                uid: Number(document.getElementById('lableUidInput').value),
                firstName: document.getElementById('lableFirstNameInput').value,
                lastName: document.getElementById('lableLastNameInput').value,
                postal_Code: document.getElementById('lablePostalInput').value,
                Phone_Number: document.getElementById('lablePhoneInput').value,
                city: document.getElementById('lableCityInput').value,
                position: document.getElementById('lablePositionInput').value
            }
            console.log(newPerson)
            if (!isObjectValid(newPerson)) {
                alert('empty field detected');
                //style//
                styleInput('2px solid green', '2px solid red');
                return;
            }
            create(newPerson);
        }
        // remove table and build again//
        document.getElementById('table').remove();
        tableCreation();
        clearInfo();
    }
}

//function set input status//
function setInputReadOnly(readOnly, readOnlyUid) {
    document.getElementById("lableUidInput").readOnly = readOnlyUid;
    document.getElementById("lableFirstNameInput").readOnly = readOnly;
    document.getElementById("lableLastNameInput").readOnly = readOnly;
    document.getElementById("lablePhoneInput").readOnly = readOnly;
    document.getElementById("lablePositionInput").readOnly = readOnly;
    document.getElementById("lableCityInput").readOnly = readOnly;
    document.getElementById("lablePostalInput").readOnly = readOnly;
}


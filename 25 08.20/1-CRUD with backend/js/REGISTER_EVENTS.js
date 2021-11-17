function registerEvents() {
    // Register Add button event//
    $('#btn1').click(function (e) {
        e.preventDefault();
        clearInfo();
        flagOnWhat = true;
        setInputReadOnly(false, false);
        alert('fill the table data');
        //style//
        styleInput('2px solid green', '2px solid red');
        //button should be clickable//
        buttonDisabled(true, true, true, false);
    });
    // Register edit button event//
    $('#btn2').click(function (e) {
        e.preventDefault();
        flagOnWhat = false;
        alert('change the data');
        setInputReadOnly(false, true);
        //button should be clickable//
        buttonDisabled(true, true, true, false);
    });
    // Register remove button event//
    $('#btn3').click(function (e) {
        e.preventDefault();
        let uidRemove = Number($('#lableUidInput').val());
        _delete(uidRemove);
        $('#table').remove();
        tableCreation();
        clearInfo();
    });
    // Register done button event//
    let flagOnWhat = true;
    $('#btn4').click(function (e) {
        e.preventDefault();
        if (!flagOnWhat) {
            //update object//
            let updatePerson = {
                uid: Number($('#lableUidInput').val()),
                firstName: $('#lableFirstNameInput').val(),
                lastName: $('#lableLastNameInput').val(),
                city: $('#lableCityInput').val(),
                personalCode: $('#lablePostalInput').val(),
                phoneNumber: $('#lablePhoneInput').val(),
                position: $('#lablePositionInput').val()
            };
            if (!isObjectValid(updatePerson)) {
                alert('empty field detected');
                return;
            }
            update(updatePerson);
        }
        else {
            //create object//
            let newPerson = {
                uid: Number($('#lableUidInput').val()),
                firstName: $('#lableFirstNameInput').val(),
                lastName: $('#lableLastNameInput').val(),
                city: $('#lableCityInput').val(),
                personalCode: $('#lablePostalInput').val(),
                phoneNumber: $('#lablePhoneInput').val(),
                position: $('#lablePositionInput').val()
            };
            if (!isObjectValid(newPerson)) {
                alert('empty field detected');
                //style//
                styleInput('2px solid green', '2px solid red');
                return;
            }
            create(newPerson);
        }
        // remove table and build again//
        $('#table').remove();
        tableCreation();
        clearInfo();
    });
}

//function set input status//
function setInputReadOnly(readOnly, readOnlyUid) {
    $("#lableUidInput").prop('readonly', readOnlyUid);
    $("#lableFirstNameInput").prop('readonly', readOnly);
    $("#lableLastNameInput").prop('readonly', readOnly);
    $("#lablePhoneInput").prop('readonly', readOnly);
    $("#lablePositionInput").prop('readonly', readOnly);
    $("#lableCityInput").prop('readonly', readOnly);
    $("#lablePostalInput").prop('readonly', readOnly);
}

//rigester sort function with onclick on th//
//rigester select function with onclick on tr//
function registerTableEvents() {
    let counter = 1;
    for (let key of objData) {
        $(`#th${counter++}`).click(function (e) {
            e.preventDefault();
            function compare(a, b) {
                //sort for number
                let VarA = a[key];
                VarB = b[key];
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
            $('#table').remove();
            tableCreation();
            clearInfo();

        });
    }
    //select function //
    $('table tbody tr').click(function () {
        $(this).find('td').each(function (index) {
            let tdValue = $(this).text();
            switch (index) {
                case 1:
                    $('#lableUidInput').val(tdValue);
                case 2:
                    $('#lableFirstNameInput').val(tdValue);
                case 3:
                    $('#lableLastNameInput').val(tdValue);
                case 4:
                    $('#lablePostalInput').val(tdValue);
                case 5:
                    $('#lablePhoneInput').val(tdValue);
                case 6:
                    $('#lablePositionInput').val(tdValue);
                case 7:
                    $('#lableCityInput').val(tdValue);
            }
            //open panel
            if ($("#pannel").css('display') == 'none')
                $('#pannel').css('display', 'flex');
            //style//
            styleInput('2px solid green', '2px solid green');
            //button should be clickable//
            buttonDisabled(true, false, false, true);
        });
    });
}


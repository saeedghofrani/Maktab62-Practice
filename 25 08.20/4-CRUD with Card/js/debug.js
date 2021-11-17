function createCard(result) {
    for (let i = 0; i < result.length; i++) {
        $('#cardSection').append(`
        <div class="cardUI mt-4 d-flex justify-content-center  col-12 col-sm-6 col-md-4 p-4">
            <div class="card w-100">
                <img src=${result[i].avatar} class="card-img-top " alt="avatar">
                <div class="card-body">
                    <h5 class="card-title ">${result[i].first_name + ' ' + result[i].last_name}</h5>
                    <p class="card-text">${result[i].email}</p>
                    <a href="#" type="button" class="btn btn-primary modalButton col-12" id='openModal${result[i].id}' data-bs-toggle="modal"
                        data-bs-target="#exampleModal">user profile</a>
                </div>
            </div>
        </div>`);
    }
}

function clickEvenListener(result) {
    for (let i = 0; i < result.length; i++) {
        $(`#openModal${result[i].id}`).click(function () {
            console.log(result[i].id);
            console.log(result[i].first_name);
            $('#userHeader').text(`Dear ${result[i].first_name}`);
            $('#imgModal').attr('src', result[i].avatar);
            $('#idModal').val(`ID: ${(result[i].id)}`);
            $('#firstNameModal').val(`First Name: ${(result[i].first_name)}`);
            $('#lastNameModal').val(`Last Name: ${(result[i].last_name)}`);
            $('#emailModal').val(`Email: ${(result[i].email)}`);
        });
    }
}
function editModal() {
    $('#editModal').click(function (e) {
        e.preventDefault();
        console.log('asdfasdf');
        $("input").prop('disabled', false);
        $("#idModal").prop('disabled', true);
        alert('change data and press done');
    });
}
function done(result) {
    $('#doneModal').click(function (e) { 
        e.preventDefault();
        let obj = {
            email: $('#emailModal').val(),
            first_name: $('#firstNameModal').val(),
            last_name: $('#lastNameModal').val(),
            id: $('#idModal').val()
        };
        isObjectValid(obj);
        update(result, obj);
    });
}
function remove(result) {
    $('#removeModal').click(function() {
        _delete(result, result.id);
        initGUI(result);
    });
}
let totalCard
$(document).ready(function () {
    $.ajax({
        type: "GET",
        url: "https://reqres.in/api/users?page=2",
        success: function (responseAraay1) {
            $.ajax({
                type: "GET",
                url: "https://reqres.in/api/users?page=1",
                success: function (responseAraay2) {
                    let result = mergeById(responseAraay1.data, responseAraay2.data);
                    createCard(result);
                    clickEvenListener(result);
                    editModal();
                    done(result);
                    remove(result);
                    // use for table head data
                    objData = Object.keys(result[0]);
                    columnCount = objData.length;
                    rowsCount = 0;
                    console.log(result);
                    $('.cardUI').fadeOut('slow');
                },
                error: function () {
                    window.location.replace('/25%2008.20/P1/404page.html');
                }
            });
        },
        error: function () {
            window.location.replace('/25%2008.20/P1/404page.html');
        }
    });

    // $('.cardUI').slideDown('slow');

});
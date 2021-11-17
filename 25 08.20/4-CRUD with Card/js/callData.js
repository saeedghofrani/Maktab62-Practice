let result;
let pageNum = 1;
itemPerPage = 3;
$(document).ready(function () {
    toester('Welcome to our website', 'gray', 'black');
    $.ajax({
        type: "GET",
        url: "https://reqres.in/api/users?page=2",
        success: function (responseAraay1) {
            console.log(responseAraay1)
            $.ajax({
                type: "GET",
                url: "https://reqres.in/api/users?page=1",
                success: function (responseAraay2) {
                    console.log(responseAraay2)
                    result = mergeById(responseAraay1.data, responseAraay2.data);
                    refreshUI();
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
});
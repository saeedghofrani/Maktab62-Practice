$(document).ready(function () {
    $('#txt').fadeOut(0);
    $('#out').click(function (e) {
        e.preventDefault();
        $('#fade').fadeOut('slow', "linear", function () {
            $('#txt').fadeIn('fast');
        });
    });
    $('#in').click(function (e) {
        e.preventDefault();
        $('#txt').fadeOut(0);
        $('#fade').fadeIn('slow', "linear");
    });
});
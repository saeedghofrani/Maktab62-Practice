$(document).ready(function () {
    let x = 1;
    $('#btnPbar').click(function (e) {
        e.preventDefault();
        $('#progress').attr('value', 1 + (x++));
        if ($('#progress').attr('value') == 11) {
            $('#progress').attr('value', 1);
            x = 1;
        }
    });
});
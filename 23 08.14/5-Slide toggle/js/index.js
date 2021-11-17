$(document).ready(function () {
    $('#up').click(function (e) {
        e.preventDefault();
        $('#slide').slideUp('slow');
    });

    $('#down').click(function (e) {
        e.preventDefault();
        $('#slide').slideDown('slow');
    });

    $('#toggle').click(function (e) {
        e.preventDefault();
        $('#slide').slideToggle('slow');
    });
});
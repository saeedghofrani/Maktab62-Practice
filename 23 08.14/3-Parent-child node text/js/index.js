$(document).ready(function () {
    let parent = $('#parent').text();
    let child = $('#child').text();
    //copy parent
    $('#copyP').click(function (e) {
        e.preventDefault();
        $('#txt').prepend(parent);
    });
    //copy child
    $('#copyC').click(function (e) {
        e.preventDefault();
        $('#txt').prepend(child);
    });
});
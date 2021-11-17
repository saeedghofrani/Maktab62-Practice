$(document).ready(function () {
    $('#red').hover(function () {
        // over
        $(this)
            .css('background-position ', 'right bottom')
            .css('background-color', 'blue');
    }, function () {
        // out
        $(this)
            .css('background-position ', 'left top')
            .css('background-color', 'red');
    }
    );
});
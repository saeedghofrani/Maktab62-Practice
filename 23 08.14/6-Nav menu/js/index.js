$(document).ready(function () {
    $('.menu').css('cursor', 'pointer');
    
    $('#pages').hover(function () {
        // over
        $('.menuPage').slideDown('slow');
    }, function () {
        // out
        $('.menuPage').slideUp('slow');
    }
    );

    $('#links').hover(function () {
        // over
        $('.menuLink').slideDown('slow');
    }, function () {
        // out
        $('.menuLink').slideUp('slow');
    }
    );
});
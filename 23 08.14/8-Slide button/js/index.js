$(document).ready(function () {


    $('#stepOne').click(function (e) {
        e.preventDefault();
        $('.JUI, .JCode').slideUp('slow');
        $('.J').slideDown('slow');
        //style//
        $('#tri1').css('transform', 'rotate(90deg)');
        $('#tri2, #tri3').css('transform', 'rotate(360deg)');
        $('#stepTwo, #stepThree').removeClass('borderradius , border');
        $(this).addClass('borderradius border');
    }).css('cursor', 'pointer').hover(function () {
        // over
        $(this).css('background-color', '#F1EECB');
    }, function () {
        // out
        $(this).css('background-color', '#f1f1f1');
    }
    );

    $('#stepTwo').click(function (e) {
        e.preventDefault();
        $('.JCode, .J').slideUp('slow');
        $('.JUI').slideDown('slow');
        //style//
        $('#tri2').css('transform', 'rotate(90deg)');
        $('#tri1, #tri3').css('transform', 'rotate(360deg)');
        $('#stepOne, #stepThree').removeClass('borderradius , border');
        $(this).addClass('borderradius border');
    }).css('cursor', 'pointer').hover(function () {
        // over
        $(this).css('background-color', '#F1EECB');
    }, function () {
        // out
        $(this).css('background-color', '#f1f1f1');
    }
    );

    $('#stepThree').click(function (e) {
        e.preventDefault();
        $('.JUI, .J').slideUp('slow');
        $('.JCode').slideDown('slow');
        //style//
        $('#tri1, #tri2').css('transform', 'rotate(360deg)');
        $('#tri3').css('transform', 'rotate(90deg)');
        $('#stepTwo, #stepOne').removeClass('borderradius , border');
        $(this).addClass('borderradius border');
    }).css('cursor', 'pointer').hover(function () {
        // over
        $(this).css('background-color', '#F1EECB');
    }, function () {
        // out
        $(this).css('background-color', '#f1f1f1');
    }
    );

});
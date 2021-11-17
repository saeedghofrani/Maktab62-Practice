$(document).ready(function () {
    //hamberger menu
    $('.hamberger').click(function (e) {
        e.preventDefault();
        let display = $('.submenu').css('display');
        if (display == 'flex') {
            $('.submenu').css('display', 'none');
        }
        else {
            $('.submenu').css('display', 'flex');
        }
    });

    //w3 css bottun
    $('.w3css').click(function (e) {
        e.preventDefault();
        $('#myModal').css('display', 'block');
    });
    $('.close').click(function (e) {
        e.preventDefault();
        $('#myModal').css('display', 'none');
    });

    //aside menu
    $('.plus').click(function (e) {
        e.preventDefault();
        // $(".aside").animate({left:0, opacity:"show"}, 150);
        $('.aside').css('display', 'flex')
            .css('transition', 'all 0.5 linear');
    });
    $('a.closeAside').click(function (e) {
        e.preventDefault();
        $('.aside').css('display', 'none');
    });

    //dropdown
    $('.dropContainer').hover(function () {
        // over
        $('.dropdown').css('display', 'block');
    }, function () {
        // out
        $('.dropdown').css('display', 'none');
    }
    );

    //go to top bottun
    $('#upShape').hover(function () {
        // over
        $('#lableGoToTop').css('display', 'block');
    }, function () {
        // out
        $('#lableGoToTop').css('display', 'none');
    }
    );
});

//function set value to local storge
function submitt() {
    console.log('asfgkajsbgkajrgkj');
    let name = $('#nameInput').val();
    let email = $('#emailInput').val();
    let message = $('#messageInput').val();
    let res = `Name=${name}&Email=${email}&Message=${message}`;
    localStorage.setItem('name', res);
}
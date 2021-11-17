$(document).ready(function () {
    $('#greenBox').click(function (e) { 
        e.preventDefault();
        $(this).append(' Click added some text!');
    });
});
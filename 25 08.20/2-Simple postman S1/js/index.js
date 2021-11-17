$(document).ready(function () {
    //on click submit
    $('#btnSub').click(function (e) {
        //find which method is choosen
        if ($('#methodChoose').val() === '1') {
            e.preventDefault();
            console.log($('.inputControl').val());
            //get method
            $.ajax({
                type: "GET",
                url: `${$('.inputControl').val()}`,
                success: function (data, status, xhr) {
                    alert(status);
                    $('#APItextarea').val(JSON.stringify(data.data, null, 4));
                    $('.lead').text(`PlanText: JSON, Status: ${xhr.status}`);
                },
                error: function () {
                    $('#APItextarea').val(`404 The page has gone missing`);
                    $('.lead').text(``);
                }
            });
        }
        else {
            //validation for request input                

            if (IsJsonString($('#APItextareaRequest').val())) {
                $.ajax({
                    type: "post",
                    data: `${$('#APItextareaRequest').val()}`,
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    url: `${$('#URLInput').val()}`,
                    success: function (data, status, xhr) {
                        alert(status);
                        $('#APItextarea').val(JSON.stringify(data, null, 4));
                        $('#statuse').val(`${xhr.status}`);
                    },
                    error: function () {
                        $('#APItextarea').val(`404 The page has gone missing`);
                    }
                });
            }
            else {
                alert('unexpected token <<SHOULD BE JSON>>');
            }
        }
    });
});
//validation function
function IsJsonString(str) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}
//database//
let result;
$(document).ready(function () {
    $.ajax({
        type: "GET",
        url: "https://api.jsonbin.io/b/618d6c0e820eda3cc81be946/1",
        success: function (responseAraay1) {
            $.ajax({
                type: "GET",
                url: "https://api.jsonbin.io/b/618d85d4820eda3cc81bfb10",
                success: function (responseAraay2) {
                    let resultFromMerge = mergeById(responseAraay1, responseAraay2);
                    // use for table head data
                    result = resultFromMerge;
                    objData = Object.keys(result[0]);
                    columnCount = objData.length;
                    rowsCount = 0;
                    // create table //
                    initGUI();
                    tableCreation();
                    registerEvents();
                },
                error: function () {
                    window.location.replace('/25%2008.20/P1/404page.html');
                }
            });
        },
        error: function () {
            window.location.replace('/25%2008.20/P1/404page.html');
        }
    });
});

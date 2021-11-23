let isShowing = false;

$(document).ready(function () {
  //on click eye//
  $("#icon").click(function (e) {
    e.preventDefault();
    const input = $("#floatingPassword");
    //show/hide password//
    if (!isShowing) {
      input.attr("type", "text");
      isShowing = true;
    } else {
      input.attr("type", "password");
      isShowing = false;
    }
    //change icon //
    $("#icon").css('visibility', 'hidden');
    $("#iconSlash").css('visibility', 'visible');
  });
  //on click eye slash//
  $("#iconSlash").click(function (e) {
    e.preventDefault();
    const input = $("#floatingPassword");
    //show/hide password//
    if (!isShowing) {
      input.attr("type", "text");
      isShowing = true;
    } else {
      input.attr("type", "password");
      isShowing = false;
    }
    //change icon //
    $("#iconSlash").css('visibility', 'hidden');
    $("#icon").css('visibility', 'visible');
  });
  //regex the password input//
  $("#floatingPassword").keyup(function (e) {
    e.preventDefault();
    const inputVal = String($(this).val());
    passValidation(inputVal, 'floatingPassword');
  });

});

//regex validation and css//
function passValidation(value, target) {
  const strongRegex = new RegExp(
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
  );
  if (value.match(strongRegex)) {
    console.log("yes");
    $(`#${target}`).removeClass("notOk");
    $(`#${target}`).addClass("ok");
    $('#icon').css('color', 'green');
    $("#iconSlash").css('color', 'green');
    $('#floatLable').css('color', 'green');
    $('#warning').css('color', 'green');
    $('#warning').text('Good :D');
  } else {
    console.log("no");
    $(`#${target}`).removeClass("ok");
    $(`#${target}`).addClass("notOk");
    $('#icon').css('color', 'red');
    $("#iconSlash").css('color', 'red');
    $('#floatLable').css('color', 'red');
    $('#warning').css('color', 'red');
    $('#warning').text('Min 8 characters with at insert one capital letter, a number and a special character');
  }
}

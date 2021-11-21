let isShowing = false;

$(document).ready(function () {
  //   target the link
  $("#icon").click(function (e) {
    e.preventDefault();

    const input = $("#floatingPassword");

    if (!isShowing) {
      input.attr("type", "text");
      isShowing = true;
      $("#icon").addClass("fa-eye-slash");
    } else {
      input.attr("type", "password");
      isShowing = false;
      $("#icon").removeClass("fa-eye-slash");
      $("#icon").addClass("fa-eye");
    }

    // find the input, within the input group

    // // find the icon, within the input group
    // // const icon = $("#icon");

    // // toggle field type
    // input.attr("type", input.attr("type") === "text" ? "password" : "text");

    // if ($("#icon").hasClass("fa-eye")) {
    //   $("#icon").removeClass("fa-eye");
    //   $("#icon").addClass("fa-eye-slash");
    // } else {
    //   $("#icon").removeClass("fa-eye-slash");
    //   $("#icon").addClass("fa-eye");
    // }

    // toggle icon class
  });

  //   $("#icon").click(function (e) {
  //     e.preventDefault();
  //     console.log("jhsidajhi");
  //   });

  $("#floatingPassword").keyup(function (e) {
    e.preventDefault();

    const strongRegex = new RegExp(
      "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
    );

    const inputVal = $(this).val();

    if (inputVal.match(strongRegex)) {
      console.log("yes");
      $("#floatingPassword").removeClass("notOk");
      $("#floatingPassword").addClass("ok");
    } else {
      console.log("no");
      $("#floatingPassword").removeClass("ok");
      $("#floatingPassword").addClass("notOk");
    }
  });
});

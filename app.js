$("#gender-age").hide();
$("#color").hide();

// $(".custom_loader").show();
// loader ------------------------------------------

$("#first-proj-button").on("click", function () {
  if ($("#portfolio").css("display") == "none") {
    $("#gender-age").hide();
    $("#color").hide();
    $("#portfolio").show();
  }
});

$("#second-proj-button").on("click", function () {
  if ($("#gender-age").css("display") == "none") {
    $("#color").hide();
    $("#portfolio").hide();
    $("#gender-age").show();
  }
});

$("#third-proj-button").on("click", function () {
    if ($("#color").css("display") == "none") {
      $("#color").show();
      $("#portfolio").hide();
      $("#gender-age").hide();
    }
  });
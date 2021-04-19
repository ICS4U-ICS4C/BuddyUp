
//For help button, I did not make this, got it from a codepen
$(".help-button").on("click", function() {
  $(".help-button-wrapper").toggleClass("expanded");
});

$(document).on("click", function(event) {
  if (!$(event.target).closest(".help-button").length) {
    $(".help-button-wrapper").removeClass("expanded");
  }
});

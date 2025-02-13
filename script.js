// Wait until the document (HTML) is fully loaded before executing the script
$(document).ready(function () {
  $(".envelope").click(function () {
    $(this).toggleClass("open"); // Toggle "open" class on the envelope
    $(this).off("click");
  });

  // When the mouse enters the main container, the card slides up
  $(".container").click(function () {
    if ($(".envelope").hasClass("open")) {
      $(".container").click(function () {
        $(".card").stop().animate(
          {
            top: "-90px", // Moves the card up by 90px
          },
          "slow"
        );
      });
    }
  });
});
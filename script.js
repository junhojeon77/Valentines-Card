// Wait until the document (HTML) is fully loaded before executing the script
$(document).ready(function () {
  $(".envelope").click(function () {
    if ($(this).hasClass("open") && $(".card").hasClass("before")) {
      // If envelope is open and card is out, close both in order

      $(".card").stop().animate(
          {
            top: "5px", // Move the card back down first
          },
          "slow",
          function () {
            // Once the card animation completes, close the envelope flap
            $(".card").removeClass("before"); // Mark the card as inside
            $(".envelope").removeClass("open"); // Close the envelope flap
          }
        );
    } else if (!$(this).hasClass("open") && !$(".card").hasClass("before")) {
      // If the envelope is closed and the card is inside, open both in order

      $(".envelope").addClass("open"); // Open the envelope flap first

      setTimeout(function () {
        $(".card").stop().animate(
            {
              top: "-90px", // Move the card up after the flap opens
            },
            "slow",
            function () {
              $(".card").addClass("before"); // Mark the card as out
            }
          );
      }, 400); // Delay for a smooth transition
    }
  });
});

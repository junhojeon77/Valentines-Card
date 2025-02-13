Valentine's Day Envelope Animation

Overview

This project is a Valentine's Day-themed interactive animation, where clicking on an envelope reveals a Valentine's card with a message and floating hearts. The animation is created using HTML, CSS, and JavaScript (jQuery).

Files Overview

1. index.html

This is the main HTML file that structures the animation. It includes:

A container that holds the envelope and the card.

A clickable envelope that opens upon clicking.

A card that slides out when the envelope is opened.

Floating hearts animation for an aesthetic effect.

The necessary links to external CSS and JavaScript files.

Key Elements in index.html

<h1>Click Here!</h1>
<div class="container">  
    <div class="valentines">
        <div class="envelope"></div>
        <div class="front"></div>
        <div class="open"></div>
        <div class="card">
            <div class="text">Happy<br>Valentine's</div>
            <div class="heart"></div>
        </div>
        <div class="hearts">
            <div class="one"></div>
            <div class="two"></div>
            <div class="three"></div>
            <div class="four"></div>
            <div class="five"></div>
        </div>
    </div>
</div>
<div class="shadow"></div>

2. style.css

This file contains the styling and animations for the Valentine's Day card.

Key Features in style.css:

Envelope design using ::before and ::after pseudo-elements.

Smooth opening animation when clicked.

Card sliding effect when the envelope is opened.

Floating hearts animation using @keyframes.

Shadow effect for added depth.

Important Styles:

.envelope:before {
    background-color: #f08080;
    content: "";
    position: absolute;
    width: 300px;
    height: 100px;
    transform: rotate(0deg);
    z-index: 1;
    transition: transform 0.5s ease-in-out, opacity 0.5s ease-in-out;
}

.envelope.open:before {
    opacity: 0;
}

.envelope.open:after {
    opacity: 1;
}

3. script.js

This JavaScript file adds interactivity to the project using jQuery.

Functionality in script.js:

Clicking the envelope opens it once (toggleClass("open") is removed and replaced with .addClass("open") to prevent toggling multiple times).

The card slides out only when the envelope is open.

Prevents multiple clicks on the envelope after opening using .off("click").

Key Code Snippets:

$(document).ready(function () {
    $(".envelope").click(function () {
        $(this).addClass("open"); // Ensures the envelope only opens once
        $(this).off("click"); // Disables further clicks
    });

    $(".container").click(function () {
        if ($(".envelope").hasClass("open")) {
            $(".card").stop().animate({
                top: "-90px"
            }, "slow");
        }
    });
});

How to Use

Open index.html in a browser.

Click on the envelope to open it.

The flap will move up, revealing the Valentine’s card.

The card will slide out, showing a message and a heart.

Floating hearts appear as part of the animation.

Technologies Used

HTML - For structuring the elements.

CSS - For designing the envelope, card, animations, and effects.

JavaScript (jQuery) - For interactivity (click animations).

Possible Improvements

Add a reset button to close the envelope after opening.

Allow multiple messages inside the card.

Add sound effects for a more immersive experience.

Enjoy your Valentine's Day animation! 💖


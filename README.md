# 🎉 Valentine's Day Envelope Animation

## 📌 Overview
This project is a **Valentine's Day-themed interactive animation** that allows users to click on an envelope to reveal a Valentine's card with a message and floating hearts. The animation is created using **HTML, CSS, and JavaScript (jQuery)**.

---

## 📂 Files Overview
### 1️⃣ **index.html**
The main **HTML file** that structures the animation. It includes:
- A **container** that holds the envelope and card.
- A clickable **envelope** that opens upon clicking.
- A **card** that slides out when the envelope is opened.
- **Floating hearts animation** for an aesthetic effect.
- Links to external **CSS and JavaScript** files.

#### **Key Elements in `index.html`**
```html
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
```

---

### 2️⃣ **style.css**
This file contains all the **styling and animations** for the Valentine's Day card.

#### **Key Features in `style.css`**:
- 🎨 **Envelope design** using `::before` and `::after` pseudo-elements.
- 🔄 **Smooth opening animation** when clicked.
- 📜 **Card sliding effect** when the envelope is opened.
- ❤️ **Floating hearts animation** using `@keyframes`.
- 🌑 **Shadow effect** for added depth.

#### **Important Styles**:
```css
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
```

---

### 3️⃣ **script.js**
This **JavaScript file** adds **interactivity** using **jQuery**.

#### **Functionality in `script.js`**:
- 📨 **Clicking the envelope opens it once** (Prevents multiple openings by disabling further clicks).
- 💌 **The card slides out only when the envelope is open**.
- 🚫 **Prevents multiple clicks on the envelope after opening** using `.off("click")`.

#### **Key Code Snippets**:
```js
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
```

---

## 🚀 How to Use
1️⃣ **Open** `index.html` in a browser.
2️⃣ **Click** on the **envelope** to open it.
3️⃣ **Watch** as the **flap moves up**, revealing the **Valentine’s card**.
4️⃣ **See** the **card slide out**, showing a message and a heart.
5️⃣ **Enjoy** the **floating hearts animation**. 💖

---

## 🛠 Technologies Used
- **HTML** - For structuring the elements.
- **CSS** - For designing the envelope, card, animations, and effects.
- **JavaScript (jQuery)** - For adding interactivity (click animations).

---

## 📌 Possible Improvements
- 🔄 Add a **reset button** to close the envelope after opening.
- 📝 Allow **multiple messages** inside the card.
- 🔊 Add **sound effects** for a more immersive experience.

---

## 🎉 Enjoy your **Valentine's Day animation!** 💖


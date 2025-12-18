const text = ">> Welcome to the HTML Hacker Website...";
let i = 0;

function typeEffect() {
  if (i < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeEffect, 70);
  }
}

typeEffect();

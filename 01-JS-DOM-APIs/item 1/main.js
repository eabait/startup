let val = 0;
let myInterval;

function fadeIn() {
  let elem = document.getElementById("fadeInSection");
  elem.style.opacity = "0." + val;
  elem.style.filter = "alpha(opacity = " + val + "0)";
  if (val < 9) {
    val++;
  } else {
    clearInterval(myInterval);
    return;
  }
}

function setFade() {
  myInterval = setInterval(fadeIn, 50);
}

// $(document).ready(function() {
//   $("body")
//     .hide()
//     .fadeIn(1500)
//     .delay(6000);
// });

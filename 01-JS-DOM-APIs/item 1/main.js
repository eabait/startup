const hiddenSection = document.getElementById("fadeInSection");
window.onload = () => {
  hiddenSection.style.opacity = 1;
};

// document.onload(e,()=>{
//     e.preventDefault()
// const val = 0;
// const myInterval;

// const fadeIn = () => {
//   const elem = document.getElementById("fadeInSection");
//   elem.style.opacity = "0." + val;
//   elem.style.filter = "alpha(opacity = " + val + "0)";
//   if (val < 9) {
//     val++;
//   } else {
//     clearInterval(myInterval);
//     return;
//   }
// }

// const setFade = ()=> {
//   myInterval = setInterval(fadeIn, 50);
// }
// })

// $(document).ready(function() {
//   $("body")
//     .hide()
//     .fadeIn(1500)
//     .delay(6000);
// });

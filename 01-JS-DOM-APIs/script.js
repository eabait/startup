window.onload = function() {
    document.querySelector(".hidden").style.visibility = "visible";
}

document.querySelector(".clic-me").addEventListener("click",buenosDias);

function buenosDias() {
    alert("Buenos dias");
}
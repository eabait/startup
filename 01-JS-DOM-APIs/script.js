var hidden = document.querySelector(".hidden");
var clickBtn = document.querySelector(".clic-me");

window.onload = function() {
   hidden.style.visibility = "visible";
}

clickBtn.addEventListener("click",entryData);


function buenosDias() {
    alert("Buenos dias");
}

function entryData() {
    fetch("http://api.icndb.com/jokes/random")
    .then(resp => resp.json())
    .then(dat => {
        hidden.innerHTML = dat.value.joke;
    })
    .catch(error => {
        hidden.innerHTML = JSON.stringify(error)
        hidden.style.color = "red";
    });
}
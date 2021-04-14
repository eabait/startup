var hidden = document.querySelector(".hidden");
var clickBtn = document.querySelector(".clic-me");
var lista = document.querySelector(".lista");
var listBtn = document.querySelector(".search");
var sourse = document.querySelector(".entry-src");

window.onload = function() {
   hidden.style.visibility = "visible";
}

clickBtn.addEventListener("click",clickMe);
listBtn.addEventListener("click",clickSearch);

function buenosDias() {
    alert("Buenos dias");
}

function clickMe() {
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

function clickSearch() {
    search(sourse.value);
}

function search(q = "JavaScript") {
    fetch(q)
    .then(resp => resp.json())
    .then(dat => {
        lista.innerHTML += `<li> <a href="${dat.documentation_url}"> ${dat.documentation_url}<a><li/>`
        document.querySelectorAll(".content.right li").forEach(item => item.setAttribute("class" ,"disp-none"));
    });
}


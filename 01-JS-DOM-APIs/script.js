var hidden = document.querySelector(".hidden");
var clickBtn = document.querySelector(".clic-me");
var lista = document.querySelector(".lista");
var listBtn = document.querySelector(".search");
var sourse = document.querySelector(".entry-src");
var table = document.querySelector(".table");

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



function matrix(arr) {
    let fragment = document.createDocumentFragment();
    for (let i = 0; i < arr.length; i++) {
        let tr = document.createElement('tr');
        let row = arr[i];
        for (let j = 0; j < row.length; j++) {
            let cell = row[j];
            let td = document.createElement('td');
            td.textContent = cell;
            td.classList.add("td")
            tr.appendChild(td);
        } 
        fragment.appendChild(tr);
    }
    table.appendChild(fragment);
}

const array = [
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12]
]
matrix(array);


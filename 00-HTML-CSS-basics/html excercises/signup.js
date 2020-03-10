const form = document.getElementById("signup-form");

function logSubmit(event) {
    alert("The form was submitted");
    event.preventDefault();
}

form.addEventListener("submit", logSubmit);
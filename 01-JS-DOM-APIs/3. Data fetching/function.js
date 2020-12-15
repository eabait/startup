function randomJoke(){
    fetch('http://api.icndb.com/jokes/random')
    .then((response) => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
          }
        return response.json();
    })
    .then((data) => {
        var text = document.createTextNode(data.value.joke); 
        var paragraph = document.getElementById("randomJoke");
        paragraph.innerHTML ="";
        paragraph.appendChild(text); 
    })
    .catch((error) => {
        console.error('There has been a problem with your fetch operation:', error);
        var section = document.getElementById("jokeSection");
        section.style.background = "red";
    });
}


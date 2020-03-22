function spawnjoke(){
  fetch("http://api.icndb.com/jokes/random")
    .then(function(response){
      return response.json();
    })
    .then(function(response){
      document.getElementById("joke-text").innerHTML = response.value.joke;
    })
    .catch(function(){
      document.getElementById("joke-content").style.backgroundColor = "red";
    });
}


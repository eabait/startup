function searchRepositories(event){
  event.preventDefault();
  var text = document.getElementById("search-text").value;
  fetch("https://api.github.com/search/repositories?q="+text)
    .then(function(response){
      return response.json();
    })
    .then(function(data){
      var repositories = document.getElementById("repositories");
      repositories.innerHTML = "";
      var listFetched = data.items;
      for (var i = 0; i < listFetched.length; i++) {
        repositories.innerHTML +="<li>" + listFetched[i].name + "</li>";
      }
    })
    .catch(function(error){
      console.error("A problem has appear with"+error)
    });
}
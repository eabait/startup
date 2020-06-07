function repoList(){
    const search = document.getElementById("search").value;
    fetch("https://api.github.com/search/repositories?q="+search)
    .then((response) => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
          }
        return response.json();
    })
    .then((data) => {
        listData(data);
    })
    .catch((error) => {
        console.error('There has been a problem with your fetch operation:', error);
    });
}

function listData(data){
    var repos = document.getElementById('repositories');
    repos.innerHTML = "";
    for(let i of data.items){
        //console.log(i.name);
        repos.innerHTML += '<li>Name: ' + i.name +'<a href="' + i.html_url + '"> URL </a></li>';
    }
}
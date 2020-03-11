document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("jokeBtn").addEventListener("click", fetchJokes);
  });
  
  async function fetchJokes() {
    console.log("Performing search");
    const urlString = "http://api.icndb.com/jokes/random";
    try{
      const res = await fetch(urlString);
      const data = await res.json();
      document.getElementById("joke-section").innerHTML = data.value.joke;
    }
    catch(err){
      console.error(err)
      document.getElementById("joke-section").style.backgroundColor = "red";
      document.getElementById("joke-section").style.opacity = 0.8;
      document.getElementById("joke-section").innerText = "ERROR"
      //change the fetch url to see the red brackground error;
    }
  
  }
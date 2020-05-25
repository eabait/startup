document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("jokeBtn").addEventListener("click", fetchJokes);
});

async function fetchJokes() {
  const jokeApiUrl = "http://api.icndb.com/jokes/random";
  try {
    const res = await fetch(jokeApiUrl);
    const data = await res.json();
    if (res.ok) {
      document.getElementById("joke-section").innerHTML = data.value.joke;
    } else {
      alert("an error has ocurred");
    }
  } catch (err) {
    document.getElementById("joke-section").style.backgroundColor = "red";
    document.getElementById("joke-section").style.opacity = 0.8;
    document.getElementById("joke-section").innerText = "ERROR";
  }
}

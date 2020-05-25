addEventListener("DOMContentLoaded", () => {
  document.querySelector("button").addEventListener("click", getResults);
});

async function getRepos() {
  const urlString = "https://api.github.com/search/repositories?q=javascript";

  try {
    const response = await fetch(urlString);
    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err);
  }
}

function getResults() {
  getRepos().then(results => {
    results.items.forEach(i => {
      const anchor = document.createElement("a");
      anchor.href = i.html_url;
      anchor.textContent = i.full_name;
      document.getElementById("repo-list").appendChild(anchor);
      document
        .getElementById("repo-list")
        .appendChild(document.createElement("br"));
    });
  });
}

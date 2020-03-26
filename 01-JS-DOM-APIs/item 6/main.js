const createTable = dataCollection => {
  const table = document.getElementById("table1");

  for (let i = 0; i < dataCollection.length; i++) {
    const row = document.createElement("tr");

    for (let j = 0; j < dataCollection[i].length; j++) {
      const dataCell = document.createElement("td");
      const data = document.createTextNode(dataCollection[i][j]);
      dataCell.appendChild(data);
      row.appendChild(dataCell);
    }
    table.appendChild(row);
  }
};

document.getElementById("creationBtn").addEventListener("click", e => {
  e.preventDefault();
  createTable([
    ["Luciano", "Sassano", "21"],
    ["Joe", "Frazier", "37"],
    ["Jimmy", "Reese", "24"]
  ]);
});

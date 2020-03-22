var recipe = [
  {
    itemName: "salted butter",
    quantity: "1 cup"
  },
  {
    itemName: "white (granulated) sugar",
    quantity: "1 cup"
  },
  {
    itemName: "light brown sugar",
    quantity: "1 cups"
  },
  {
    itemName: "pure vanilla extract",
    quantity: "2 tsp"
  },
  {
    itemName: "large eggs",
    quantity: "2"
  },
  {
    itemName: "all-purpose flour",
    quantity: "3 cups"
  },
  {
    itemName: "baking soda",
    quantity: "1 tsp"
  },
  {
    itemName: "baking powder",
    quantity: "1/2 tsp"
  },
  {
    itemName: "sea salt",
    quantity: "1 tsp"
  },
  {
    itemName: "chocolate chips",
    quantity: "2 cups"
  }
]

function createTable(recipe){
  var table = document.createElement("table");
  var table = document.createElement("table");
  table.setAttribute("class", "generatedTable");

  var tr = document.createElement("tr");
  var th = document.createElement("th");
  th.appendChild(document.createTextNode('Item'));
  tr.appendChild(th);
  var th = document.createElement("th");
  th.appendChild(document.createTextNode('Quantity'));
  tr.appendChild(th);
  table.appendChild(tr)

  for (let i = 0; i < recipe.length; i++) {
    var tr = document.createElement('tr');
    var tdItem = document.createElement('td');
    var tdQuantity = document.createElement('td');
    tdItem.appendChild(document.createTextNode(recipe[i].itemName));
    tdQuantity.appendChild(document.createTextNode(recipe[i].quantity));
    tr.appendChild(tdItem);
    tr.appendChild(tdQuantity);
    table.appendChild(tr);
  }

  document.getElementById("content").appendChild(table);
}



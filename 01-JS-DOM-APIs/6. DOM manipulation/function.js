var people = [
    {
        name: "Juan",
        lastName: "Gomez",
        age: 20
    },
    {
        name: "Jorge",
        lastName: "Sanz",
        age: 45
    },
    {
        name: "Abril",
        lastName: "Perez",
        age: 19
    },
    {
        name: "Nicolas",
        lastName: "Miszka",
        age: 24
    },
    {
        name: "Paulo",
        lastName: "Troquel",
        age: 35
    },
    {
        name: "Ximena",
        lastName: "ConX",
        age: 20
    }
  ]

  function generateTable(people) {
        var tableSection = document.getElementById('table');
        var table = document.createElement('table');
        table.setAttribute("class", "myTable");

        //-------------------THEAD-------------------
        
        var thead = document.createElement('thead');
        var tr = document.createElement('tr');
        var th = document.createElement('th');

        th.appendChild(document.createTextNode('Name'));
        tr.appendChild(th);
        var th = document.createElement('th');
        th.appendChild(document.createTextNode('Lastame'));
        tr.appendChild(th);
        var th = document.createElement('th');
        th.appendChild(document.createTextNode('Age'));
        tr.appendChild(th);
        thead.appendChild(tr);

        //-------------------------------------------

        table.appendChild(thead);

        //-------------------TBODY-------------------

        var tbody = document.createElement('tbody');
    
        for (var i = 0; i < people.length; i++) {
            var tr = document.createElement('tr');
            var tName = document.createElement('td');
            var tLastname = document.createElement('td');
            var tAge = document.createElement('td');

            tName.appendChild(document.createTextNode(people[i].name));
            tLastname.appendChild(document.createTextNode(people[i].lastName));
            tAge.appendChild(document.createTextNode(people[i].age));

            tr.appendChild(tName);
            tr.appendChild(tLastname);
            tr.appendChild(tAge);

            tbody.appendChild(tr);
        }

        table.appendChild(tbody);

        //-------------------------------------------
        

        tableSection.appendChild(table);
    }
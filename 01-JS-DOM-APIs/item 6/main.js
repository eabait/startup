function addRacer() {

    let position = document.sample.position.value;
    let racer = document.sample.name.value;

    let tr = document.createElement('tr');

    let td1 = tr.appendChild(document.createElement('td'));
    let td2 = tr.appendChild(document.createElement('td'));

    td1.innerHTML=position;
    td2.innerHTML=racer;

    document.getElementById('table1').appendChild(tr)
}
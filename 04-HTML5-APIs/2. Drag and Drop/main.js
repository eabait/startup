const drop = document.getElementById('drop-zone');

const removeDragData = (event) => {
    console.log('Removing drag data')
  
    if (event.dataTransfer.items) {
        event.dataTransfer.items.clear();
    } else {
        event.dataTransfer.clearData();
    }
};

const createList = (file, list) => {
    const ul = document.createElement('ul');
    const liName = document.createElement('li');
    const liType = document.createElement('li');
    const liSize = document.createElement('li');
    ul.setAttribute("class", "fileItem");

    liName.innerHTML = `File: ${file.name}`;
    liType.innerHTML = `Type: ${file.type}`;
    liSize.innerHTML = `Size: ${file.size}`;file.size
    ul.appendChild(liName);
    ul.appendChild(liType);
    ul.appendChild(liSize);
    list.appendChild(ul);
};

const dropHandler = (event) => {
    console.log('File(s) dropped');
    event.preventDefault();
    const list = document.getElementById('filesList');
    const count = document.getElementById('count');

    if (event.dataTransfer.items) {
        count.innerHTML = event.dataTransfer.items.length;
        for(let i = 0; i < event.dataTransfer.items.length; i++) {
            if (event.dataTransfer.items[i].kind === 'file') {
                const file = event.dataTransfer.items[i].getAsFile();
                createList(file, list);
                console.log('... file[' + i + '].name = ' + file.name);
            }
        }
    } else {
        count.innerHTML = event.dataTransfer.files.length;
        for (let i = 0; i < event.dataTransfer.files.length; i++) {
            console.log('... file[' + i + '].name = ' + event.dataTransfer.files[i].name);
            createList(event.dataTransfer.files[i], list);
        }
    } 
      
    removeDragData(event);
};

const dragOverHandler = (event) => {
    console.log('File(s) in drop zone'); 
    event.preventDefault();
};

drop.addEventListener('drop', dropHandler);
drop.addEventListener('dragover', dragOverHandler);

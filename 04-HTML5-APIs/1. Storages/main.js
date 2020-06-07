const saveButton = document.getElementById("save-button");
const clearButton = document.getElementById("clear-button");
const content = document.getElementById('text-data');

const localStorageSave = (key, value) =>{
    localStorage.setItem(key, value);
};

const localStorageClear = (key) =>{
    localStorage.removeItem(key);
};


// ---------- IndexedDB ----------

let bd;
let request = indexedDB.open('myDB', 1);

/*
indexedDB.open()

La solicitud de apertura no abre la base de datos 
ni inicia la transacción de inmediato. La llamada 
a la función open () devuelve un objeto 
IDBOpenDBRequest con un resultado (éxito) o valor 
de error que maneja como evento
El segundo parametro es la version de la bd

oneerror() y onsucces() sirven como controladores
por si la request falla o tiene exito
*/

request.onerror = (event) => {
    console.error('Database error: ' + event.target.errorCode);
};

request.onsuccess = (event) => {
    bd = event.target.result;
};

request.onupgradeneeded = (event) => {
    bd = event.target.result;
    bd.createObjectStore('content',{autoIncrement: false});
};

const indexedDBSave = (key, value) => {
    let tran = bd.transaction([key], "readwrite");
    let storage = tran.objectStore(key);
    storage.put(value, 'content');
}

const indexedDBClear = (key) => {
    let tran = bd.transaction([key], "readwrite");
    let storage = tran.objectStore(key);
    storage.clear();
}

// -------------------------------

const saveText = () => {
    localStorageSave('content', content.value);
    indexedDBSave('content', content.value);
    content.value = '';
};

const clearText = () => {
    localStorageClear('content');
    indexedDBClear('content');
    content.value = '';
};


saveButton.addEventListener("click", saveText);
clearButton.addEventListener('click', clearText);
const textarea = document.getElementById("entry");
const form = document.getElementById("form");
const saveBtn = document.querySelector(".save");
const clearBtn = document.querySelector(".clear");
const storage = window.localStorage;
const indexedDB = window.indexedDB;

clearBtn.addEventListener("click",clear);


function clear() {
    textarea.value = "";
}

function save() {
    storage.setItem(`value1`,`${textarea.value}` );
}

if(indexedDB){
    let db;
    const request = indexedDB.open("texts", 1 );
    request.onsuccess = () => db = request.result;
    request.onupgradeneeded = (e) => {
        db = e.target.result;
        const objectStore = db.createObjectStore('text',{ autoIncrement:true })
    };
    request.onerror = (err) => console.error(err);

    const saveDB = (data) =>{
        const transaction = db.transaction(['text'],'readwrite');
        const objectStore = transaction.objectStore('text');
        const request = objectStore.add(data);
        textarea.textContent = '';
    }

    form.addEventListener("submit",(e)=>{
        e.preventDefault();
        const data = {
          text: textarea.value
        }
        saveDB(data);
    });
}   

/*----------------------------------------*/


const info = document.querySelector(".files-zone p");
const thumbnail = document.querySelector("#thumbnail");

document.querySelectorAll(".files").forEach(inputElement=>{
    const fileZone = inputElement.closest(".files-zone");

    fileZone.addEventListener("dragover", e => e.preventDefault())

    fileZone.addEventListener("drop", e => {
        e.preventDefault();
        if(e.dataTransfer.files.length){
            inputElement.files = e.dataTransfer.files;
            updateTh(fileZone,e.dataTransfer.files[e.dataTransfer.files.length-1]);
        }
    })
})

function updateTh(zone, file) {
   if(file.type.startsWith("image/")){
       const reader = new FileReader();
       reader.readAsDataURL(file);  
       reader.onload = (r) =>{
          thumbnail.setAttribute('src',`${r.target.result}`)
          thumbnail.style.display = "block"
       }
   }
}



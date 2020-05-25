let db = null;
const request = indexedDB.open("notes", 1);
//------------------Add------------------------//
const btnAddContent = document.getElementById("save");
btnAddContent.addEventListener("click", addContent);
const noteCollection = [];

//-----------------Erase-----------------------//
const btnEraseAll = document.getElementById("erase");
btnEraseAll.addEventListener("click", eraseContent);

function addContent() {
  const value = document.getElementById("textContent").value;

  console.log(value);

  const note = {
    content: `${value} `
  };
  //-----------------LocalStorage----------------------//
  noteCollection.push(note);
  var jsonNotes = JSON.stringify(noteCollection);
  localStorage.setItem("content", jsonNotes);

  //------------------IndexDB--------------------------//
  const tx = db.transaction("personal_notes", "readwrite");
  tx.onerror = e => alert(`Error ${e.target.error}`);
  const pNotes = tx.objectStore("personal_notes");
  pNotes.add(note);
}

function eraseContent() {
  const req = indexedDB.deleteDatabase("notes");

  req.onsuccess = () => {
    console.log("Database deleted successfully");
  };

  req.onerror = e => {
    console.log("Could delete databse ,error: " + e.target.error);
  };

  req.onblocked = () => {
    console.log("Couldn't delete database due to the operation being blocked");
  };

  //------------------LocalStorage---------------------//

  localStorage.clear();
}

request.onupgradeneeded = e => {
  db = e.target.result;
  const pNotes = db.createObjectStore("personal_notes", {
    keyPath: "content"
  });
  console.log(`upgrade, database name: ${db.name} , version: ${db.version}`);
};

request.onsuccess = e => {
  db = e.target.result;
  console.log(`succes, database name. ${db.name} , version: ${db.version}`);
};

request.onerror = e => {
  console.log(`error: ${e.target.error} found`);
};

//-----------------------Drag and Drop--------------------------//

const holder = document.getElementById("holder");
const state = document.getElementById("status");

if (typeof window.FileReader === "undefined") {
  state.className = "fail";
} else {
  state.className = "success";
  state.innerHTML = "Drag a file into the box";
}

holder.ondragover = () => {
  this.className = "hover";
  return false;
};

holder.ondragend = () => {
  this.className = "";
  return false;
};

holder.ondrop = e => {
  this.className = "";
  e.preventDefault();

  const file = e.dataTransfer.files[0];
  const reader = new FileReader();
  if (file.type === "text/plain") {
    reader.onload = event => {
      console.log(event.target);
      holder.innerText = event.target.result;
    };

    console.log(file);

    reader.readAsText(file);

    return false;
  } else {
    alert("Only txt type allowed");
  }
};

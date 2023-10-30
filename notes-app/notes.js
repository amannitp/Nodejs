import fs from "fs";
import chalk from "chalk";
function createsNotes() {
  console.log(" Notes are created successfully");
}

function addNotes(tittle, author) {
  const notes = loadNotes();

  const duplicate = notes.filter((note) =>note.tittle === tittle);
  if (duplicate.length === 0) {
    notes.push({
      tittle: tittle,
      author: author,
    });
    saveNotes(notes);
    console.log("NEW Notes added successfully");
  } else {
    console.log("Tittle is already taken!");
  }
}

function saveNotes(notes) {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
}

function loadNotes() {
  try {
    const bufferData = fs.readFileSync("notes.json");
    const jsonData = bufferData.toString();
    return JSON.parse(jsonData);
  } catch (error) {
    return [];
  }
}


const removeNote=function(tittle){
    const notes=loadNotes();
    const notesToKeep=notes.filter((note)=>note.tittle!==tittle)
    
    if(notes.length > notesToKeep.length){
        console.log(chalk.green(" Notes are remove successfully"))
        saveNotes(notesToKeep)
    }else{
        console.log(chalk.red(" Notes are not remove"))
    }
    

}
export default { createsNotes, addNotes,removeNote };

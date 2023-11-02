import fs from "fs";
import chalk from "chalk";
const createsNotes=()=> {
  console.log(" Notes are created successfully");
}

const addNotes=(tittle, author)=> {
  const notes = loadNotes();
  debugger



  const duplicates = notes.filter((note) =>note.tittle === tittle);
  const duplicate = notes.find((note) =>note.tittle === tittle);
  if (duplicates.length === 0) {
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

const saveNotes=(notes) =>{
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
}

const loadNotes=()=> {
  try {
    const bufferData = fs.readFileSync("notes.json");
    const jsonData = bufferData.toString();
    return JSON.parse(jsonData);
  } catch (error) {
    return [];
  }
}


const removeNote=(tittle)=>{
    const notes=loadNotes();
    const notesToKeeps=notes.filter((note)=>note.tittle!==tittle)
    const notesToKeep=notes.find((note)=>note.tittle!==tittle)
    
    if(notes.length > notesToKeeps.length){
        console.log(chalk.green(" Notes are remove successfully"))
        saveNotes(notesToKeeps)
    }else{
        console.log(chalk.red(" Notes are not remove"))
    }
    

}
export default { createsNotes, addNotes,removeNote };

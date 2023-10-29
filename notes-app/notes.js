import fs from 'fs'
function createsNotes(){
    console.log(" Notes are created successfully");
}


function addNotes(tittle,author){
    const notes=loadNotes()
   
   
        const duplicate=notes.filter((note)=>{
            return note.tittle===tittle
        })
        if(duplicate.length===0){
            notes.push({
                tittle:tittle,
                author:author
            })
            saveNotes(notes)
            console.log("NEW Notes added successfully")
        }else{
            console.log("Tittle is already taken!")
        } 

    
   
    
}

function saveNotes(notes){
    const dataJSON=JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJSON)
}


function loadNotes(){

try {
  const bufferData=fs.readFileSync('notes.json');
  const jsonData=bufferData.toString();
  return JSON.parse(jsonData)
} catch (error) {
  return []

}


}
export default {createsNotes,addNotes};
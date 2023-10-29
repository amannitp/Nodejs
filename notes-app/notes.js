import fs from 'fs'
function createsNotes(){
    console.log(" Notes are created successfully");
}


function addNotes(tittle,author){
    const notes=loadNotes()
     notes.push({
        tittle:tittle,
        author:author
    })

    saveNotes(notes)
    
}

function saveNotes(notes){
    const dataJSON=JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJSON)
}


function loadNotes(){
    try{
        const dataBuffer=fs.readFileSync('notes.json');
        const dataJSON=dataBuffer.toString();
        return JSON.parse(dataJSON);

    }catch(error){
        console.log(error);
        return []
    }
   

}
export default {createsNotes,addNotes};
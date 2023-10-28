const fs=require('fs')
const { parse } = require('url')
const book={
    tittle:"Ego is the enemy",
    author:"Ruskin Bond",
   

}

const bookJSON=JSON.stringify(book) // convert object to json data
// console.log(bookJSON)


// const parseData=JSON.parse(bookJSON)
// console.log(parseData.author) // convert json data to object

fs.writeFileSync('1-json.json',bookJSON)

const dataBuffer=fs.readFileSync('1-json.json');
const dataJson=dataBuffer.toString();
const data=JSON.parse(dataJson)
console.log(data)

data.author='Ammely Kerr'
data.tittle="Playnihf "


fs.writeFileSync('1-json.json',JSON.stringify(data))

console.log(data)
//const fs=require('fs')
//fs.writeFileSync('note.txt','this file is  created by node js ')
//fs.writeFileSync('note.txt','this file is again created by node js ')  // replace existed text

//fs.appendFileSync('challenge1.txt','append file ')
//fs.appendFileSync('challenge1.txt',' again append file ','utf-8') // message is concat with previou one
//fs.appendFileSync('message.txt',' data to append ','utf-8','flash-true')


//require('./utils.js')  // import other file using require()

// const {firstName,lastName}=require('./utils.js')
// console.log(firstName)
// console.log(lastName)

// const name=require('./utils.js')

// console.log(name.firstName)
// console.log(name.lastName)

// console.log(name.printName())

// name.fun()
// console.log(name.add(5,6))
// //console.log(name)


// const getNotes=require('./utils.js')

// getNotes()

// const getsNotes=require("./notes.js")
// getsNotes()

//const validator =require('validator')

// console.log(validator.isEmail("amannitp@gmail.com"))
// console.log(validator.isEmail("amannitpgmail.com"))
// console.log(validator.isURL('https://www.npmjs.com/package/validator'))
//console.log(validator)

import fs from 'fs'
//console.log(fs)


import validator from 'validator'
//console.log(validator)

import chalk from 'chalk'
//console.log(chalk)

// console.log(chalk.bold.green('success'))
// console.log(chalk.red('error'))
// console.log(chalk.bold.yellow('warning'))
// console.log(chalk.bgRed(" Hello world"))
// console.log(chalk.bgGray('background gray'))



// take input from commondline 

// console.log(process.argv)
// console.log(process.argv[2])

const input=process.argv[2]

if(input==='add'){
    console.log('Notes are added')
}else if(input==='remove'){
    console.log(" Notes are removed")
}


// import yargsParser from 'yargs-parser'

// console.log(yargsParser)

 
// yargs.version('1.0.0')
// console.log(yargs.argv)

// const data=[...process.argv]

// for(let i=2;i<data.length;i++){
//     console.log(data[i])
// }
// console.log(data)
// import yargs from 'yargs'
// yargs.command({
//     command:"add",
//     description:" add a new notes",
//     handler:function(){
//         console.log(" Adding a new notes")
//     }
// })

// console.log(yargs.argv)

const tittle=process.argv[2];
const author=process.argv[3];

import notes from './notes.js'

notes.createsNotes();
notes.addNotes(tittle,author);
const fs=require('fs')
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


const getNotes=require('./utils.js')

getNotes()

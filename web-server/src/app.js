const path=require('path')
const express=require('express')

console.log(__dirname)
const publicDirectoryPath=path.join(__dirname,'../public')
console.log(publicDirectoryPath);

const app=express()

app.use(express.static(publicDirectoryPath))

app.get('',(req,res)=>{
    res.send(" <h1> Hello Express ! </h1>")
})

app.get('/help',(req,res)=>{
    res.send('htmlFile')
})

app.get('/about',(req,res)=>{
    res.send([{
        name:"aman",
        age:23,
        location: "patna"
    },
    {
        name:"amit",
        age:24,
        location: "Banglore"
    },
    {
        name:"Ajay",
        age:23,
        location: "Ahmedabad"
    },
    ])
})

app.listen(3000,()=>{
    console.log(" Server is run on port 3000")
})
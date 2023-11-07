const path=require('path')
const express=require('express')


// console.log(__dirname)
const publicDirectoryPath=path.join(__dirname,'../public')
const viewPaths=path.join(__dirname,'views')
console.log(publicDirectoryPath);


const app=express()
app.set('view engine','hbs')  // hbs npm package setup
app.set('views',viewPaths)
//  app.use(express.static(publicDirectoryPath))


app.get('index',(req,res)=>{
    res.render('index',{
        name:"Aman",
        Branch:"Electrical"
    })
})


app.get('',(req,res)=>{
    res.send(" <h1> Hello Express ! </h1>")
})

app.get('/help',(req,res)=>{
    res.send('htmlFile')
})

app.get('/about',(req,res)=>{
    if(!req.query.name){
        return res.send({
            error:"address is not available"
        })
    }
    res.send([{
        name:req.query.name,
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
app.get('*',(req,res)=>{
    res.send("<h1>404 Not Found</h1>")
})

app.listen(3000,()=>{
    console.log(" Server is run on port 3000")
})
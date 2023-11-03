setTimeout(()=>{
    console.log(" Callback function")
},1000)


const names =["Aman","Amit","Ajay","vivek"]

const nameStartWithA=names.filter((name)=>{
    return name.startsWith('Am')
})

console.log(nameStartWithA)


const geoCode=(address,callback)=>{

    setTimeout(()=>{
        const data={
            longitude:0,
            latitude:200
        }

   callback(data)
  

    },2000)
}

geoCode("Patna",(data)=>{
    console.log(data)
})


// console.log(" Starting ")


// setTimeout(()=>{
//     console.log(" 2 Second timer")
// },2000)


// setTimeout(()=>{
//     console.log(" 0 Second Timer")
// },0)
// console.log(" Ending ")

// 

const request=require('request')

const url='https://jsonplaceholder.typicode.com/photos'

request({url:url},(error,response)=>{
    console.log(typeof response)
    const data=JSON.stringify(response)
    //console.log(data)
    console.log(typeof data)
    const objdata=JSON.parse(data)
    console.log(typeof objdata)
})
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

// const url='https://api.weatherstack.com/current?access_key=6f08a9c6c2a41c4484ddfbbc374592c9&query=india'

// request({url:url},(error,response)=>{
//     if(error){
//         console.log(" Enable to connect")
//     }else if(response.body.error){
//         console.log(" unable to fiund location")
//     }else{
//         console.log(response.body);
//     }
// })

// const url="https://api.mapbox.com/geocoding/v5/mapbox.places/paris.json?access_token=pk.eyJ1IjoiYW1hbnJhajI1MDYiLCJhIjoiY2xvZ3BiOWlrMTE4MDJqcXBzbjFzaWY3diJ9.QMsSWcQ8OjMeF3BrsqS8Xg&limit=1"

// const request =require('request')

// request({url:url},(error,response)=>{
//     if(error){
//         console.log(" Enable to connect")
//     }else if(response.body.error){
//          console.log(" unable to fiund location")
//     }else{
//         console.log(response.body);
//     }
   
// })

const geoCode=(address,callback)=>{
    const url=`https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=pk.eyJ1IjoiYW1hbnJhajI1MDYiLCJhIjoiY2xvZ3BiOWlrMTE4MDJqcXBzbjFzaWY3diJ9.QMsSWcQ8OjMeF3BrsqS8Xg&limit=1`

    request({url:url,json:true},(error,response)=>{
        //console.log(response.body.features)

        if(error){
            callback(" Unable to connet sevice",undefined)
        }else if(response.body.features.length==0){
            callback("Unable to find location",undefined)

        }else{
            callback(undefined,response.body.features[0].center)
        }
    })



}

geoCode("India",(error,data)=>{
   if(error===undefined){
    console.log("longitude is "+data[0]);
    console.log("latitude is "+data[1]);
   }else{
    console.log(error)
   }
    
})
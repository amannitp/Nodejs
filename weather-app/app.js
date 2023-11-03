// console.log(" Starting ")


// setTimeout(()=>{
//     console.log(" 2 Second timer")
// },2000)


// setTimeout(()=>{
//     console.log(" 0 Second Timer")
// },0)
// console.log(" Ending ")

// 

 

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
const request=require('request')

const geoCode =require('./utils/geocode')
const forecast =require('./utils/forecast')



// geoCode("India",(error,data)=>{
//     if(data!==undefined){
//      console.log("longitude is "+data[0]);
//      console.log("latitude is "+data[1]);
//     }else{
//      console.log(error)
//     }
     
//  })



// forecast(736,-99,(error,data)=>{
  
//     if(data!==undefined){
//         console.log(data)
//     }else{
//         console.log(error)
//     }
// })



// callback chaining


const address=process.argv[2];

if(address===undefined){
    console.log(" Please provide location")
}else{
    geoCode(address,(error,geoCodeData)=>{
       
        if(geoCodeData.message!==undefined){
         console.log("longitude is "+geoCodeData.message);
         
        }else{
         console.log(" error is "+error)
         return;
        }
    
        forecast(geoCodeData.longitude,geoCodeData.latitude,(error,forecastData)=>{
      
            if(forecastData!==undefined){
                console.log(forecastData)
            }else{
                console.log(error)
                return;
            }
        })
         
     })
    
}








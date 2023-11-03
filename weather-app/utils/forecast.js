const request=require('request')

const forecast=(longitude,latitude,callback)=>{

    const url=`https://api.mapbox.com/geocoding/v5/mapbox.places/india.json?access_token=pk.eyJ1IjoiYW1hbnJhajI1MDYiLCJhIjoiY2xvZ3BiOWlrMTE4MDJqcXBzbjFzaWY3diJ9.QMsSWcQ8OjMeF3BrsqS8Xg&limit=1`

    request({url:url,json:true},(error,response)=>{
        //console.log(response.body.features)

        if(error){
            callback(" Unable to connet sevice",undefined)
        }else if(response.body.features.length==0){
            callback("Unable to find location",undefined)

        }else{
            callback(undefined,`longitude is ${longitude} and lattitude is ${latitude}`)
        }
    })
}
module.exports=forecast;


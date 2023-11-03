const request=require('request')
const geoCode=(address,callback)=>{
    const url=`https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=pk.eyJ1IjoiYW1hbnJhajI1MDYiLCJhIjoiY2xvZ3BiOWlrMTE4MDJqcXBzbjFzaWY3diJ9.QMsSWcQ8OjMeF3BrsqS8Xg&limit=1`

    request({url:url,json:true},(error,response)=>{
        const georaphicalAddress=response.body.features[0].center
        console.log(georaphicalAddress)
        if(error){
            callback(" Unable to connet sevice",undefined)
        }else if(response.body.features.length==0){
            callback("Unable to find location",undefined)

        }else{
            callback(undefined,{message:`longitude and altitude of ${address} is ${georaphicalAddress}`,longitude:georaphicalAddress[0],latitude:georaphicalAddress[1]})
        }
    })



}



module.exports=geoCode;
const axios=require('axios');

const getLugarLatLng= async (direccion)=>{
    
    let enodeUrl=encodeURI(direccion);
    let resp= await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${enodeUrl}&key=AIzaSyAh8x0IcoE80XoDvDWQxc5SDtX9e3wVXY4`);
     if(resp.data.status==='ZERO_RESULTS'){
        throw new Error(`No hay resultados para la ciudad ${direccion}`);
     } 
        //  let direccionL=resp.data.results[0].formatted_address;
        //  let {lat}=resp.data.results[0].geometry.location;
        //  let {lng}=resp.data.results[0].geometry.location;
        //  console.log(direccionL);
        //  console.log(lat);
        //  console.log(lng);
         //console.log(JSON.stringify(resp.data,undefined,2))
        return {
            direccionL:resp.data.results[0].formatted_address,
            lat:resp.data.results[0].geometry.location.lat,
            lng:resp.data.results[0].geometry.location.lng
            }
    }

    module.exports={
        getLugarLatLng
    }

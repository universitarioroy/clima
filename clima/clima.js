const axios=require('axios');
const getClima = async(lat,lng)=>{
    
     let resp= await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=851538a5c1d38213508a0e7553c69415`);
     if(resp.data.cod!==200){
        throw new Error(`No hay resultados para Lng & Ltd`);
     } 
       
     return resp.data.main.temp;
}


module.exports={
    getClima
}
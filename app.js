
const {argv} = require('../seccion4/config/yargs');
const  {getLugarLatLng}= require('../seccion4/lugar/lugar');
const  {getClima}=require('../seccion4/clima/clima');
//console.log(argv.direccion);
//let enodeUrl=encodeURI(argv.direccion);


const getInfo= async(dir)=>{
    try{
        let coord= await getLugarLatLng(dir);
        let clima= await getClima(coord.lat,coord.lng);      
        return `El clima en la ${dir} es de ${clima} °C`;
    }catch(e){
        return `No se puedo determinar el clima en ${dir}`;
    }
    
} 
//  getLugarLatLng(argv.direccion)
//      .then(resp=>{
//         console.log(resp);
//     }).catch(e=>{console.log(e)});

// getClima(lat,lng)
//     .then(resp=>{
//         console.log(resp);
//     }).catch(e=>{console.log(e)});

getInfo(argv.direccion).then(msj=>{
        console.log(msj);
}).catch(e=>{console.log(e)});
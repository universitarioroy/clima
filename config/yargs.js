const argv=require('yargs').options({
        direccion:{
            alias: 'd',
            desc: 'Direccion para obtener  el clima',
            demand:true 
        }

}).argv;

module.exports={
    argv
}
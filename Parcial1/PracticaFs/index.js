const fs  = require('fs');
const fsp = require('fs').promises;
const path = require('path');


fs.writeFile(path.join(__dirname,'archivoC.txt'),'archivo creado con api de callbacks de node js',(err)=>{
    if(err){
        console.log(err)
    }else{
        console.log('archivo creado')
    }
});

(async () =>{
    try {
        await fsp.writeFile(path.join(__dirname,'archivoP.txt'),'archivo creado con api de promesas de node js')
    } catch (error) {
        console.log(error)
    }
})();
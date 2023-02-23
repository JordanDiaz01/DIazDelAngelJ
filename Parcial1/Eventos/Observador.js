const fs = require('fs')
const path = require('path')
let archivo = path.join(__dirname,'observador.txt')
console.log(archivo)

obs=fs.watch(archivo,(ev,arch)=>{
    console.log(`sucedio el evento: ${ev} en el archivo ${arch}`)
})

obs.on('change',()=>{
    console.log('se cambió el archivo')
})
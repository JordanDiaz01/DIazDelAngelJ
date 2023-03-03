const fs = require('fs')
const path = require('path')
let archivo = path.join(__dirname,'lorem.txt')
console.log(archivo)

const st =fs.createReadStream(archivo,'utf-8')

st.on('error',(e)=>[
    console.log(e)
])

st.on('data',(chunk)=>{
    console.log(chunk)
})
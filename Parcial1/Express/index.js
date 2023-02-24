
const express= require('express')
const cors = require('cors')
const morgan = require('morgan')
const fs = require('fs')
const path = require('path')
const app  = express()
const accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })

app.use(express.json())
app.use(cors())
app.use(morgan('combined', { stream: accessLogStream }))

app.get('/alumnos/:carrera',(req,res)=>{
    console.log(req.params.carrera)
    res.jsonp({alumnos:"Carrera de "+ req.params.carrera})
})

app.get('/maestros',(req,res)=>{
    console.log(req.query.control)
    res.json({Maestro:"Información del maestro "+ req.query.control})

})
app.get('/administrativos',(req,res)=>{
    console.log(req.body.Nombre)
    res.json({PersonalAdmin:"Información del personal admin  "+ req.body.Nombre})

})

app.use((req,res)=>{
    res.status(404).json({status:'Página no encontrada'})
})
app.listen(8082,()=>{
    console.log("Running...")
})
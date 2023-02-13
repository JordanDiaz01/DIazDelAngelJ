
const express= require('express')
const app  = express()

app.use(express.json())
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
app.listen(8080,()=>{
    console.log("Running...")
})
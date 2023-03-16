const express  = require('express')
const app = express()


app.get('/empleado', (req,res)=>{
    res.json({respuesta: 'peticion get a ruta empleado'})
})
app.post('/empleado', (req,res)=>{
    res.json({respuesta: 'peticion post a ruta empleado'})
})
app.put('/empleado', (req,res)=>{
    res.json({respuesta: 'peticion put a ruta empleado'})
})
app.delete('/empleado', (req,res)=>{
    res.json({respuesta: 'peticion delete a ruta empleado'})
})

app.listen(8082,()=>{
    console.log('listening...')
})
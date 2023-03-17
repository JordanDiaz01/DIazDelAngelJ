const express = require('express')
const app = express()
const empleado = require('./empleado')



app.use(express.json())
app.use((req,res,next)=>{
    const {fecha} = req.body
    const isValid = new Date(fecha).getDay()
    isValid >=1 && isValid <=5 ? next() : res.json('No se trabaja los fines de semana')


})
app.use(empleado.Router)


app.listen(8082,()=>[
    console.log('Listening')
])

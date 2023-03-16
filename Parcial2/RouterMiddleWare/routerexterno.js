const express = require('express')
const app = express()
const empleado = require('./empleado')

app.use(express.json())
app.use((req,res,next)=>{
    req.body.empleado == "admin" ? next() : res.send(401).json('Empleado no autorizado')
    typeof req.body.empleado === 'undefined' ? res.send(401).json('Empleado no autorizado') : next()
})
app.use(empleado.Router)


app.listen(8082,()=>[
    console.log('Listening')
])

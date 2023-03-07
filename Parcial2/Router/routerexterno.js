const express = require('express')
const app = express()
const empleado = require('./empleado')

app.use(empleado.Router)

app.listen(8082,()=>[
    console.log('Listening')
])

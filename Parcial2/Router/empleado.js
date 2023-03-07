const express  = require('express')
const router = express.Router()

router.get('/empleado', (req,res)=>{
    res.json({respuesta: 'peticion get a ruta empleado'})
})
router.post('/empleado', (req,res)=>{
    res.json({respuesta: 'peticion post a ruta empleado'})
})
router.put('/empleado', (req,res)=>{
    res.json({respuesta: 'peticion put a ruta empleado'})
})
router.delete('/empleado', (req,res)=>{
    res.json({respuesta: 'peticion delete a ruta empleado'})
})

module.exports.Router = router
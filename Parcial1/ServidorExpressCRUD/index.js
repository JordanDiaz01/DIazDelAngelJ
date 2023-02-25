const express = require('express')
const mysql = require('mysql2/promise')
const fs = require('fs')
const path = require('path')
const {dirname} = require('path')
const app = express()

app.use(express.json())
app.use(express.text())



app.get('/empleados/',async(req,res)=>{

     const connection = await mysql.createConnection({host:'localhost', user: 'root', password: '1234',database: 'proyectoweb'});
        
    const [rows, fields] = await connection.execute('SELECT * FROM empleados');
    
    res.json(rows);
})
app.get('/empleados/:nombre',async(req,res)=>{
    
     const connection = await mysql.createConnection({host:'localhost', user: 'root', password: '1234',database: 'proyectoweb'});
  
    const [rows, fields] = await connection.execute('SELECT * FROM empleados where nombre= ?',[req.params.nombre]);
    
    if(rows.length==0){
        res.json("registro:No se encontro usuario")
    }
    else
    res.json(rows);
})

app.post('/empleados',async(req,res)=>{
   
    const connection = await mysql.createConnection({host:'localhost', user: 'root', password: '1234',database: 'proyectoweb'});
    const {nombre,ap_paterno,ap_materno,edad,domicilio,ciudad,estado,codigo_postal,correo,curp,rfc} = req.body
    let query = `insert into empleados values ('${nombre}', '${ap_paterno}', '${ap_materno}', '${edad}', '${domicilio}', '${ciudad}',' ${estado}', '${codigo_postal}', '${correo}', '${curp}', '${rfc}')`
    await connection.execute(query)
    //await connection.query('insert into empleados SET ? ',{nombre,ap_paterno,ap_materno,edad,domicilio,ciudad,estado,codigo_postal,correo,curp,rfc})
})

app.put('/empleados/:nombre',async(req,res)=>{
    const nombre= req.params.nombre
    const connection = await mysql.createConnection({host:'localhost', user: 'root', password: '1234',database: 'proyectoweb'});
    const {ap_paterno,ap_materno,edad,domicilio,ciudad,estado,codigo_postal,correo,curp,rfc} = req.body
    await connection.query('update empleados set ? where nombre = ?',[{ap_paterno,ap_materno,edad,domicilio,ciudad,estado,codigo_postal,correo,curp,rfc},nombre])
})
app.delete('/empleados/:nombre',async(req,res)=>{
    const nombre= req.params.nombre
    const connection = await mysql.createConnection({host:'localhost', user: 'root', password: '1234',database: 'proyectoweb'});
    await connection.query('delete from empleados where nombre = ?',[nombre])
    
})

app.use((req,res)=>{
    res.status(404).json({estado:"Ruta no encontrada"})
})

app.listen(8082,()=>{
    console.log("Running...")
})
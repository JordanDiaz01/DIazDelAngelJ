const express = require('express')
const mysql = require('mysql2/promise')
const fs = require('fs')
const path = require('path')
const {dirname} = require('path')
const app = express()

app.use(express.json())
app.use(express.text())



app.get('/empleados/',async(req,res)=>{
    // console.log(req.params.carrera)
     const connection = await mysql.createConnection(
        {host:'localhost', user: 'root', password: '1234',database: 'proyectoweb'});
  // query database
    const [rows, fields] = await connection.execute('SELECT * FROM empleados');
    // res.jsonp({alumnos:'Peticion get a la ruta de alumnos '+req.params.carrera})
    res.json(rows);
})
app.get('/empleados/:nombre',async(req,res)=>{
    // console.log(req.params.carrera)
     const connection = await mysql.createConnection({host:'localhost', user: 'root', password: '1234',database: 'proyectoweb'});
  // query database
    const [rows, fields] = await connection.execute('SELECT * FROM empleados where nombre= ?',[req.params.nombre]);
    // res.jsonp({alumnos:'Peticion get a la ruta de alumnos '+req.params.carrera})
    if(rows.length==0){
        res.json("registro:No se encontro usuario")
    }
    else
    res.json(rows);
})

app.post('/empleados',async(req,res)=>{
    let query = `insert into empleados VALUES ${req.body.nombre} `
})

app.delete('empleados/:nombre',async()=>{
    
})

app.use((req,res)=>{
    res.status(404).json({estado:"Ruta no encontrada"})
})

app.listen(8082,()=>{
    console.log("Running...")
})
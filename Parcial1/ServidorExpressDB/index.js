const express = require('express')
const mysql = require('mysql2/promise')
const fs = require('fs')
const path = require('path')
const {dirname} = require('path')
const app = express()

app.use(express.json())
app.use(express.text())



app.get('/vuelo/',async(req,res)=>{
    // console.log(req.params.carrera)
     const connection = await mysql.createConnection({host:'localhost', user: 'root', database: 'basewebvuelo'});
  // query database
    const [rows, fields] = await connection.execute('SELECT * FROM vuelo');
    // res.jsonp({alumnos:'Peticion get a la ruta de alumnos '+req.params.carrera})
    res.json(rows);
})
app.get('/vuelo/:id',async(req,res)=>{
    // console.log(req.params.carrera)
     const connection = await mysql.createConnection({host:'localhost', user: 'root', database: 'basewebvuelo'});
  // query database
    const [rows, fields] = await connection.execute('SELECT * FROM vuelo where id = ?',[req.params.id]);
    // res.jsonp({alumnos:'Peticion get a la ruta de alumnos '+req.params.carrera})
    if(rows.length==0){
        res.json("registro:No se encontro usuario")
    }
    else
    res.json(rows);
})

app.use((req,res)=>{
    res.status(404).json({estado:"Ruta no encontrada"})
})

app.listen(8080,()=>{
    console.log("Running...")
})
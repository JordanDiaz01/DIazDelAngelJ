const express = require('express')
const mysql = require('mysql2/promise')
const fs = require('fs')
const path = require('path')
const cors = require('cors')
const {dirname} = require('path')
const app = express()
const swaggerUI = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');


const swaggerOptions = {
    definition: {
    openapi: '3.0.0',
    info: {
    title: 'API Empleados',
    version: '1.0.0',
    },
    servers:[
    {url: "http://localhost:8082"}
    ],
    },
    apis: [`${path.join(__dirname,"./index.js")}`],
    };


app.use(express.json())
app.use(express.text())
app.use(cors())


/**
* @swagger
* /empleado:
*   get:
*   description: ruta de empleados!
    * responses:
        * 200:
*            description: Returns a mysterious string.
*/
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
    
    const[rows, fields] = await connection.execute(query)
    rows.affectedRows==1 ?  res.status(200).send('Empleado insertado con éxito!') : res.status(500).send('Ocurrió un error en el servidor')
    //await connection.query('insert into empleados SET ? ',{nombre,ap_paterno,ap_materno,edad,domicilio,ciudad,estado,codigo_postal,correo,curp,rfc})
})

app.put('/empleados/:nombre',async(req,res)=>{
    const nombre= req.params.nombre
    const connection = await mysql.createConnection({host:'localhost', user: 'root', password: '1234',database: 'proyectoweb'});
    const {ap_paterno,ap_materno,edad,domicilio,ciudad,estado,codigo_postal,correo,curp,rfc} = req.body
    const[rows, fields] = await connection.query('update empleados set ? where nombre = ?',[{ap_paterno,ap_materno,edad,domicilio,ciudad,estado,codigo_postal,correo,curp,rfc},nombre])

    rows.affectedRows==1 ?  res.status(200).send('Empleado actualizado con éxito!') : res.status(500).send('Ocurrió un error en el servidor')
})
app.delete('/empleados/:nombre',async(req,res)=>{
    const nombre= req.params.nombre
    const connection = await mysql.createConnection({host:'localhost', user: 'root', password: '1234',database: 'proyectoweb'});
    const [rows,fields] = await connection.query('delete from empleados where nombre = ?',[nombre])
    rows.affectedRows==1 ?  res.status(200).send('Empleado eliminado con éxito!') : res.status(500).send('Ocurrió un error en el servidor')
})

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs",swaggerUI.serve,swaggerUI.setup(swaggerDocs));

app.use((req,res)=>{
    res.status(404).json({estado:"Ruta no encontrada"})
})

app.listen(8082,()=>{
    console.log("Running...")
})

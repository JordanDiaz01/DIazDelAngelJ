const express = require('express')
const mysql = require('mysql2/promise')
const fs = require('fs')
const path = require('path')
const cors = require('cors')
const app = express()
const swaggerUI = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');
const { SwaggerTheme } = require('swagger-themes');
const redoc = require('redoc-express');
//Thema swagger json
const theme = new SwaggerTheme('v3');

const options = {
    explorer: true,
    customCss: theme.getBuffer('dark')
  };

const ContenidoReadme = fs.readFileSync(path.join(__dirname)+'/README.md',{encoding:'utf8',flag:'r'})
const apidef_string = fs.readFileSync(path.join(__dirname)+'/APIdef.json',{encoding:'utf8',flag:'r'})
const apidef_objeto = JSON.parse(apidef_string)
apidef_objeto.info.description=ContenidoReadme;
const swaggerOptions = {
    definition: apidef_objeto,
    apis: [`${path.join(__dirname,"./index.js")}`],
};

let redocTheme_objeto = JSON.parse(apidef_string)
/**
 * @swagger
 * 
 * components:
 *   schemas:
 *     empleado: 
 *       type: object
 *       properties:
 *         nombre:
 *           type: string
 *           description: Identificador del empleado
 *           example: Jordan
 *         ap_paterno:
 *           type: string
 *           description: apellido paterno del empleado
 *           example: Diaz
 *         ap_materno:
 *           type: string
 *           description: apellido materno  del empleado
 *           example: Del Angel
 *         edad:
 *           type: string
 *           description: edad del empleado
 *           example: 22
 *         domicilio:
 *           type: string
 *           description: domicilio del empleado
 *           example: 4212 Perl Std
 *         ciudad:
 *           type: string
 *           description: ciudad del empleado
 *           example: Nuevo Laredo
 *         estado:
 *           type: string
 *           description: estado del empleado
 *           example: Tamaulipas
 *         codigo_postal:
 *           type: string
 *           description: codigo postal del empleado
 *           example: 88000 
 *         correo:
 *           type: string
 *           description: correo del empleado
 *           example: jordandelangel.d@gmail.com
 *         curp:
 *           type: string
 *           description: curp del empleado
 *           example: DIAJ000630ADJQW
 *         rfc:
 *           type: string
 *           description: rfc del empleado
 *           example: DASINFASIUWQ
 *     empleadoUpdate: 
 *       type: object
 *       properties:
 *         ap_paterno:
 *           type: string
 *           description: apellido paterno del empleado
 *           example: Diaz
 *         ap_materno:
 *           type: string
 *           description: apellido materno  del empleado
 *           example: Del Angel
 *         edad:
 *           type: string
 *           description: edad del empleado
 *           example: 22
 *         domicilio:
 *           type: string
 *           description: domicilio del empleado
 *           example: 4212 Perl Std
 *         ciudad:
 *           type: string
 *           description: ciudad del empleado
 *           example: Nuevo Laredo
 *         estado:
 *           type: string
 *           description: estado del empleado
 *           example: Tamaulipas
 *         codigo_postal:
 *           type: string
 *           description: codigo postal del empleado
 *           example: 88000 
 *         correo:
 *           type: string
 *           description: correo del empleado
 *           example: jordandelangel.d@gmail.com
 *         curp:
 *           type: string
 *           description: curp del empleado
 *           example: DIAJ000630ADJQW
 *         rfc:
 *           type: string
 *           description: rfc del empleado
 *           example: DASINFASIUWQ 
 *     ResponseMessage: 
 *       type: object
 *       properties:
 *         message:
 *           type: string
 *           description: mensaje de confirmacion
 *           example: Empleado insertado con éxito!
 */




// const swaggerOptions = {
//     definition: {
//     openapi: '3.0.0',
//     info: {
//     title: 'API Empleados',
//     version: '1.0.0',
//     },
//     servers:[
//     {url: "http://localhost:8082"}
//     ],
//     },
//     apis: [`${path.join(__dirname,"./index.js")}`],
//     };


app.use(express.json())
app.use(express.text())
app.use(cors())


  /**
 * @swagger
 * /empleados/:
 *  get:
 *    tags:
 *      - empleado
 *    summary: Consultar todos los empleados
 *    description: Petición Get a la ruta de empleados
 *    responses:
 *      200:
 *        description: Devuelve todos los empleados de la base de datos en un json
 *        content:
 *         application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/empleado'
 */
app.get('/empleados/',async(req,res)=>{

     const connection = await mysql.createConnection({host:'localhost', user: 'root', password: '1234',database: 'proyectoweb'});
        
    const [rows, fields] = await connection.execute('SELECT * FROM empleados');
    
    res.json(rows);
})

/**
 * @swagger
 * /empleados/{nombre}:
 *  get:
 *    tags:
 *      - empleado
 *    summary: Buscar un empleado por nombre
 *    description: Petición Get
 *    parameters:
 *      - in: path
 *        name: nombre
 *        description: nombre del usuario a consultar
 *        required: true
 *    responses:
 *      200:
 *        description: Regresa el empleado solicitado
 *        content:
 *         application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/empleado'
 *      400:
 *        description: No se encontro el empleado
 */
app.get('/empleados/:nombre',async(req,res)=>{
    
     const connection = await mysql.createConnection({host:'localhost', user: 'root', password: '1234',database: 'proyectoweb'});
  
    const [rows, fields] = await connection.execute('SELECT * FROM empleados where nombre= ?',[req.params.nombre]);
    
    if(rows.length==0){
        res.status(400).json("registro:No se encontro usuario")
    }
    else
    res.json(rows);
})

 /**
 * @swagger
 * /empleados:
 *   post:
 *     tags:
 *       - empleado
 *     summary: Registrar un empleado
 *     description: Petición Post a la ruta de empleados para ingresar un nuevo registro
 *     requestBody:
 *       description: Crea un nuevo empleado
 *       content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/empleado'
 *     responses:
 *       200:
 *         description: Empleado insertado con éxito
 *         content:
 *          application/json:
 *             schema:
 *              $ref: '#/components/schemas/ResponseMessage'
 */
app.post('/empleados',async(req,res)=>{
   
    const connection = await mysql.createConnection({host:'localhost', user: 'root', password: '1234',database: 'proyectoweb'});
    const {nombre,ap_paterno,ap_materno,edad,domicilio,ciudad,estado,codigo_postal,correo,curp,rfc} = req.body
    let query = `insert into empleados values ('${nombre}', '${ap_paterno}', '${ap_materno}', '${edad}', '${domicilio}', '${ciudad}',' ${estado}', '${codigo_postal}', '${correo}', '${curp}', '${rfc}','','')`
    
    const[rows, fields] = await connection.execute(query)
    rows.affectedRows==1 ?  res.status(200).send('Empleado insertado con éxito!') : res.status(500).send('Ocurrió un error en el servidor')
    //await connection.query('insert into empleados SET ? ',{nombre,ap_paterno,ap_materno,edad,domicilio,ciudad,estado,codigo_postal,correo,curp,rfc})
})

/**
 * @swagger
 * /empleados/{nombre}:
 *  put:
 *    tags:
 *      - empleado
 *    summary: Actualizar empleado
 *    description: Peticion de tipo put a la ruta de empleados
 *    parameters:
 *      - in: path
 *        name: nombre
 *        description: nombre del usuario a actualizar
 *        required: true
 *    requestBody:
 *       description: Actualiza los datos de un empleado
 *       content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/empleadoUpdate'
 *       required: true
 *    responses:
 *      200:
 *        description: Empleado actualizado con éxito
 */
app.put('/empleados/:nombre',async(req,res)=>{
    const nombre= req.params.nombre
    const connection = await mysql.createConnection({host:'localhost', user: 'root', password: '1234',database: 'proyectoweb'});
    const {ap_paterno,ap_materno,edad,domicilio,ciudad,estado,codigo_postal,correo,curp,rfc} = req.body
    const[rows, fields] = await connection.query('update empleados set ? where nombre = ?',[{ap_paterno,ap_materno,edad,domicilio,ciudad,estado,codigo_postal,correo,curp,rfc},nombre])

    rows.affectedRows==1 ?  res.status(200).send('Empleado actualizado con éxito!') : res.status(500).send('Ocurrió un error en el servidor')
})

/**
 * @swagger
 * /empleados/{nombre}:
 *   delete:
 *     tags:
 *       - empleado
 *     summary: borrar un empleado
 *     description: Petición Delete a la ruta de Empleados para borrar un empleado por medio de un nombre.
 *     parameters:
 *       - name: nombre
 *         in: path
 *         description: nombre del empleado a ELIMINAR
 *         required: true
 *         schema:
 *          type: string
 *          format: string
 *     responses:
 *       200:
 *         description: Empleado eliminado con éxito
 */

app.delete('/empleados/:nombre',async(req,res)=>{
    const nombre= req.params.nombre
    const connection = await mysql.createConnection({host:'localhost', user: 'root', password: '1234',database: 'proyectoweb'});
    const [rows,fields] = await connection.query('delete from empleados where nombre = ?',[nombre])
    rows.affectedRows==1 ?  res.status(200).send('Empleado eliminado con éxito!') : res.status(500).send('Ocurrió un error en el servidor')
})


//swagger
const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs",swaggerUI.serve,swaggerUI.setup(swaggerDocs,options));

app.get("/docs.json",(req,res)=>{
    res.json(swaggerDocs);
})

app.get(
    '/redocs',
    redoc({
      title: 'API Docs',
      specUrl: '/docs.json',
      nonce: '', // <= it is optional,we can omit this key and value
      // we are now start supporting the redocOptions object
      // you can omit the options object if you don't need it
      // https://redocly.com/docs/api-reference-docs/configuration/functionality/
      redocOptions: {
        theme: redocTheme_objeto
      }
    })
  );

app.use((req,res)=>{
    res.status(404).json({estado:"Ruta no encontrada"})
})

app.listen(8082,()=>{
    console.log("Running in Port 8082")
})

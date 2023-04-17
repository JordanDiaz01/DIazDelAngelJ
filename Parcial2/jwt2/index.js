const express = require('express')
const  jwt = require('jsonwebtoken');
const https = require('https')
const fs = require('fs')
const path = require('path')
const mysql = require('mysql2/promise')
const app = express()
const md5 = require('md5')
app.use(express.json())
const verificarToken = (req,res, next)=>{

    let token = req.headers.authorization.substring(7,req.headers.authorization.length)
    var cert = fs.readFileSync(path.join(__dirname,'/ssl/publica.pem')) // get public key
    jwt.verify(token, cert, function(err, decoded){
        if(err){
             res.json('Acceso denegado!')
        }else{
            console.log(decoded)
            req.login = decoded.login
            next()
        }
    } 
    )
}
const auntenticarUsuario = async(req,res,next) =>{
    console.log(req.body.login)
    const connection = await mysql.createConnection({host:'localhost', user: 'root', password: '1234',database: 'proyectoweb'});
  
    const [rows, fields] = await connection.execute('SELECT * FROM empleados where login= ?',[req.body.login]);
    //console.log(password)
    if(rows.length==0){
        res.json("Error:No se encontro el usuario")
    }
    else{
        console.log(req.body.password)
        console.log(md5(req.body.password))
        console.log(rows[0].password);
        if(md5(req.body.password) == rows[0].password){
            next()
        }else{
            res.json("Error:Password no existe")
        }
    }
}
app.post('/login',auntenticarUsuario,(req,res,next)=>{
    console.log(req.body)
    var llaveprivada = fs.readFileSync(path.join(__dirname,'/ssl/privada.pem'))
    var token = jwt.sign( req.body, llaveprivada, { algorithm: 'RS256',expiresIn:'1h' });
    res.json({token})
})

app.get('/sistema',verificarToken,(req,res,next)=>{
    res.json({mensaje:'autorizado para ruta sistemas '+ req.login})
})

let ops = {
    key: fs.readFileSync(path.join(__dirname,'/ssl/key.pem')),
    cert:  fs.readFileSync(path.join(__dirname,'/ssl/cert.pem'))
}
https.createServer(ops,app).listen(8082,()=>{
    console.log('server listening...')
})


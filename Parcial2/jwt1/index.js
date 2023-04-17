const express = require('express')
const  jwt = require('jsonwebtoken');


const app = express()
app.use(express.json())
const verificarToken = (req,res, next)=>{
    //desencriptar token
    // si es correcto llamar next
    // si es incorrecto mandar res.json('no tiene caso')
    //console.log(req.headers.authorization)
    let token = req.headers.authorization.substring(7,req.headers.authorization.length)
    console.log(token)

    jwt.verify(token, 'secretkey', function(err, decoded) {
        if(err){
            res.json('Acceso denegado!')
        }else{
            next()
        }
      });
}
app.post('/login',(req,res,next)=>{
    console.log(req.body)
    const token = jwt.sign(req.body, 'secretkey');
    console.log(token)
    res.json({token:token})
})

app.get('/sistema',verificarToken,(req,res,next)=>{
    res.json({mensaje:'autorizado para ruta sistemas'})
})
app.listen(8082,()=>{
    console.log('server listening...')
})



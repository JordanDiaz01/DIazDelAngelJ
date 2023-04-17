const express = require('express')
const https = require('https')
const fs = require('fs')
const path = require('path')

const app = express()


app.get('/',(req,res)=>{
    res.send('servidor expres contestando')
})

let ops = {
    key: fs.readFileSync(path.join(__dirname,'/ssl/key.pem')),
    cert:  fs.readFileSync(path.join(__dirname,'/ssl/cert.pem'))
}
https.createServer(ops,app).listen(8082,()=>{
    console.log('server listening...')
})
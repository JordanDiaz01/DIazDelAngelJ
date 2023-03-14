const YAML = require('yaml')
const fs = require('fs')
const path = require('path')

const inputfile = fs.readFileSync(path.join(__dirname,'/data.yaml'), 'utf8')
const archivoArrNames = fs.readFileSync(path.join(__dirname,'/arreglo.yml'), 'utf8')
const archivoArr2  =fs.readFileSync(path.join(__dirname,'/arreglo2.yml'), 'utf8')
const archivoArrObj  =fs.readFileSync(path.join(__dirname,'/arrayobjs.yml'), 'utf8')

console.log(YAML.parse(inputfile))
console.log(YAML.parse(archivoArrNames))
console.log(YAML.parse(archivoArr2))
console.log(YAML.parse(archivoArrObj))



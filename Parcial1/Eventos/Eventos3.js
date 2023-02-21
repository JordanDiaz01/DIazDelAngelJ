let events=require('events');
//let em=new events.EventEmitter();
let util =require('util');

function saludar(){
    setTimeout(
    ()=>
   {this.emit('iniciaSaludo');
    console.log('Hola mundo');
    this.emit('terminaSaludo');
     },2000)
     return this;
}
util.inherits(saludar,events)
let sal= new saludar();

sal.on('iniciaSaludo',function(){
    console.log('la funcion sasludar emitio el evento incia saludo');
});
sal.on('terminaSaludo',function(){
    console.log('la funcion saludar emitio el evento termina saludo');
});
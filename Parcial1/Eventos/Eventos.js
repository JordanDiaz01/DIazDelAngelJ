const evs = require('events')
let em = new evs.EventEmitter()

em.on('saludar',(data)=>{
    console.log('hola mundo 1er listener ' + data)
})
em.addListener('saludar',(data)=>{
    console.log('hola mundo 2do listener ' + data)
})

em.emit('saludar','Juan')
const evs = require('events')

const saludar = ()=>{
    let em = new evs.EventEmitter()
    setTimeout(()=>{
        em.emit('Iniciasaludo')
        console.log('hola mundo')
        em.emit('Terminasaludo')
    },5000)
    return em
}

let saludo = saludar()
saludo.on('Iniciasaludo',()=>{
    console.log('la función saludar emitio el evento iniciaSaludo')
})

saludo.on('Terminasaludo',()=>{
    console.log('la función saludar emitio el evento termina saludo')
})



// Vamos a crear un Event Emitter
const EventEmitter = require('events')

const customEmitter = new EventEmitter()
// emit manda un dato
// on escucha determinado dato
customEmitter.on('response',(data, secondData) =>{
    console.log('received')
    console.log(data)
    console.log(secondData)
})
// La funcion no se ejectua una sola vez , cada linea es como un click
customEmitter.emit('response', 'Hello World', [4,5,6])
customEmitter.emit('response', 'Jeferson')
customEmitter.emit('response', 19)
customEmitter.emit('response', [1,2,3])
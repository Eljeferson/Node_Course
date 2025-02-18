const http = require('http')
const {createReadStream} = require('fs')


const server = http.createServer((req, res) => {
    const filseStream = createReadStream('./data/bigfile.txt', {
        encoding: 'utf-8',
    })

    filseStream.on('data',(chunk) => {
        //PARA ENVIAR EL STREAM
        filseStream.pipe(res)
    })

    filseStream.on('error', error => {
        console.log(error)
    })
})

server.listen(3000)
console.log(`server on port ${3000}`)
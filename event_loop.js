// console.log('first')

// setTimeout(()=> {
//     console.log('second')
// }, 3000) // sirve para ejecutar lo que lleva adentro luedo de un determinado tiempo , lo coloca como una tarea pendiente

// console.log('third')

const http = require('http')
const server  = http.createServer((req, res) => {
    if(req.url === '/'){
        res.write('welcome to the server')
        return res.end()
    }

    if(req.url === '/about'){
        // bloking code
        for(let i = 0; i < 100000; i++)
            console.log(Math.random() * i)

        return res.end("About page")
    }

    res.end("not found")
})

server.listen(3000)
console.log('Server on port 3000')
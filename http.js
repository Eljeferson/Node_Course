const http = require('http')

http.createServer((request, response) => {
    
    console.log(request.url) // muestra la url mas la imagen que aparece por defecto en la esquina de la pagina
    if(request.url == '/'){
        response.write('Welcome to the server')
        return response.end()
    }
    if(request.url == '/about'){
        response.write('acerca de ')
        return response.end() // ya no continua y retonar lo solicitado
    }

    response.write(`
    <h1>Not Fount</h1>
    <p> esta pagina no se encontro</p>    
    <a href="/">  volver a la pagina principal</a>
    `) // la respuesta que da el servidor
    response.end() // para decir que termino el mensaje
}).listen(3000) // para indicar en que puerto correra el programa

console.log('servidor escuchando en el puerto 3000')
const fs = require('fs')

// const first = fs.readFileSync('./data/first.txt', 'utf-8') // lee un archivo, se agrega el utf-8 para que reconozca letras y no muestre como un buffer
// const second = fs.readFileSync('./data/second.txt')

// console.log(first)
// console.log(second.toString()) // otra forma de mostrar las letras

// // const title = 'contenido que puede ser remplazada por el segundo parametro de writeFileSync'

// fs.writeFileSync('./data/third.txt', 'El contenido del archivo se especifica aqui', {
//     flag: 'a' // flag se pone cuando solo se quiere agregar contenido y cambiarlo
// }) // recibe una rutra para crear un archivo

// ESTO ES DE FORMA ASINCRONA ASYNC
fs.readFile('./data/first.txt',(error, data) =>{
    if(error) {
        console.log(error)
    }
    console.log(data.toString())

    fs.readFile('./data/second.txt',(error, data) =>{
        if(error) {
            console.log(error)
        }
        console.log(data.toString())
        fs.writeFile('./data/newfile.txt', 'archivo creado desde fs asincrono', (erro, data) => {
            console.log(erro)
            console.log(data)
        })
    } )

} )
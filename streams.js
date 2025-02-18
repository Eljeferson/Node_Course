// SOLO SE USA PARA CREAR EL ARCHIVO GRANDE (BIGFILE)
// const {writeFile} = require('fs/promises')

// const createBigFile = async () => {
//     await writeFile('./data/bigfile.txt','Hello world Hello world Hello world Hello world'.repeat(1000000))
// }
// createBigFile()


// LEERA EL ARCHIVO DE APOCO
const {createReadStream} = require('fs')
 
const stream = createReadStream('./data/bigfile.txt', {
    encoding: 'utf-8',
    highWaterMark: 16 * 1024 // 16KB
})

stream.on('data', (chunk) => {
    console.log(chunk)
})

stream.on('end', () => {
    console.log('Fin del archivo')
})

stream.on('error', (error) => {
    console.log(error)
})
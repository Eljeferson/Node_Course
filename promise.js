const {readFile} = require('fs/promises');
const {promisify} = require('util')

const readFilePromise = promisify(readFile)

// const getText = (pathFile) => {
//     return new Promise(function(resolve, reject){
//         readFile(pathFile, 'utf-8', (err, data) => {
//             if (err) {
//                 reject(err)
//             }
//             resolve(data)
//         })
//     })
// }

// getText('./data/third.txt')
//     .then((result) => console.log(result))
//     .catch(error => console.log(error))


async function read(){
    try{
     const result = await getText('./data/first.txt','utf-8') // el await hará que el resultado se  guarde
     const result2= await readFilePromise('./data/secont.txt','utf-8') // readlFilePromise remplaza a getText
     const result3 = await getText('./data/third.txt')
     console.log(result)
     console.log(result2)
     console.log(result3)
    }catch(error){
        console.log(error)
    }    
    } // el asyn hará que sea una función asíncrona
    read() // para ejecutar el código
    
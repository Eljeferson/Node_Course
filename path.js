const path = require('path')

const filePath = path.join('/public','dist', '/styles', 'main.css') // sirve para unir carpetas , da una salida valida que se puede copiar 
console.log(filePath) // toda la ruta
console.log(path.basename(filePath)) // permite extraer una url solo el archivo
console.log(path.dirname(filePath)) // permite extraer solo la ruta y mas no el archivo
console.log(path.parse(filePath)) // permite extraer la ruta en forma de objeto
console.log(path.resolve('dist')) // permite completar la ruta a partir de una ruta data que este incompleta
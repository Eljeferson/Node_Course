const web = require('./module/myModule')
// para solo exportar uno se usa const {lo que se exportara}  = requiere(...)
console.log(web)


// para importar el modulo creado en math
const math = require('./math/index')
console.log(math.subtract(10,20))
console.log(math.multiply(10,20))
console.log(math.divide(10,20))

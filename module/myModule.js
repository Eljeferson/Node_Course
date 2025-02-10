const myWebAddress = "faztweb.com"
const myNumber = 30

// para expoertar varias constantes se agrupa
const group = {
    myWebAddress : myWebAddress,
    myNumber : myNumber
}
// otra forma es pasar todos los nombres a exports
//module.exports = group


// para hacer exports individuales
module.exports.myNumber = myNumber
module.exports.myWebAddress = myWebAddress
console.log(module)

// si no se quiere compartir el moduelo solo crea y no se agrega a los exports

const os = require('os')
console.log(os.userInfo()) // para la infromacion del usuario
console.log(os.uptime()) // para ver el tiempo de encendido de la maquina
console.log(os.platform()) // para ver el sistema operativo en el cual se esta ejecutando
console.log(os.totalmem()) // para ver el total de memoria 
console.log(os.freemem()) // para ver la memoria libre
console.table({
    os:os.platform(),
    version: os.release(), // para ver la version
    totalmem: os.totalmem(),
})
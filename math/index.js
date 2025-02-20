function add(x,y){
    return x+y;
}
// se puede importar desd 1 hasta todos los modulos  se agregar " export" antes de ña function 
function subtract(x,y){
    return x-y;
}

function multiply(x,y){
    return x*y;
}

function divide(x,y){
    return x/y;
}
// module.exports = --> esto se puede usar en vez de exoirt default
// se usa lo de abajo por ser mas moderna
// para poder usar eso se debe agregar  "type" : "module", en el package.json  
export default  {
    add,
    subtract,
    multiply,
    divide
}
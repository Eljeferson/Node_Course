// SE PUEDE USAR SIN LA FUNCTION GRACIAS A "type" : "module"
async function loadData() {
    try{
        const res = await fetch('https://jsonplaceholder.typicode.com/posts') // SIRVE PARA TRAER DATOS MEDIANTE UNA URL
        const data = await res.json()
        console.log(data)
    }
    catch (error){
        console.log(error)
    }
}
loadData()

// OTRA FORMA
// fetch('https://jsonplaceholder.typicode.com/posts')
//     // convierte la respuesta en json
//     .then(res => res.json())
//     // muestra los datos
//     .then(data => console.log(data))
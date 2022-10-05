
let stockProductos = []

function cargarJSON(){
    fetch('../productos.json')
        .then(response => response.json)
        .then(data => data.json)
        return 
}

cargarJSON()
console.log(cargarJSON)
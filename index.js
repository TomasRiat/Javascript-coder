
let totalCompra = 0 
let componenteSeleccionado = parseInt(prompt("Ingresa el numero del componente a comprar: 1.placa de video 2.procesador 3.memoria ram"))

let seguirComprando = true
let decision
let productos = []

// declaracion de objetos

class componente{
    constructor(nombre,precio, id){
        this.nombre = nombre
        this.precio = precio
        this.id= id
    }
}

const placaDeVideo = new componente('placa de video',120000,1)
productos.push(placaDeVideo)
const procesador = new componente('procesador',70000,2)
productos.push(procesador)
const memoriaRam = new componente('memoria ram',20000,3)
productos.push(memoriaRam)

// seleccion de componentes

while (seguirComprando === true){
    const componenteSolicitado = productos.find(comp=>comp.id===componenteSeleccionado)
    if(componenteSolicitado){
        totalCompra = totalCompra + componenteSolicitado.precio
    }
    else{
        componenteSeleccionado = parseInt(prompt('ingrese un producto valido: 1.placa de video 2.procesador 3.memoria ram'))
        continue
    }

alert("El valor del producto es: " + totalCompra)

    decision = parseInt(prompt("Queres seguir agregando productos? 1.si 2.no"))
if (decision === 1) {
    componenteSeleccionado = parseInt(prompt("Ingresa el nombre del producto a comprar: 1.placa de video 2.procesador 3.memoria ram"))
    } else if (decision === 2)  {
        seguirComprando = false
    }
}

// cantidad de componentes

cantidadComponente = parseInt(prompt("Ingresa la cantidad del producto seleccionado"))


function multiplicacion (cantidad,compra){
    return cantidad * compra
}

function operacionMatematica(cantidad,compra,operacion){
    return operacion(cantidad,compra)
}

let precioTotal = operacionMatematica(cantidadComponente,totalCompra,multiplicacion )



alert("El valor por  " + cantidadComponente  + " Unidades del producto es: " + precioTotal)


// seleccion de cuotas a abonar

cantidadCuotas= parseInt(prompt("Ingresa la cantidad de cuotas a pagar -1, 3, 6, 8 o 12-"))


function cuotasAPagar (cuotas, precio) { 
    if (cuotas === 3) {
        precio = precio / 3
    }
    else if (cuotas === 6) {
        precio = precio / 6
    }
    else if (cuotas === 8) {
        precio = precio / 8
    }
    else if (cuotas === 12) {
        precio = precio / 12
    }
    return precio
}


let valorCuotas = cuotasAPagar(cantidadCuotas, precioTotal) 


alert("Usted va a abonar " + cantidadCuotas + " Cuotas de: " + valorCuotas)


console.log(productos)






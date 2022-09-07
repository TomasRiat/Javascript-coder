
let totalCompra = 0 
let componenteSeleccionado = parseInt(prompt("Ingresa el numero del componente a comprar: 1.placa de video 2.procesador 3.memoria ram"))

let seguirComprando = true
let decision

class Producto{
    constructor(nombre,precio){
        this.nombre = nombre
        this.precio = precio
    }
}

const placaDeVideo = new Producto('placa de video',120000)
const procesador = new Producto('procesador',70000)
const memoriaRam = new Producto('memoria ram',20000)



while (seguirComprando === true){
    if (componenteSeleccionado=== 1) {
        totalCompra = totalCompra + placaDeVideo.precio
    } else if (componenteSeleccionado=== 2) {
        totalCompra = totalCompra + procesador.precio
    } else if (componenteSeleccionado=== 3) {
        totalCompra = totalCompra + memoriaRam.precio
    }

alert("El valor del producto es: " + totalCompra)

    decision = parseInt(prompt("Queres seguir agregando productos? 1.si 2.no"))
if (decision === 1) {
    componenteSeleccionado = parseInt(prompt("Ingresa el nombre del producto a comprar: 1.placa de video 2.procesador 3.memoria ram"))
    } else if (decision === 2)  {
        seguirComprando = false
    }
}

cantidadComponente = parseInt(prompt("Ingresa la cantidad del producto seleccionado"))

let precioTotal = cantidadComponente * totalCompra

alert("El valor por  " + cantidadComponente  + " Unidades del producto es: " + precioTotal)

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





let animales = [gato,perro,caballo]

animales.splice()






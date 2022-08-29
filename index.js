let totalCompra = 0 
let componenteSeleccionado = parseInt(prompt("Ingresa el numero del componente a comprar: 1.placa de video 2.procesador 3.memoria ram"))

let seguirComprando = true
let decision

while (seguirComprando === true){
    if (componenteSeleccionado=== 1) {
        totalCompra = totalCompra + 120000
    } else if (componenteSeleccionado=== 2) {
        totalCompra = totalCompra + 70000
    } else if (componenteSeleccionado=== 3) {
        totalCompra = totalCompra + 20000
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

cantidadCuotas= parseInt(prompt("Ingresa la cantidad de cuotas a pagar"))

function cuotasAPagar (cuotas) {
    let cuotas = 0 
    if (cuotas === 3){
        division = 3
    } else if(cuotas === 6){
        division = 6
    } else if(cuotas === 8){
        division = 8
    } else if(cuotas === 12){
        division = 12
    }

    let valorCuotas = cuotas / division
    return valorCuotas
}
let valorCuotas = cuotasAPagar(precioTotal)

alert("Usted va a abonar " + cantidadCuotas + "cuotas de: " + valorCuotas)














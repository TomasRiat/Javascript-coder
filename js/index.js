const contenedorProductos = document.getElementById('contenedor-productos')

const contenedorCarrito = document.getElementById('carrito-contenedor')

const botonVaciar = document.getElementById('vaciar-carrito')
const botonComprar = document.getElementById('comprar-carrito')

const contadorCarrito = document.getElementById('contadorCarrito')

const cantidad = document.getElementById('cantidad')
const precioTotal = document.getElementById('precioTotal')
const cantidadTotal = document.getElementById('cantidadTotal')



let carrito = []

document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('carrito')){
        carrito = JSON.parse(localStorage.getItem('carrito'))
        actualizarCarrito()
    }
})

botonVaciar.addEventListener('click', () => {
    carrito.length = 0
    actualizarCarrito()
})


botonComprar.addEventListener('click', () => {
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Felicidades por su compra',
        showConfirmButton: false,
        timer: 1500
    })
})


// stockProductos.forEach((producto) => {
//     const div = document.createElement('div')
//     div.classList.add('producto')
//     div.innerHTML = `
//         <div class="card">
//         <p>${producto.nombre}</p>
//                 <div>
//                     <img class="imgProducto" src=${producto.img} alt="foto del producto"/>
//                 </div>
//                 <div>
//                     <p class="precioProducto">Precio:$${producto.precio}</p>
//                 </div>
//                 <div class="btn-container">
//                     <button id= "agregar${producto.id}" class="btnAgregar">add to cart</button>
//                 </div>
//             </div>
//     `
//     contenedorProductos.appendChild(div)


//     const boton = document.getElementById(`agregar${producto.id}`)

//     boton.addEventListener('click', () => {

//         agregarAlCarrito(producto.id)
        

// Toastify({

//     text: "Agregado al Carrito",
//     gravity: "bottom",
//     duration: 3000,
//     style: {
//         background: "#333133",
//     },
//     }).showToast();
    
//     })
// })


const agregarAlCarrito = (prodId) => {


    const existe = carrito.some (prod => prod.id === prodId) 
    if (existe){ 
        const prod = carrito.map (prod => { 
            if (prod.id === prodId){
                prod.cantidad++
            }
        })
    } else { 
        const item = stockProductos.find((prod) => prod.id === prodId)
        carrito.push(item)
    }
    actualizarCarrito() 
}

const eliminarDelCarrito = (prodId) => {
    const item = carrito.find((prod) => prod.id === prodId)

    const indice = carrito.indexOf(item) 

    carrito.splice(indice, 1) 
    actualizarCarrito() 
    console.log(carrito)
}

const actualizarCarrito = () => {
    
    contenedorCarrito.innerHTML = "" 

    carrito.forEach((prod) => {
        const div = document.createElement('div')
        div.className = ('productoEnCarrito')
        div.innerHTML = `
        <p>${prod.nombre}</p>
        <p>Precio:$${prod.precio}</p>
        <p>Cantidad: <span id="cantidad">${prod.cantidad}</span></p>
        <button onclick="eliminarDelCarrito(${prod.id})" class="boton-eliminar"><i class="bi bi-trash"></i></button>
        `

        contenedorCarrito.appendChild(div)
        
        localStorage.setItem('carrito', JSON.stringify(carrito))

    })
    
    contadorCarrito.innerText = carrito.length 
    console.log(carrito)

    precioTotal.innerText = carrito.reduce((acc, prod) => acc + prod.cantidad * prod.precio, 0)
}























                
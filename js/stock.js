const botonProductos = document.getElementById('botonProductos')


botonProductos.onclick = async () => {
    const infoProducto = await fetch('../productos.json')
    const infoProductoJson = await infoProducto.json()
    const stockProductos = infoProductoJson.results
    console.log(stockProductos)
    stockProductos.forEach(producto => {
        const div = document.createElement('div')
        div.classList.add('producto')
        div.innerHTML = `
            <div class="card">
            <p>${producto.nombre}</p>
                    <div>
                        <img class="imgProducto" src=${producto.img} alt="foto del producto"/>
                    </div>
                    <div>
                        <p class="precioProducto">Precio:$${producto.precio}</p>
                    </div>
                    <div class="btn-container">
                        <button id= "agregar${producto.id}" class="btnAgregar">add to cart</button>
                    </div>
                </div>
        `
        contenedorProductos.appendChild(div)

        const boton = document.getElementById(`agregar${producto.id}`)

    boton.addEventListener('click', () => {

        agregarAlCarrito(producto.id)
        

    Toastify({

        text: "Agregado al Carrito",
        gravity: "bottom",
        duration: 3000,
        style: {
            background: "#333133",
        },
        }).showToast();
        
        })
    })
}

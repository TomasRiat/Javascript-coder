
let componentes = []
let carrito = []

class Componente{
    constructor(id, nombre, precio, img){
        this.id = id
        this.nombre = nombre
        this.precio = precio
        this.img = img
    }
    desplegarComponentes(){
        const card = `
            <div class="card">
                <p>${this.nombre}</p>
                <div>
                    <img class='imgProducto' src=${this.img} alt="foto del producto"/>
                </div>
                <div>
                    <p>$${this.precio}</p>
                </div>
                <div class="btn-container">
                    <button id=${this.id} class='btnAgregar'>add to cart</button>
                </div>
            </div>
        `
        const container = document.getElementById('container')
        container.innerHTML += card
    }
    agregarEvento(){
        const btnAgregar = document.getElementById(this.id)
        const componenteEncontrado = componentes.find(componente => componente.id == this.id)
        btnAgregar.addEventListener('click', () => agregarAlCarrito(componenteEncontrado))
        localStorage.setItem('componenteSeleccionado', JSON.stringify(componenteEncontrado))
    }
}

let comp1 = new Componente('001', 'Msi Geforce Gtx 1660 Super Gaming X 6gb Gddr6', 150000, '../assets/img/prod00.png')
let comp2 = new Componente('002', 'Ryzen 7 3800XT 3ra Gen', 80000, '../assets/img/prod01.png')
let comp3 = new Componente('003', 'Corsair DDR4 8GB 3200MHZ Vengeance RGB PRO', 15000, '../assets/img/prod02.png')
let comp4 = new Componente('004', 'Intel Core i9-10900F', 100000, '../assets/img/prod03.png')
let comp5 = new Componente('005', 'Memoria Ram DDR4 8GB 3600MHz HP Series V8 RGB ', 11000, '../assets/img/prod04.png')
let comp6 = new Componente('006', 'RADEON RX 6800 SAPPHIRE NITRO+', 260000, '../assets/img/prod05.png')


componentes.push(comp1, comp2, comp3, comp4, comp5, comp6)

componentes.forEach(e => {
    e.desplegarComponentes()
}) 
componentes.forEach(e => {
    e.agregarEvento()
})



function agregarAlCarrito(componente) {

    let enCarrito = carrito.find(comp => comp.id == componente.id)
    
    if(!enCarrito){
        carrito.push({...componente, cantidad: 1})
    } else {
        let carritoFiltrado = carrito.filter(comp => comp.id != componente.id)
        carrito = [
            ...carritoFiltrado, 
            { ...enCarrito, cantidad: enCarrito.cantidad + 1}
        ]
    }

    contador.innerHTML =  carrito.reduce((acc, comp) => acc + comp.cantidad, 0)
    localStorage.setItem('info',JSON.stringify(componente))
}
const contador = document.getElementById('cartCounter')
contador.innerHTML = carrito.reduce((acc, comp) => acc + comp.cantidad, 0)






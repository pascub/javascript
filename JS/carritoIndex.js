// import { productos } from "./stock.js";

let carritoCompras = [];
                                // RENDERIZAR CARRITO

export const carritoIndex = (productoId) =>{
    const contenedorCarrito = document.getElementById("carrito-contenedor")

    const renderProductoCarrito = ()=>{
        let producto = productos.find( producto => producto.id == productoId);
        carritoCompras.push(producto);

        producto.cantidad = 1;
        fetch("./data.json")
        .then(response => response.json())
        .then(productos => {
            productos.array.forEach(producto => {
                let div = document.createElement('div');
                div.classList.add('productoEnCarrito');
                div.innerHTML = `<p>${producto.nombre}</p>
                        <p>Precio: ${producto.precio}</p> 
                        <p id="cantidad${producto.id}">Cantidad: ${producto.cantidad}</p>
                        <button id="eliminar${producto.id}" class="boton-eliminar" ><i class="fa-solid fa-trash-can"></i></button>
            `
        contenedorCarrito.appendChild(div);

        // this.guardarProductosLocalStorage(producto);

            })
        renderProductoCarrito();
        })
    };
};

                // ALMACENAR EN LOCAL STORAGE
        
    // function guardarProductosLocalStorage(){
    //     let productos;
    //     productos = this.obtenerProductosLocalStorage();
    //     productos.push(producto);
    //     localStorage.setItem('productos', JSON.stringify(productos));
    // }

    // function obtenerProductosLocalStorage () {
    //     let productoLS;
    //     if (localStorage.getItem('productos') === null){
    //         productoLS = [];
    //     }
    //     else {
    //         productoLS = JSON.parse(localStorage.getItem('productos'));
    //     }
    //     return productoLS;
    // }

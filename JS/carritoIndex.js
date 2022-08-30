import { productos } from "./stock.js";


let carritoCompras = [];
document.addEventListener('DOMContentLoaded', () => {
       fetchData()
       if (localStorage.getItem("carrito")) {
        carrito = JSON.parse(localStorage.getItem("carrito"))
        carritoIndex()
       }
}
)

                                // RENDERIZAR CARRITO


export const carritoIndex = (productoId) =>{
    const contenedorCarrito = document.getElementById("carrito-contenedor")

    const renderProductoCarrito = ()=>{
        let producto = productos.find( producto => producto.id == productoId);
        carritoCompras.push(producto);

        producto.cantidad = 1;
       
                let div = document.createElement('div');
                
                div.classList.add('productoEnCarrito');
                div.innerHTML = `<p>${producto.nombre}</p>
                        <p>Precio: ${producto.precio}</p> 
                        <p id="cantidad${producto.id}">Cantidad: ${producto.cantidad}</p>
                        <button id="eliminar${producto.id}" class="boton-eliminar" ><i class="fa-solid fa-trash-can"></i></button>
            `
        contenedorCarrito.appendChild(div);
        localStorage.setItem("carrito", JSON.stringify(carrito))
            }
        renderProductoCarrito();
        
        }
    


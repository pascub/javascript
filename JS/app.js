import { productos } from './stock.js' 
import { carritoIndex } from './carritoIndex.js';



const mostrarProductos = (productos) => {
    const contenedorProductos = document.getElementById('producto-contenedor');
    
    

    productos.forEach( producto => {
        const div = document.createElement('div')
        div.classList.add('card')
        div.innerHTML += `<div class="card" style="width: 18rem;">
                            <img src="${producto.img}" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">${producto.nombre}</h5>
                                <p class="card-text">Descripción:  ${producto.desc}</p>
                                <p class="card-text">Precio:$ ${producto.precio}</p>
                                <button class="btn btn-primary" id=boton${producto.id}>Comprar</button>
                            </div>
                        </div>`
    
    contenedorProductos.appendChild(div)

    const boton = document.getElementById(`boton${producto.id}`)
    boton.addEventListener('click', ()=>{
        
        Swal.fire({
            title: '¿Quieres añadirlo al carrito?',
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: 'Si, guardar',
            denyButtonText: `No, no guardar`,
          }).then((result) => {
            
            if (result.isConfirmed) {
              Swal.fire('Guardado')
              carritoIndex(producto.id)
            } else if (result.isDenied) {
              Swal.fire('No se guardó')
            }
          })
    })

    } )

}
mostrarProductos(productos)





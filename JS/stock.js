import { mostrarProductos } from "./app.js";

const productos = []
class Producto {
    constructor(id, nombre, desc, precio, img, cantidad){
        this.id = id;
        this.nombre = nombre;
        this.desc = desc;
        this.precio = precio;
        this.img = img;
        this.cantidad = 0;
    }
} 
const cargarProductos = async () => {
    const response = await fetch("../json/data.json");
    const dataProductos = await response.json();
    dataProductos.forEach(item => {
        productos.push(new Producto(item.id, item.nombre, item.desc, item.precio, item.img,))

    })
}
 
const global = async () => {
    await cargarProductos();
    mostrarProductos(productos);
}

global();

export {productos};
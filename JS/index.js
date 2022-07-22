
// PRIMER DESAFIO
// for (let i = 1; i <= 15; i++){
// let nombre = prompt ("Ingrese su nombre");
// let mensaje = `Hola ${nombre} tu turno es el número ${i}`
// alert(mensaje)
// if (i === 10) {
//     break;
// }
// }
// let noTurnos = "No quedan turnos disponibles"
// alert(noTurnos)


// SEGUNDO DESAFIO


// let nombre =prompt("ingrese su nombre");

// const suma = (a,b) => a + b;
// const resta = (a, b) => a - b;
// const iva = x => x * 0.21;


// let precioCosto =parseInt(prompt(`Hola ${nombre} Ingrese costo del producto`))
// let descuento = 50

// let precioFinal= resta (suma(precioCosto, iva(precioCosto)), descuento)
// alert("Su precio final es de " + precioFinal)+


// TERCER DESAFIO

// 
class Producto{
    constructor(nombre, precio){
        this.nombre = nombre;
        this.precio = precio;
        this.vendido = false;
    }
    vender(){
        this.vendido = true;
    }

}
let productos =[];
            //   VENDER PRODUCTOS
productos.push(new Producto("televisor", 10000));
productos.push(new Producto("cafetera", 7000));
productos.push(new Producto("tostadora", 5500));
productos.push(new Producto("microondas", 8750));

for (const producto of productos){
    if(producto.precio === 10000){
    producto.vender()
    }
};

console.log(productos);


            // SUMAR TOTAL
const carrito = [
    { id: 1, nombre:"televisor", precio: 10000},
    { id: 2, nombre:"cafetera", precio: 7000},
    { id: 3, nombre:"tostadora", precio: 5500},
    { id: 4, nombre:"microondas", precio: 8750}
];
let total = carrito.reduce ((acumulador, elemento) => + elemento.precio, 0);

console.log(total);

                // FILTRAR PRECIO

let resultado = carrito.filter((el) => el.precio > 7000)
console.log(resultado);


        // ORDENAR PRECIO DE MENOR A MAYOR
console.log(
carrito.sort ((a, b) => {
    if (a.precio > b.precio){
        return 1;
    }
    if (a.precio < b.precio) {
        return -1;
    }
    return 0;
})
)

                // DOM

// let inicio = document.getElementById("inicio");

// let seccion = prompt("Ingrese la sección deseada")

// if (seccion === "carrito"){
//     inicio.innerHTML = "<div> <h1>Usted se encuentra en el carrito de compras</h1> <ul> <li>televisor</li> <li>cafetera</li> <li>microondas</li> <li>tostadora</li>  </ul> </div>";
//     inicio.className = "carrito"
// } else if (seccion === "favoritos"){
//     inicio.innerHTML = "<h1>Usted se encuentra en sus favoritos</h1>"
//     inicio.className = "favoritos"
// }else {
//     saludo.innerHTML = "<h1>Bienvenido a nuestra pagina principal</h1>"
// }

let formulario = document.getElementById("formulario");
formulario.addEventListener("submit", formularioEditado);

function formularioEditado(e){
    e.preventDefault();
    if (e.target.children[0].value.includes("@")){
        let mensaje = document.createElement("div");
        mensaje.innerHTMl = "Se ha registrado correctamente";
        document.body.append(mensaje);
    }else {
        let mensaje = document.createElement("div");
        mensaje.innerHTML = "ingresar un correo válido";
        document.body.append(mensaje);
        e.target.children[0].value = "";
    }
}
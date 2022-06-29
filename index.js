


for (let i = 1; i <= 15; i++){
let nombre = prompt ("Ingrese su nombre");
let mensaje = `Hola ${nombre} tu turno es el número ${i}`
alert(mensaje)
if (i === 10) {
    break;
}
}
let noTurnos = "No quedan turnos disponibles"
alert(noTurnos)

import { lista1, lista2 } from './tienda.js';

window.onload = () => {

    for (let i = 0; i < lista2.length; i++) {
        for (let u = 0; u < lista2[i].length; u++) {
            let contenedor;
            nuevaSeccion = document.createElement('h2');
            if (lista2[i] instanceof Agricola) {
                contenedor = document.getElementById("agricultor");  
                nuevaSeccion.innerHTML = `Nombre: ${lista2[i][u].nombre}, Precio: ${lista2[i][u].precio}, Tipo: Muebles`;
            } else if (lista2[i] instanceof Deportivo) {
                contenedor = document.getElementById("deportivo");  
                nuevaSeccion.innerHTML = `Nombre: ${lista2[i][u].nombre}, Precio: ${lista2[i][u].precio}, Tipo: Muebles`;            
            } else if (lista2[i] instanceof Muebles) {
                contenedor = document.getElementById("muebles");  
                nuevaSeccion.innerHTML = `Nombre: ${lista2[i][u].nombre}, Precio: ${lista2[i][u].precio}, Tipo: Muebles`;            }

        }
        contenedor.appendChild(nuevaSeccion);
    }
}
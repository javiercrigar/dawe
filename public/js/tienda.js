import {Agricola} from './agricola.js'
import {Deportivo} from './deportivo.js'
import {Muebles} from './muebles.js'


const zanahoria = new Agricola("zanahoria", 0.50, "Valencia");
const manzana = new Agricola("manzana", 0.50, "Valencia");
const cebolla = new Agricola("cebolla", 0.50, "Valencia");
const pera = new Agricola("pera", 0.50, "Valencia");
const lechuga = new Agricola("lechuga", 0.50, "Valencia");
const remolacha = new Agricola("remolacha", 0.50, "Valencia");
const calabacin = new Agricola("calabacin", 0.50, "Valencia");

const gafas = new Deportivo("gafas de buceo", 12, "España");
const calzado = new Deportivo("calzado", 12, "España");
const gorra = new Deportivo("gorra", 12, "España");
const zapatilla = new Deportivo("zapatilla", 12, "España");

const mesilla = new Muebles("mesilla de noche", 48, "Canada");
const lampara = new Muebles("lampara de noche", 48, "Canada");
const escritorio = new Muebles("escritorio", 48, "Canada");
const sofa = new Muebles("sofa", 48, "Canada");


let lista = [];
lista.push(zanahoria);
lista.push(manzana);
lista.push(cebolla);
lista.push(pera);
lista.push(lechuga);
lista.push(remolacha);
lista.push(calabacin);

lista.push(gafas);
lista.push(calzado);
lista.push(gorra);
lista.push(zapatilla);

lista.push(mesilla);
lista.push(lampara);
lista.push(escritorio);
lista.push(sofa);



let lista1 = [];
for (let i = 0; i < lista.length; i++) {
    lista1.push(lista[i].constructor.tipoProducto());   
}

let agricolas = [];
let deportivos = [];
let muebles = [];
for (let i = 0; i < lista.length; i++) {
    if (lista[i] instanceof Agricola) {
        agricolas.push(lista[i]);
    } else if (lista[i] instanceof Deportivo) {
        deportivos.push(lista[i]);
    } else if (lista[i] instanceof Muebles) {
        muebles.push(lista[i]);
    }
}
let lista2=[agricolas,deportivos,muebles]

export {lista1, lista2};

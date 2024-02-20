import {Producto} from './producto.js'

export class Agricola extends Producto {
    constructor(nombre, precio, origen) {
      super(nombre, precio);
      this.origen=origen;
    }
    getorigen(){
        return this.origen;
    }
    setorigen(pOrigen){
        this.origen=pOrigen;
    }
    static tipoProducto() {
        return "Agricola";
    }
}
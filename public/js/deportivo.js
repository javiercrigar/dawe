import {Producto} from './producto.js';

export class Deportivo extends Producto {
    constructor(nombre, precio, fabricante) {
      super(nombre, precio);
      this.fabricante=fabricante;
    }   
    getorigen(){
        return this.fabricante;
    }
    setorigen(pFabricante){
        this.Fabricante=pFabricante;
    }
    static tipoProducto() {
        return "Deportivo";
    }
}
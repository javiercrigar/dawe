import {Producto} from './producto.js';

export class Muebles extends Producto {
    constructor(nombre, precio, material) {
      super(nombre, precio);
      this.material=material;
    }
    getorigen(){
        return this.material;
    }
    setorigen(pMaterial){
        this.Fabricante=pMaterial;
    }
    static tipoProducto() {
        return "Muebles";
    }

}
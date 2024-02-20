export class Producto{
    constructor(nombre, precio){
        this.nombre=nombre;
        this.precio=precio;
    }
    getnombre(){
        return this.nombre;
    }
    getprecio(){
        return this.precio;
    }
    setnombre(pnombre){
        this.nombre=pnombre;
    }
    setprecio(pprecio){
        this.precio=pprecio;
    }    
}    


//--------------------------Clase Constructora y un metodo------------------------------------
class Producto{
    constructor(nombre, marca,precio,tipoHardware){
        this.nombre = nombre;
        this.marca = marca;
        this.precio = precio;
        this.tipoHardware = tipoHardware;
    }

    /*convertirAdolares(){
        this.precio = producto1.precio / 150
        console.log(producto1.precio)
    }*/



}

//--------------------------Array de Objetos-------------------------------------------------

const productos = [{id: 1,nombre:"Ryzen 5 2600x", marca: "AMD",precio: 320000,tipoHardware: "Procesador"},
                 {id:2, nombre:"RTX 3060", marca:"Nvidia", precio: 175900, tipoHardware:"Placa de Video"},
                 {id:3, nombre:"Fuente 700w", marca: "Evga", precio: 24999, tipoHardware: "Fuente"},
                 {id:4, nombre:"Gabiente Gamer", marca:"Essenses", precio: 6449, tipoHardware: "Gabinete"}];
//productos.push(new Producto("Mother B450 Aorus", "Gigabyte", 16299, "Mother"));
//productos.push(new Producto("Disco solido HP S700", "HP", 8499, "Disco solido"));

//--------------------------Pregunta para el Usuario-----------------------------------------
let pregunta = confirm("Desea agregar productos a su carro?");

//--------------------------Funcion Agregar Productos----------------------------------------
function Agregar (){
    do {
       productos.push(new Producto (prompt("Nombre de su producto"),prompt("Marca de su Producto"),Number(prompt("Precio")),prompt("Tipo de Hardware")));

       var pregunta1 = confirm ("Desea segir agregando productos?")

    } while (pregunta1 == true);

}

//--------------------------Control de Flujo para el Usuario--------------------------------

if(pregunta == false){
    confirm("Desea saber el precio de su producto en dolares?");
    
}else{
    Agregar();
}


//--------------------------Metodo Find-----------------------------------------------------
const buscarProcesador = productos.find(tipoHardware => tipoHardware.id === 3); 
console.log(buscarProcesador)


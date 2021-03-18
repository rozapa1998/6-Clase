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
                 {id:4, nombre:"Gabiente Gamer", marca:"Essenses", precio: 6449, tipoHardware: "Gabinete"},
                 {id:5, nombre:"Mother B450 Aorus", marca: "Gigabyte",precio: 16299,tipoHardware: "Mother"},
                 {id:6, nombre: "Disco solido HP S700", marca: "HP", precio: 8499, tipoHardware: "Disco solido"}
]

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

//--------------------------Mostrar Productos-----------------------------------------------

console.log(productos.toString([1]));
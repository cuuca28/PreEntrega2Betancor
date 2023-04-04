class Producto{
    constructor(id, nombre, precio){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
    }
}

class ProductoController{
    constructor(){
        this.listaProductos = []
    }

    obtenerProductosDesdeAPI(){
        this.listaProductos = [
            new Producto(1, "Moby Dick", 300),
            new Producto(2, "Critical Plus", 280),
            new Producto(3, "Early Amnesia CBD", 260),
            new Producto(4, "OG Kush", 250),
            new Producto(5, "Bubba Kush", 270),
            new Producto(6, "Pakistan Chitral Kush", 330),
            new Producto(7, "White Widow", 310),
            new Producto(8, "Blueberry", 290),
            new Producto(9, "Ak-47", 320),
        ]
    }

    mostrarProductos(){
        let acumulador = ""
        this.listaProductos.forEach(producto => {
            acumulador += "\nid: " + producto.id + " nombre: " + producto.nombre + " precio: " + producto.precio
        })
        return acumulador
    }

    buscar(id){
        return this.listaProductos.find(el => el.id == id)
    }
}

class CarritoController{
    constructor(){
        this.listCarrito = []
    }
    
    agregar(producto) {
        this.listaCarrito.push(producto)
    }

    calcularTotal(){
        let acumulador = 0
        
        this.listaCarrito.forEach(producto =>{
            acumulador += prodcuto.precio * producto.cantidad
        })

        return acumulador;
    }
}

const controladorProductos = new ProductoController()
const controladorCarrito = new CarritoController()
controladorProductos.obtenerProductosDesdeAPI()

let rta = ""

do{
    alert(controladorProductos.mostrarProductos())

    let id = prompt("Ingrese el ID del producto a comprar")
    const producto = controladorProductos.buscar(id)

    if(producto){
        controladorCarrito.agregar(producto)
    }else{
        alert("El ID que ingresó no es válido")
    }
    
    rta = prompt("Ingrese 'PAGAR' para salir").toUpperCase()

}while(rta != 'PAGAR')

alert("El monto total a pagar es de : $"+controladorCarrito.calcularTotal())





/*
A continuacion podemos encontrar el código de un supermercado que vende productos.
El código contiene
    - una clase Producto que representa un producto que vende el super
    - una clase Carrito que representa el carrito de compras de un cliente
    - una clase ProductoEnCarrito que representa un producto que se agrego al carrito
    - una función findProductBySku que simula una base de datos y busca un producto por su sku
El código tiene errores y varias cosas para mejorar / agregar
​
Ejercicios
1) Arreglar errores existentes en el código
    a) Al ejecutar agregarProducto 2 veces con los mismos valores debería agregar 1 solo producto con la suma de las cantidades.    
    b) Al ejecutar agregarProducto debería actualizar la lista de categorías solamente si la categoría no estaba en la lista.
    c) Si intento agregar un producto que no existe debería mostrar un mensaje de error.
2) Agregar la función eliminarProducto a la clase Carrito.
    a) La función eliminarProducto recibe un sku y una cantidad (debe devolver una promesa).
    b) Si la cantidad es menor a la cantidad de ese producto en el carrito, se debe restar esa cantidad al producto.
    c) Si la cantidad es mayor o igual a la cantidad de ese producto en el carrito, se debe eliminar el producto del carrito.
    d) Si el producto no existe en el carrito, se debe mostrar un mensaje de error.
    e) La función debe retornar una promesa.
3) Utilizar la función eliminarProducto utilizando .then() y .catch()*/

// Cada producto que vende el super es creado con esta clase.
class Producto {
    sku;            // Identificador único del producto.
    nombre;         // Su nombre.
    categoria;      // Categoría a la que pertenece este producto.
    precio;         // Su precio.
    stock;          // Cantidad disponible en stock.

    constructor(sku, nombre, precio, categoria, stock) {
        this.sku = sku;
        this.nombre = nombre;
        this.categoria = categoria;
        this.precio = precio;

        // Si no me definen stock, pongo 10 por default.
        if (stock) {
            this.stock = stock;
        } else {
            this.stock = 10;
        }
    }
}

// Se crean todos los productos que vende mi super.
const queso = new Producto('KS944RUR', 'Queso', 10, 'lacteos', 4);
const gaseosa = new Producto('FN312PPE', 'Gaseosa', 5, 'bebidas');
const cerveza = new Producto('PV332MJ', 'Cerveza', 20, 'bebidas');
const arroz = new Producto('XX92LKI', 'Arroz', 7, 'alimentos', 20);
const fideos = new Producto('UI999TY', 'Fideos', 5, 'alimentos');
const lavandina = new Producto('RT324GD', 'Lavandina', 9, 'limpieza');
const shampoo = new Producto('OL883YE', 'Shampoo', 3, 'higiene', 50);
const jabon = new Producto('WE328NJ', 'Jabon', 4, 'higiene', 3);

// Se genera un listado de productos. Simulando una base de datos.
const productosDelSuper = [queso, gaseosa, cerveza, arroz, fideos, lavandina, shampoo, jabon];
console.log(productosDelSuper);

// CLASE CARRITO: Cada cliente que venga a mi super va a crear un carrito.
class Carrito {
    productos;      // Lista de productos agregados.
    categorias;     // Lista de las diferentes categorías de los productos en el carrito.
    precioTotal;    // Lo que voy a pagar al finalizar mi compra.

    // Al crear un carrito, empieza vacío.
    constructor() {
        this.precioTotal = 0;
        this.productos = [];
        this.categorias = [];
    }

    // Función que agrega cantidad de productos con sku al carrito.
    async agregarProducto(sku, cantidad) {
            
        console.log(`Agregando al carrito: ${cantidad} unidades del codigo ${sku}`);
            
            try {
                // Buscar el producto en la "base de datos".
                const producto = await findProductBySku(sku);
                console.log("Producto encontrado");

                //Consultar si el producto ya está en el carrito.
                const productoEnCarrito = this.productos.find(producto => producto.sku === sku);
               
                if (productoEnCarrito) {
                    
                    //Identificado el producto en el carrito, sumar las unidades para actualizar la cantidad.
                    productoEnCarrito.cantidad += cantidad;
                    console.log("Agregar:",cantidad,"unid//stock= ",productoEnCarrito.cantidad);

                } else {
                    
                // Creación de un nuevo producto en el carrito.
                    const nuevoProducto = new ProductoEnCarrito(sku, producto.nombre, cantidad);
                    this.productos.push(nuevoProducto);
                    this.categorias.push(producto.categoria);
                    
                    console.log("Crear un nuevo producto");
                    console.log("Se agregaron:",cantidad,"unid//stock=",cantidad);
                }

                this.precioTotal += producto.precio*cantidad;

            } catch (error) {
                console.log(`El producto ${sku} no fue encontrado`);
            } 

    } 


    //Función que elimina la cantidad de productos según sku,retorna una promesa.
    eliminarProducto(sku, cantidad) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
            const productoEnCarrito = this.productos.find(producto => producto.sku === sku);
            
            if (productoEnCarrito) {
                    
                if (cantidad < productoEnCarrito.cantidad) {
                    //Restar la cantidad del producto en el carrito:
                    productoEnCarrito.cantidad -= cantidad;
                    this.precioTotal -= productoEnCarrito.precio*cantidad;
                    console.log("Descontar:",cantidad,"unid//stock=",productoEnCarrito.cantidad);
                    
                } else if(cantidad >= productoEnCarrito.cantidad){
                    //Eliminar el producto del carrito:
                    const index = this.productos.indexOff(productoEnCarrito);
                    this.productos.splice(index, 1);
                    this.categorias.splice(index, 1);
                    this.precioTotal -= productoEnCarrito.precio * productoEnCarrito.cantidad;
                    console.log("Eliminar el producto del carrito");
                    //console.log("Descontar:",cantidad,"unid//stock= 0");
                }

                resolve("El carrito se ha actualizado");
               
            } else {
                reject("El producto no existe en el carrito");
            }
          }, 100);

        });

    }

    

} 

//Cada producto que se agrega al carrito es creado con esta clase.
class ProductoEnCarrito {
    sku;       // Identificador único del producto
    nombre;    // Su nombre
    cantidad;  // Cantidad de este producto en el carrito

    constructor(sku, nombre, cantidad) {
        this.sku = sku;
        this.nombre = nombre;
        this.cantidad = cantidad;
    }
}

// Esta Función busca un producto por su sku en la "base de datos" simulada.
function findProductBySku(sku) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const foundProduct = productosDelSuper.find(product => product.sku === sku);
            if (foundProduct) {
                resolve(foundProduct);
            } else {
                reject(`Product ${sku} not found`);
            }
        }, 1500);
    });
};

console.log("Listado de productos:");
productosDelSuper.forEach(producto => {
    console.log(`Sku: ${producto.sku}`);
    console.log(`Nombre: ${producto.nombre}`);
    console.log(`Categoria: ${producto.categoria}`);
    console.log(`Precio: $${producto.precio}`);
    console.log(`Stock: ${producto.stock}`);
    console.log("________________________");
});

const carrito= new Carrito();
console.log(carrito);
carrito.agregarProducto('KS944RUR', 2);
carrito.agregarProducto('WE328NJ', 2);
carrito.agregarProducto('WE328NJ', 2);
carrito.agregarProducto('WE328', 2);

carrito.eliminarProducto('WE328NJ', 2);

const productoEliminadoPromesa = eliminarProducto('WE328NJ', 2);
console.log(productoEliminadoPromesa);

productoEliminadoPromesa
.then((mensaje)=>{
    console.log(mensaje);
})
.catch((mensaje)=>{
    console.log(mensaje);
})
.finally(()=>{
    console.log("Finally");
});





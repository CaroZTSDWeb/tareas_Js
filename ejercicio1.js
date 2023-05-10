/*Ejercicio 1:

function crearPiramide(niveles=0){

for (let i = 1; i <=niveles; ++i) {
        let resultado = '';

        for (let j= 1; j <=i; ++j) {
            resultado += j+'' ;
            
        }

       console.log(resultado);
    }

} 

crearPiramide(5);
*/


/*Ejercicio 2:


let a=['rojo', 'azul','amarillo','verde'];
let b=['celeste','verde','rojo'];

function encontrarRep(a,b) {

    let repetidos= []
    for (let i of a && b) {
      if (i.a=== i.b) {

        repetidos.push (i);
            
        }
        
    }return console.log(repetidos)

}
encontrarRep(a,b)*/



////////////////////////////////////////////////////////////

/*
const datos1=['rojo', 'azul','amarillo'];
const datos2=['celeste','verd','rojo'];

function interseccion (datos1,datos2) {

    
   if (!Array.isArray(datos1) || !Array.isArray(datos2)) {
        throw TypeError('Los argumentos "datos1" y "datos2" deben ser arreglos.');
    
   } 

   if (typeof comparacion !== 'function') {
       throw TypeError('El argumento "comparacion" debe ser una funcion.');
    
   }
   
   let conjunto1 = [...datos1.map(d => comparacion(d))];
   let conjunto2 = [...datos2.map(d => comparacion(d))];
  

   return Array.from(new Set([...conjunto1].filter(e => new Set([...conjunto2]).has(e))));

}

try {
    console.log(interseccion(['rojo','azul','amarillo'], ['celeste','verde','rojo']));
} 
catch (e) {
    //console.log(`Error: ${e.message}`);
}
finally {
    console.log("El programa ha finalizado");
}

*/
/////////////////////////////////////////

//3)
//3.1) Crear las clases necesarias para generar carritos respetando la estructura del objeto dado.

/*let carrito = {
    montoTotal: 10,
    productos: ["Leche"]
};*/


class Carrito{               


    constructor (montoTotal, productos, unidades, precio) {
        this.montoTotal= montoTotal;
        this.productos= productos;
        this.unidades= unidades;
        this.precio= precio;

        
    }

    agregarProducto(nombre, precio, unidades) {  

        if (this.productos.includes('nombre'))  { 

        console.log(`El producto ${nombre} ya existe con ${unidades} unidades`);
            
        } else { 

            this.productos.push(nombre);

            this.montoTotal <= montoTotal+(precio*unidades);

            console.log(`Mis productos son ${this.productos} y el importe total es ${this.montoTotal}`);

        }

        
    }

}

    let carrito2 = new Carrito( 10,["leche"],2,5);
     console.log(carrito2);

    carrito2.agregarProducto("azucar",2,5); //agregar producto("Azucar", 5, 2);

    console.log(carrito2.productos);





//Resultado esperado
/*carrito2 = {
    montoTotal: 20,
    productos: ["Leche", "Azucar"]
}
//3.2) Método de la clase, agrega un producto y actualiza montoTotal.
/3.3 Si retorna true no agrega al carrito, si es false si agrega el producto.

//3.3)Agregar al ejercicio anterior una validación para no permitir duplicados e imprimir 
//un mensaje si el item ya existe “ya existe xxx con yyy unidades”*/
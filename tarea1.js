
//Ejercicio 1:

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
    
    
    
    //Ejercicio 2:
    
    
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
    encontrarRep(a,b)
    
    
    
    // Elercicio 3:
    
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
    
                this.montoTotal = this.montoTotal+(this.precio*this.unidades);
    
            }
    
     
        }
    
    }
    
        let carrito2 = new Carrito( 10,["leche"],2,5);
        carrito2.agregarProducto("azucar",2,5); 
        console.log(carrito2.montoTotal)
        console.log(carrito2.productos);
        console.log(carrito2);
// 6️⃣ ***** EJERCICIO 6 ALGORITMOS***** - ordenarRopa() 6️⃣
// Se desordenó todo el inventario de ropa! hay prendas por todas partes.
// Por el momento tendremos que solucionar el problema creando la función 🧦 ordenarRopa() 🧦, la cual recibirá por parámetros
// un array de objetos anidados, que representarán cada prenda. Cada objeto tendrá dentro una propiedad nombre y un precio entero.
// Tendrás que implementar un algoritmo de ordenamiento para poder organizar toda la ropa de MAYOR a MENOR según el precio.
//
//
// EJEMPLOS:
// Dado el siguiente arreglo:
// [{ nombre: 'Camiseta', precio: 12}, { nombre: 'Pantalon', precio: 2 }, { nombre: 'Saco', precio: 23 }, { nombre: 'Gorra', precio: 4 }]
//
// ordenarRopa(array) Devuelve ➡
// [{ nombre: 'Saco', precio: 23 }, { nombre: 'Camiseta', precio: 12 }, { nombre: 'Gorra', precio: 4 }, { nombre: 'Pantalon', precio: 2 }]
//
// REQUISITOS:
//  🟢 Implementar algún algoritmo de ordenamiento para ordenar el arreglo de MAYOR a MENOR
//  🟢 NO utilizar el método sort de array!

// 1.- Qué nos llega? Un array de objetos anidados con propiedades nombre y precio
// 2.- Qué se debe hacer? Ordenar el array de acuerdo al precio de mayor a menor
// 3.- Cómo proceder?

function ordenarRopa(ropa) {
  // Tu código aquí:
  let prices = [];
  for (let i=0;i<ropa.length;i++){
    prices.push(ropa[i].precio)
  }
  for(let i=0;i<prices.length;i++){
    let mayor = i;
    for(let j=i+1;j<prices.length;j++){
      if (prices[mayor] < prices[j]) {
        mayor = j;
      }
    }
    if (i !== mayor){
      let aux = prices[i];
      prices[i] = prices[mayor];
      prices[mayor] = aux;
    }
  }
  let ordered = [];
  for (let i=0;i<prices.length;i++) {
    let j = 0;
    while(prices[i] !==ropa[j].precio){
      j = j+1;
    }
    ordered.push(ropa[j]);
  }
  return ordered;
}

// ⚠️ NO MODIFICAR NADA POR DEBAJO DE ESTA LÍNEA ⚠️
module.exports = {
  ordenarRopa
};
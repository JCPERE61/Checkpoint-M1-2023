const Stack = require("../DS").Stack;
// ⚠️ NO MODIFICAR NADA POR ENCIMA DE ESTA LÍNEA ⚠️
//
//
//
//
// 2️⃣ ***** EJERCICIO 2 STACK***** - apilarPantalones() 2️⃣ 
// 
// Un cliente ha solicitado pantalones de una talla determinada. Es necesario ir a buscar al inventario los pantalones y obtener
// las prendas solicitadas según su talla
// Para esto, tendrás que implementar la función 👖 apilarPantalones 👖, la cual recibirá por parámetros un arreglo
// conteniendo multiples tallas, además de un número de talla a solicitar. Deberás retornar un objeto, el cual contendrá una nueva pila
// con los pantalones solicitados y el arreglo anterior con los pantalones restantes
// EJEMPLOS:
// Dado el siguiente arreglo (INPUT): [37, 38, 38, 39, 41, 36, 41, 41, 37, 42]
// apilarPantalones(arreglo, 38) Devuelve (OUTPUT) ➡
// {
//   pantalonesEncontrados: Stack([38, 38]),
//   pantalonesRestantes: Stack([37, 39, 41, 36, 41, 41, 37, 42])
// }
// REQUISITOS:
//  🟢 Respetar el principio de LIFO que tienen los stacks
//  🟢 Retornar un objeto que contenga:
//  - Una propiedad "pantalonesEncontrados" que sea un stack que contenga los pantalones con la talla solicitada
//  - Una propiedad "pantalonesRestantes" que sea un stack que contenga los pantalones restantes
//  🟢 Retornar false si el stack viene vacío

// 1.- Qué nos llega? Un arreglo con tallas de pantalones y una talla específica
// 2.- Qué se debe hacer? Un Stack con los pantalones Encontrados y un arreglo con los pantalones Restantes
// 3.- Cómo proceder?

function apilarPantalones(array, talla) {
  // Tu código aquí:
  var pantalonesEncontrados = new Stack();
  var pantalonesRestantes = new Stack();
  var obj = {};
  for (let i=0; i<array.length;i++){
    if (array[i] === talla){
      pantalonesEncontrados.push(talla);
    } else {
      pantalonesRestantes.push(array[i]);
    }
  }
  var tamano = pantalonesEncontrados.size();
  if (tamano === 0) return false;
  obj['pantalonesEncontrados'] = pantalonesEncontrados;
  obj['pantalonesRestantes'] = pantalonesRestantes;
  return obj;
};


// ⚠️ NO MODIFICAR NADA POR DEBAJO DE ESTA LÍNEA ⚠️
module.exports = {
  apilarPantalones
};
// 5️⃣ ***** EJERCICIO 5 RECURSIÓN***** - liquidacion() 5️⃣
//
// Implementar la función 💲 liquidacion() 💲 la cuál recibirá por parámetros un array de objetos anidados que
// Representarán algunas prendas de ropa en una vidriera, cada una podrá contener, o no, una etiqueta que indique su estado.
// Tendrás que recursivamente iterar el array, y retornar uno nuevo, sólo con los objetos que tengan la etiqueta "LIQUIDACION" asociada.
//
// EJEMPLOS:
//  Dado el siguiente arreglo: [{ camiseta: { LIQUIDACION: true } }, { gorro: { DESCUENTO: true } }, { abrigo: {} }, { pantalones: { LIQUIDACION: true } }]
//  liquidacion() Devuelve ➡
//  [{ pantalones: { LIQUIDACION: true } }, { camiseta: { LIQUIDACION: true } }]
//
// REQUISITOS:
//  🟢 Retornar un nuevo arreglo que contenga las prendas de ropa en LIQUIDACION
//  🟢 Implementar recursividad🔄!
//  🟢 Si el arreglo está vacío, retornar un mensaje que diga "No hay prendas en liquidación"
//
// CUIDADO: ⚠️ ⚠️ ⚠️ ⚠️  las prendas tiene que ir agregandose de derecha a izquierda como se muestra en el ejemplo de mas arriba. ⚠️ ⚠️ ⚠️ ⚠️
//
// TIP: tambien podes usar un rest parameter.

// 1.- Qué nos llega? Un arreglo de objetos anidados con o sin su estado
// 2.- Qué se debe hacer? Un arreglo que sólamente contenga los de LIQUIDACION
// 3.- Cómo proceder?

function liquidacion(array) {
  // Tu código aquí:
  if (array.length === 0) return "No hay prendas en liquidación";
  let i = array.length-1;
  while (i > -1){
  let obj1 = Object.keys(array[i])[0];
  let obj2 = array[i][obj1];
  if (Object.entries(obj2).length > 0){
   if (Object.keys(obj2)[0] === 'LIQUIDACION'){
      array.pop();}
  }
  i = i - 1;  }
  return array;
}

// ⚠️ NO MODIFICAR NADA POR DEBAJO DE ESTA LÍNEA ⚠️
module.exports = {
 liquidacion,
};

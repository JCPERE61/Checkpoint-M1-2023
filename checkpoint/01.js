const Queue = require("../DS").Queue;
// ⚠️ NO MODIFICAR NADA POR ENCIMA DE ESTA LÍNEA ⚠️
//
//  ----*** 👔 CLOTHES CHECKPOINT 👔 ***----
//
// Felicitaciones por llegar a esta instancia! El checkpoint que realizarás a continuación
// consistirá en resolver varios problemas que surgieron en una tienda de ropa/indumentaria.
// Tendrás que resolver cada uno de ellos, aplicando los conceptos aprendidos durante el Módulo Uno.
// 🍀 Suerte!!! 🍀
//
//
// 1️⃣ ***** EJERCICIO 1 QUEUE ***** - guardarCamisetas 1️⃣
// 
// Ha llegado un camión con un nuevo lote de camisetas, es necesario recoger todas y guardarlas en dentro de la tienda.
// Para esto tendrás que implementar la función guardarCamisetas, la cuál recibirá por parámetros una queue con muchas
// 👕 Camisetas 👕 que se tendrán que guardar en un objeto que nos servirá como contenedor.
//
// EJEMPLOS:
// Dada la siguiente queue (INPUT):
// ["Camiseta Blanca", "Camiseta Negra", "Camiseta Azul", "Camiseta Amarilla", "Camiseta Roja"]
// guardarCamisetas() Devuelve (OUTPUT) ➡ 
// {
//  Camiseta Blanca: Camiseta Blanca,
//  Camiseta Negra: Camiseta Negra,
//  Camiseta Amarilla: Camiseta Amarilla,
//  Camiseta Roja: Camiseta Roja
// }
//
// REQUISITOS:
//  🟢 Respetar el principio de FIFO que corresponde a las queues a la hora de guardar las camisetas
//  🟢 Retornar un objeto, que tendrá como key value, los elementos que agregas y quitas de la queue
//  🟢 SI O SI necesitás utilizar una queue!
// TIP: Chequear el archivo DS.js para ver la función constructora Queue, y ver sus métodos disponibles.

// 1.- Qué nos llega? Una Queue con muchas camisetas en un array
// 2.- Qué se debe hacer? Un objeto con las las propiedades y los valores correspondientes a cada elemento de la Queue
// 3.- Cómo proceder?

function guardarCamisetas(ropaQueue) {
  // Tu código aquí:
  var ordClothes = {};
  var sizecloth = ropaQueue.size();
  for (let i=0;i<sizecloth;i++){
    let item = ropaQueue.dequeue();
    ordClothes[item] = item;
  }
  return ordClothes;
};

// ⚠️ NO MODIFICAR NADA POR DEBAJO DE ESTA LÍNEA ⚠️
module.exports = {
  guardarCamisetas
};
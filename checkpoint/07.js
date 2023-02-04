const { LinkedList } = require('../DS');
// ⚠️ NO MODIFICAR NADA POR ENCIMA DE ESTA LÍNEA ⚠️
//
//
// 7️⃣ ***** EJERCICIO 7 ***** - LinkedList.migrarStock() 7️⃣ 
//  La tienda de ropa necesita migrar sus datos de stock de una lista a un objeto.
//  Para esto deberás agregar al prototype de LinkedList el método 📦 migrarStock() 📦, el cual deberá retornar todos los valores almacenados
//  de la lista en un nuevo objeto con formato nombre:stock.
//
// EJEMPLOS:
//  Dada la siguiente lista:
//
// ({nombre: 'Camisetas'}, stock: 22) ➡ ({nombre:'Pantalones', stock: 12}) ➡ ({nombre:'Zapatos', stock: 45}) ➡ ({nombre: 'Bufandas', stock: 12}) ➡ ({nombre: 'Sacos', stock: 4})
//
// lista.migrarStock() devuelve ➡
// {Camisetas: 22, Pantalones: 12, Zapatos: 45, Bufandas: 12, Sacos: 4}
//
//
// REQUISITOS:
// 🟢 Retornar un objeto con la prenda de ropa y su stock a modo de clave/valor mostrado en el ejemplo arriba
// 🟢 Si la lista está vacía retornar un mensaje que diga exactamente: "No hay stock para migrar"

// 1.- Qué nos llega? Una lista enlazada con las prendas y su stock
// 2.- Qué se debe hacer? Devolver un objeto con el nombre y stock en modo de clave/valor
// 3.- Cómo proceder?



LinkedList.prototype.migrarStock = function () {
  // Tu código aquí:
  if (this.head === null) return "No hay stock para migrar";
  var obj = {};
  var current = this.head;
  while(current !== null){
    let prop1 = current.value['nombre'];
    let prop2 = current.value['stock'];
    obj[prop1] = prop2;
    current = current.next;
  }
  return obj;
}

// ⚠️ NO MODIFICAR NADA POR DEBAJO DE ESTA LÍNEA ⚠️
module.exports = {
  LinkedList
};
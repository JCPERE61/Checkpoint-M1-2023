const { LinkedList } = require('../DS');
// ⚠️ NO MODIFICAR NADA POR ENCIMA DE ESTA LÍNEA ⚠️
//
//
// 8️⃣ ** EJERCICIO 8 LINKEDLIST** - tacharLista() 8️⃣ 
// 
// Llegó la hora de revisar el catálogo de ropa disponible! tendremos que tachar las que hayan se hayan agotado
// el stock
// Agregar al prototype de LinkedList el método 📄 tacharLista() 📄 el cuál recibirá por parámetros un array de strings,
// Tendrás que retornar una nueva lista en base a las prendas que hay en el array.
// Es decir, tendrás que agregar a la nueva lista los elementos que NO coincidan en la lista actual con el array.
//
// EJEMPLOS:
// Dada la siguiente lista de strings:
// ('Pantalon') ➡ ('Zapatos') ➡ ('Camisa') ➡ ('Calcetines') ➡ ('Gafas') ➡ ('Sweater') ➡
//
// Y dado el siguiente array por parámetros: ['Gafas', 'Zapatos']
// lista.tachar(array): Devuelve ➡
// ('Pantalon') ➡ ('Camisa') ➡ ('Calcetines') ➡ ('Sweater') ➡
//
// REQUISITOS:
// 🟢 Retornar una NUEVA LinkedList en base a los elementos del arreglo recibido por parámetros.
// 🟢 Si el arreglo viene vacío retornar la LinkedList COMPLETA.
// Tip: Tanto las LinkedList como los arreglos, contendrán siempre strings.

// 1.- Qué nos llega? Un arreglo con las prendas que se deben eliminar de la lista entregada.
// 2.- Qué se debe hacer? Devolver otra lista sin las prendas que constan en el arreglo
// 3.- Cómo proceder?

LinkedList.prototype.tacharLista = function(lista) {
  // Tu código aquí:
let newList = new LinkedList();
if (lista.length === 0) return this;
 let current = this.head;
  while (current) {
    for (let i=0;i<lista.length;i++) {
      if (current.value !== lista[i]) {
        newList.add(lista[i]);
        current.remove();
      } else {current = current.next;}
    }
    j = j +1;
  }
return newList;
}

 


// ⚠️ NO MODIFICAR NADA POR DEBAJO DE ESTA LÍNEA ⚠️
module.exports = {
//  LinkedList
};
const { BinarySearchTree } = require("../DS");
// ⚠️ NO MODIFICAR NADA POR ENCIMA DE ESTA LÍNEA ⚠️
//
//
//
// 9️⃣ ***** EJERCICIO 9 BINARYSEARCHTREE***** - BinarySearchTree.obtenerPrendas() 9️⃣
//
// Te han mandado a recoger una determinada prenda del inventario! Tendrás que buscar sobre el mismo
// Todas las que coincidan con la que te pidieron!
// Para esto tendrás que agregar al prototype de BinarySearchTree, el método 🩳 obtenerPrendas() 🩳, el cuál
// recibirá por parámetros un string, que representará el nombre de las prendas que se necesitan encontrar.
//
//
// EJEMPLOS:
// Dado el siguiente árbol:
//                          { nombre: "Camiseta", num: 13 }
//                          /                           \
//           {nombre: "Zapato", num: 7}          {nombre: "Camiseta", num: 24}
//                       /                               /                 \
//           {nombre: "Pollera", num: 6}   {nombre: "Zapato", num: 16}  {nombre: 27, num: 27}
//                     /                                                     \
//        {nombre: "Zapato", num: 3}                              {nombre: "Zapato", num: 45}
//                      \
//                  {nombre: "Zapato", num: 4}
//
//
//  BinarySearchTree.obtenerPrendas(Zapato) Devuelve ➡
//  ["Zapato", "Zapato", "Zapato", "Zapato"]
//
//  BinarySearchTree.obtenerPrendas(Camiseta) Devuelve ➡
//  ["Camiseta", "Camiseta"]
//
// REQUISITOS:
//  🟢 Recorrer el árbol y devolver en un array las prendas que coincidan con la solicitada
// ACLARACIÓN: Dentro del árbol se encuentran objetos, tal como lo muestra el ejemplo más arriba!
// TIP: Podés usar default parameters para ayudarte.

BinarySearchTree.prototype.obtenerPrendas = function (string) {
  // Tu código aquí:
};
// ⚠️ NO MODIFICAR NADA POR DEBAJO DE ESTA LÍNEA ⚠️
module.exports = {
  BinarySearchTree,
};

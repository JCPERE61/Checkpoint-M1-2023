// 4️⃣ ***** EJERCICIO 4 RECURSIÓN***** - atenderClientes() 4️⃣
//
//
// Implementar la función 👨‍👨‍👦 atenderClientes() 👨‍👨‍👧, la cual recibirá por parámetros un objeto
// de clientes que estarán esperando ser atendidos. Recursivamente debes eliminar los clientes hasta dejar el objeto vacío
//
//
// EJEMPLOS:
// Dado el siguiente objeto de clientes:
// {
//  1: "Franco",
//  2: "María",
//  3: "Alejo"
// }
//
// atenderClientes(clientes) Devuelve ➡ {}
//
// REQUISITOS:
//  🟢 Vaciar recursivamente el objeto de clientes y retornar el objeto vacío
// 
// Tip: Podés usar el operador delete para los objetos.

// 1.- Qué nos llega? Un objeto de clientes que quieren ser atendidos
// 2.- Qué se debe hacer? Recursivamente ir eliminando los clientes hasta dejar el objeto vacio.
// 3.- Cómo proceder?

function atenderClientes(clientes) {
  // Tu código aquí:
  let key = Object.keys(clientes).length;
  if (key === 0) return clientes;
  delete clientes[key];
  return atenderClientes(clientes);

}

// ⚠️ NO MODIFICAR NADA POR DEBAJO DE ESTA LÍNEA ⚠️
module.exports = {
  atenderClientes,
};

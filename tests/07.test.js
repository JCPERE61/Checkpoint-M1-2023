const { LinkedList } = require("../checkpoint/07");

describe("Ejercicio 07 - 📦 migrarStock() 📦", () => {
  

  test("Retornar un objeto con la prenda de ropa y su stock a modo de clave/valor", () => {
    const lista = new LinkedList();
    lista.add({nombre: 'Camisetas', stock: 22})
    lista.add({nombre:'Pantalones', stock: 12})
    lista.add({nombre:'Zapatos', stock: 45})
    lista.add({nombre: 'Bufandas', stock: 12})
    lista.add({nombre: 'Sacos', stock: 4})
    expect(lista.migrarStock()).toEqual({Camisetas: 22, Pantalones: 12, Zapatos: 45, Bufandas: 12, Sacos: 4});
  });

  test("Retornar un objeto con la prenda de ropa y su stock a modo de clave/valor", () => {
    const lista = new LinkedList();
    lista.add({nombre: 'Shorts', stock: 15})
    lista.add({nombre:'Medias', stock: 4})
    lista.add({nombre:'Ojotas', stock: 52})
    lista.add({nombre: 'Remeras', stock: 21})
    lista.add({nombre: 'Guantes', stock: 74})
    expect(lista.migrarStock()).toEqual({Shorts: 15, Medias: 4, Ojotas: 52, Remeras: 21, Guantes: 74});
  });

  test(`Si la lista está vacía retornar un mensaje que diga exactamente: "No hay stock para migrar"`, () => {
    const lista = new LinkedList();
    expect(lista.migrarStock()).toEqual("No hay stock para migrar");
  });
});
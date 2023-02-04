const { ordenarRopa } = require("../checkpoint/06");

describe("Test de ejercicio 06 - 🧦 ordenarRopa() 🧦", () => {
  test("ordenar el arreglo de MAYOR a MENOR", () => {
    const sortSpy = jest.spyOn(Array.prototype, "sort");
    const productos =[{ nombre: 'Camiseta', precio: 12}, { nombre: 'Pantalon', precio: 2 }, { nombre: 'Saco', precio: 23 }, { nombre: 'Gorra', precio: 4 }];
    expect(ordenarRopa(productos)).toEqual(
      [{ nombre: 'Saco', precio: 23 }, { nombre: 'Camiseta', precio: 12 }, { nombre: 'Gorra', precio: 4 }, { nombre: 'Pantalon', precio: 2 }]
    );
    expect(sortSpy).not.toHaveBeenCalled();
    const productos2 =[{ nombre: 'Remera', precio: 8}, { nombre: 'Media', precio: 1 }, { nombre: 'Buzo', precio: 23 }, { nombre: 'Falda', precio: 54 }];
    expect(ordenarRopa(productos2)).toEqual(
      [{ nombre: 'Falda', precio: 54 }, { nombre: 'Buzo', precio: 23 }, { nombre: 'Remera', precio: 8 }, { nombre: 'Media', precio: 1 }]
    );
    expect(sortSpy).not.toHaveBeenCalled();
    const productos3 =[{ nombre: 'Short', precio: 32}, { nombre: 'Calza', precio: 42 }, { nombre: 'Musculosa', precio: 1 }, { nombre: 'Zapatillas', precio: 13 }];
    expect(ordenarRopa(productos3)).toEqual(
      [{ nombre: 'Calza', precio: 42 }, { nombre: 'Short', precio: 32 }, { nombre: 'Zapatillas', precio: 13 }, { nombre: 'Musculosa', precio: 1 }]
    );
    expect(sortSpy).not.toHaveBeenCalled();
  });
});

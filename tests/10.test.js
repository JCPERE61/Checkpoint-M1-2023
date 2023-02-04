const { BinarySearchTree } = require("../checkpoint/10");

describe("Ejercicio 10 - 💰 vender() 💰", () => {
  it("Deberia modificar asignar las propiedades 'vendido: true' donde coincidan los valores", () => {
    const arbol = new BinarySearchTree({ nombre: "Camiseta", num: 20 })
    arbol.insert({nombre: "Saco", num: 7});
    arbol.insert({nombre: "Pantalon", num: 6} )
    arbol.insert({nombre: "Abrigo", num: 30})
    arbol.insert({nombre: "Gorra", num: 42})
    arbol.vender(['Gorra', 'Pantalon', 'Saco'])
    expect(arbol).toEqual({
      value: {nombre: 'Camiseta', num: 20},
      left: {
        value: {nombre: "Saco", num: 7, vendido: true},
        left: {
          value: {nombre: "Pantalon", num: 6, vendido: true},
          left: null,
          right: null
        },
        right: null
      },
      right: {
        value: {nombre: "Abrigo", num: 30 },
        left: null,
        right: {
          value: {nombre: 'Gorra', num: 42, vendido: true},
          left: null,
          right: null
        }
      }
    });
    // Segundo test
    const arbol2 = new BinarySearchTree({ nombre: "Zapato", num: 10 })
    arbol2.insert({nombre: "Saco", num: 12});
    arbol2.insert({nombre: "Pantalon", num: 14});
    arbol2.insert({nombre: "Abrigo", num: 11});
    arbol2.insert({nombre: "Gorra", num: 2});
    arbol2.insert({nombre: "Traje", num: 3})
    arbol2.vender(["Traje"]);
    expect(arbol2).toEqual({
      value: {nombre: "Zapato", num: 10},
      left: {
        value: {nombre: "Gorra", num: 2},
        left: null,
        right: {
          value: {nombre: "Traje", num: 3, vendido: true},
          left: null,
          right: null
        }
      },
      right: {
        value: {nombre: "Saco", num: 12},
        left: {
          value: {nombre: "Abrigo", num: 11},
          left: null,
          right: null
        },
        right: {
          value: {nombre: "Pantalon", num: 14},
          left: null,
          right: null
        }
      }
    });
  });
  it("Deberia retornar false si el arreglo esta vacio", () => {
    const arbol = new BinarySearchTree({ nombre: "Camiseta", num: 20 })
    const arbol2 = new BinarySearchTree({ nombre: "Traje", num: 10 })
    expect(arbol.vender([])).toEqual(false);
    expect(arbol2.vender([])).toEqual(false);
  });
});

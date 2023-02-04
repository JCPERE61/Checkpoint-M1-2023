const { BinarySearchTree } = require("../checkpoint/09");

describe("Ejercicio 09 - 🩳 obtenerPrendas() 🩳", () => {
  test("Recorrer el árbol y devolver en un array las prendas que coincidan con la solicitada", () => {
    const arbol = new BinarySearchTree({ nombre: "Camiseta", num: 13 });

    arbol.insert({ nombre: "Abrigo", num: 7 });
    arbol.insert({ nombre: "Pantalon", num: 6 });
    arbol.insert({ nombre: "Abrigo", num: 30 });
    arbol.insert({ nombre: "Camiseta", num: 42 });

    expect(arbol.obtenerPrendas("Abrigo")).toEqual(["Abrigo", "Abrigo"]);

    const arbol2 = new BinarySearchTree({ nombre: "Pantalon", num: 5 });

    arbol2.insert({ nombre: "Medias", num: 7 });
    arbol2.insert({ nombre: "Camiseta", num: 6 });
    arbol2.insert({ nombre: "Abrigo", num: 30 });
    arbol2.insert({ nombre: "Camiseta", num: 42 });

    expect(arbol2.obtenerPrendas("Medias")).toEqual(["Medias"]);
  });
});

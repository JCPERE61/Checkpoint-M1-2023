// Se pueden testear las llamadas utilizando jest.spyOn sobre la función atenderClientes, y asegurarse de que el estudiante utilice la recursión para resolver el problema
const { atenderClientes } = require("../checkpoint/04");
describe("Ejercicio 04 - 👨‍👨‍👦 atenderClientes() 👨‍👨‍👦", () => {
  test("Recursivamente debes eliminar los clientes hasta dejar el objeto vacío", () => {
    const lista1 = {
      1: "Franco",
      2: "María",
      3: "Alejo",
    };

    expect(atenderClientes(lista1)).toEqual({});

    const lista2 = {
      1: "Franco",
      2: "María",
      3: "Alejo",
      4: "María",
      5: "Jose",
    };

    expect(atenderClientes(lista2)).toEqual({});
  });
});

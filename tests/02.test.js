const { apilarPantalones } = require('../checkpoint/02');
const Stack = require("../DS").Stack;
describe("Ejercicio 02 - calcularIndice", () => {

  
   
  test("Deberás retornar un objeto, el cual contendrá la nueva pila con los pantalones solicitados y la anterior con los pantalones restantes", () => {
    expect(apilarPantalones([37, 38, 38, 39, 41, 36, 41, 41, 37, 42], 38)).toEqual({"pantalonesEncontrados": { array: [38, 38] }, "pantalonesRestantes": { array: [37, 39, 41, 36, 41, 41, 37, 42]}});
    expect(apilarPantalones([37, 38, 38, 39, 41, 36, 41, 41, 37, 42], 38).pantalonesEncontrados).toBeInstanceOf(Stack);
    expect(apilarPantalones([37, 38, 38, 39, 41, 36, 41, 41, 37, 42], 41)).toEqual({"pantalonesEncontrados": { array: [41, 41, 41] }, "pantalonesRestantes": { array: [37, 38, 38, 39, 36, 37, 42]}});
    expect(apilarPantalones([37, 38, 38, 39, 41, 36, 41, 41, 37, 42], 41).pantalonesEncontrados).toBeInstanceOf(Stack);
    expect(apilarPantalones([39, 39, 41, 45, 45, 45, 46, 41, 45], 45)).toEqual({"pantalonesEncontrados": { array: [45, 45, 45, 45] }, "pantalonesRestantes": { array: [39, 39, 41, 46, 41] }});
    expect(apilarPantalones([39, 39, 41, 45, 45, 45, 46, 41, 45], 45).pantalonesEncontrados).toBeInstanceOf(Stack);
  });
  test("retorna false si viene vacio stack", () => {
    expect(apilarPantalones([], 80)).toEqual(false);
  });
});
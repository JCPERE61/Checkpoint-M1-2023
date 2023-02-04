const { chequearDisponibilidad } = require("../checkpoint/03");

describe("Ejercicio 03 - 🔍 chequearDisponibilidad 🔍", () => {
  test("Debe retornar: No se encontraron las prendas solicitadas. en el caso de que no haya disponibilidad", () => {
    const ropa = ["Camiseta Verde", "Pantalón Rojo", "Gorra Azul"];
    const stock = [
      "Pantalón Amarillo",
      "Camiseta Negra",
      "Gorra Naranja",
      "Camiseta Lila",
    ];
    const chequear = chequearDisponibilidad(ropa);
    expect(chequear(stock)).toBe("No se encontraron las prendas solicitadas");

    const ropa2 = ["Camiseta Verde", "Pantalón Rojo", "Gorra Azul"];
    const stock2 = [];
    const chequear2 = chequearDisponibilidad(ropa2);
    expect(chequear2(stock2)).toBe("No se encontraron las prendas solicitadas");
  });

  test("Debe retornar: X de las X prendas solicitadas se encuentran en el stock", function () {
    const ropa = ["Camiseta Verde", "Pantalón Rojo", "Gorra Azul"];
    const stock = [
      "Pantalón Amarillo",
      "Camiseta Negra",
      "Gorra Naranja",
      "Camiseta Verde",
    ];
    const chequear = chequearDisponibilidad(ropa);
    expect(chequear(stock)).toBe(
      "1 de las 3 prendas solicitadas se encuentran en el stock"
    );

    const ropa2 = ["Camiseta Verde", "Pantalón Rojo", "Gorra Azul"];
    const stock2 = ["Pantalón Rojo", "Camiseta Negra", "Camiseta Verde"];
    const chequear2 = chequearDisponibilidad(ropa2);
    expect(chequear2(stock2)).toBe(
      "2 de las 3 prendas solicitadas se encuentran en el stock"
    );
  });

  test("Debe retornar: Todas las prendas fueron encontradas", function () {
    const ropa = ["Camiseta Verde", "Pantalón Rojo", "Gorra Azul"];
    const stock = [
      "Camiseta Verde",
      "Pantalón Rojo",
      "Gorra Azul",
      "Camiseta Lila",
    ];
    const chequear = chequearDisponibilidad(ropa);
    expect(chequear(stock)).toBe("Todas las prendas fueron encontradas");

    const ropa2 = ["Camiseta Verde", "Pantalón Rojo"];
    const stock2 = ["Camiseta Verde", "Pantalón Rojo"];
    const chequear2 = chequearDisponibilidad(ropa2);
    expect(chequear2(stock2)).toBe("Todas las prendas fueron encontradas");
  });
});

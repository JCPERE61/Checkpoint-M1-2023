const ejercicio = require("../checkpoint/05");

describe("Ejercicio 05 - 💲 liquidacion() 💲", () => {
  test("Deberia retornar un arreglo con los objetos que tengan la propiedad LIQUIDACION", () => {
    let ropa = [
      { camiseta: { LIQUIDACION: true } },
      { gorro: { DESCUENTO: true } },
      { abrigo: {} },
      { pantalones: { LIQUIDACION: true } },
    ];
    expect(ejercicio.liquidacion(ropa)).toEqual([
      { pantalones: { LIQUIDACION: true } },
      { camiseta: { LIQUIDACION: true } },
    ]);

    let ropa2 = [
      { camiseta: { LIQUIDACION: true } },
      { medias: { LIQUIDACION: true } },
      { abrigo: { LIQUIDACION: true } },
      { pantalones: { LIQUIDACION: true } },
    ];

    expect(ejercicio.liquidacion(ropa2)).toEqual([
      { pantalones: { LIQUIDACION: true } },
      { abrigo: { LIQUIDACION: true } },
      { medias: { LIQUIDACION: true } },
      { camiseta: { LIQUIDACION: true } },
    ]);
  });
});

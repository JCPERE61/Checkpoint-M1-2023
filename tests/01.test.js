const { guardarCamisetas } = require("../checkpoint/01");
const Queue = require("../DS").Queue;
// Se puede testear que la queue sea invocada utilizando un jest.spyOn sobre DS

describe("Ejercicio 01 - 👕 guardarCamisetas() 👕", () => {
  test("guardarCamisetas() deberia retornar un objeto con los elementos de la queue", () => {
    const newQueue = new Queue();
    newQueue.enqueue("Camiseta Blanca")
    newQueue.enqueue("Camiseta Negra")
    newQueue.enqueue("Camiseta Amarilla")
    newQueue.enqueue("Camiseta Roja")
    expect(newQueue).toBeInstanceOf(Queue);
    expect(guardarCamisetas(newQueue)).toEqual({
      'Camiseta Blanca': 'Camiseta Blanca',
      'Camiseta Negra': 'Camiseta Negra',
      'Camiseta Amarilla': 'Camiseta Amarilla',
      'Camiseta Roja': 'Camiseta Roja'
    });
    const newQueue2 = new Queue();
    newQueue2.enqueue("Camiseta Violeta")
    newQueue2.enqueue("Camiseta Dorada")
    newQueue2.enqueue("Camiseta Gris")
    newQueue2.enqueue("Camiseta Verde")
    newQueue2.enqueue("Camiseta Celeste")
    expect(newQueue2).toBeInstanceOf(Queue);
    expect(guardarCamisetas(newQueue2)).toEqual({
      'Camiseta Violeta': 'Camiseta Violeta',
      'Camiseta Dorada': 'Camiseta Dorada',
      'Camiseta Gris': 'Camiseta Gris',
      'Camiseta Verde': 'Camiseta Verde',
      'Camiseta Celeste': 'Camiseta Celeste'
    });
    const newQueue3 = new Queue();
    newQueue3.enqueue("Camiseta Naranja")
    newQueue3.enqueue("Camiseta Verde")
    newQueue3.enqueue("Camiseta Gris")
    newQueue3.enqueue("Camiseta Azul")
    newQueue3.enqueue("Camiseta Celeste")
    expect(guardarCamisetas(newQueue3)).toEqual({
      'Camiseta Naranja': 'Camiseta Naranja',
      'Camiseta Verde': 'Camiseta Verde',
      'Camiseta Gris': 'Camiseta Gris',
      'Camiseta Azul': 'Camiseta Azul',
      'Camiseta Celeste': 'Camiseta Celeste'
    });
  });
});

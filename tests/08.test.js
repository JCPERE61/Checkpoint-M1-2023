const { LinkedList } = require("../checkpoint/08");

describe("Ejercicio 08 - 📄 tacharLista() 📄", () => {
  

  test("Retornar una NUEVA LinkedList en base a los elementos del arreglo recibido por parámetros.", () => {
    const lista = new LinkedList();
    lista.add("Zapatos")
    lista.add("Camisa")
    lista.add("Calcetines")
    lista.add("Gafas")
    lista.add("Sweater")
    const slicedList = lista.tacharLista(["Zapatos", "Camisa"]);
    expect(slicedList).toBeInstanceOf(LinkedList);
    expect(slicedList.head.value).toEqual("Calcetines");
    expect(slicedList.head.next.value).toEqual("Gafas");
    expect(slicedList.head.next.next.value).toEqual("Sweater");
    
    
  });
  test("Retornar una NUEVA LinkedList en base a los elementos del arreglo recibido por parámetros.", () => {
    const lista = new LinkedList();
    lista.add("Medias")
    lista.add("Shorts")
    lista.add("Ojotas")
    lista.add("Zapatillas")
    lista.add("Camperas")
    const slicedList = lista.tacharLista(["Shorts", "Zapatillas"]);
    expect(slicedList).toBeInstanceOf(LinkedList);
    expect(slicedList.head.value).toEqual("Medias");
    expect(slicedList.head.next.value).toEqual("Ojotas");
    expect(slicedList.head.next.next.value).toEqual("Camperas");
  });
 
});
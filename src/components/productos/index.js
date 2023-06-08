import view from "./index.hbs"
import Producto from "../producto/index"
const productos = [
  { nombre: "Producto 1", precio: 10 },
  { nombre: "Producto 2", precio: 20 },
  { nombre: "Producto 3", precio: 15 },
  { nombre: "Producto 4", precio: 8 },
  { nombre: "Producto 5", precio: 25 },
  { nombre: "Producto 6", precio: 12 },
  { nombre: "Producto 7", precio: 30 },
  { nombre: "Producto 8", precio: 18 }
];
export default () => {
  const divElement = document.createElement("div")
  divElement.innerHTML = view
  const contenedorProductos= divElement.querySelector('#contenedorProductos');

  productos.forEach(({nombre,precio}) => {
    contenedorProductos.append(Producto(nombre,precio))
  });

  return divElement
}

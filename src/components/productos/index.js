import template from "./index.hbs"
import Producto from "../producto/index"
import './index.scss'

const productos = [
  { id:1,nombre: "Producto 1", precio: 10 },
  { id:2,nombre: "Producto 2", precio: 20 },
  { id:3,nombre: "Producto 3", precio: 15 },
  { id:4,nombre: "Producto 4", precio: 8 },
  { id:5,nombre: "Producto 5", precio: 25 },
  { id:6,nombre: "Producto 6", precio: 12 },
  { id:7,nombre: "Producto 7", precio: 30 },
  { id:8,nombre: "Producto 8", precio: 18 }
];
export default () => {
  const divElement = document.createElement("div")
  divElement.innerHTML = template()
  const contenedorProductos= divElement.querySelector('#contenedorProductos');

  productos.forEach((datos) => {
    contenedorProductos.append(Producto(datos))
  });

  return divElement
}

import template from "./index.hbs"
export default (datos) => {
  const divElement = document.createElement("div")
  divElement.innerHTML = template(datos)
  return divElement
}

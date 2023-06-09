import template from "./index.hbs"
import './index.scss'

export default (datos) => {
  const divElement = document.createElement("div")
  divElement.innerHTML = template(datos)
  return divElement
}

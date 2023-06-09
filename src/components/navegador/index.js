import template from "./index.hbs"
import './index.scss'

export default () => {
  const divElement = document.createElement("nav")
  divElement.className ="navegador"
  divElement.innerHTML = template()
  return divElement
}

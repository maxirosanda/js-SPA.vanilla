import template from "./index.hbs"
import './index.scss'

export default () => {
  const divElement = document.createElement("div")
  divElement.innerHTML = template()
  return divElement
}

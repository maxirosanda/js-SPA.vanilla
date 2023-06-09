import template from "./index.hbs"
import './index.scss'

export default () => {
  const divElement = document.createElement("footer")
  divElement.className = "pie"
  divElement.innerHTML = template()
  return divElement
}

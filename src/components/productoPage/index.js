import template from "./index.hbs"
import './index.scss'

export default (id) => {

  const divElement = document.createElement("div")
  divElement.innerHTML = template({id})
  return divElement
}

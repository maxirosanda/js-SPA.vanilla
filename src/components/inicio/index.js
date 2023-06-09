import template from "./index.hbs"
import './index.scss'

export default () => {
  const divElement = document.createElement("div")
  const data = {
    buttonId: 'btnClick',
    buttonText: 'click me'
  }
  divElement.innerHTML = template(data)
  const btnClick = divElement.querySelector("#btnClick")
  btnClick.addEventListener("click", () => {
    alert("clicked")
  })

  return divElement
}
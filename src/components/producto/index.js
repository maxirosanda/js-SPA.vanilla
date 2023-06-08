import view from "./index.hbs"
export default (nombre,precio) => {
  const divElement = document.createElement("div")
  divElement.innerHTML = `
                          <p>${nombre}</p>
                          `
  return divElement
}

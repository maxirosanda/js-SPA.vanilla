import Inicio from "./components/inicio/index"
import Productos from "./components/productos/index"

export const router = async (route) => {
  const content = document.getElementById("root")
  content.innerHTML = ""
  
  switch (route) {
    case "#/": {
        return content.appendChild(Inicio())
    }
    case "#/productos": {
        return content.appendChild(Productos())
    }
    default: {
      return console.log("404")
  }
}

}

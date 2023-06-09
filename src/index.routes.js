import Inicio from "./components/inicio/index"
import Productos from "./components/productos/index"
import Navegador from "./components/navegador/index"
import Footer from "./components/footer/index"
import NotFound from "./components/notFound/index"

export const router = async (route) => {
  const content = document.getElementById("root")
  content.innerHTML = ""
  content.append(Navegador())
  switch (route) {
    case "#/": {
         content.append(Inicio())
         break
    }
    case "#/productos": {
        content.append(Productos())
        break
    }
    default: {
      content.append(NotFound())
      break
  }
}
content.append(Footer())

}

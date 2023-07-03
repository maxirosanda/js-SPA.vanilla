import Inicio from "./pages/inicio/index"
import Productos from "./pages/productos/index"
import ProductoPage from "./pages/productoPage"
import Navegador from "./components/navegador/index"
import Footer from "./components/footer/index"
import NotFound from "./pages/notFound/index"
import { state } from "../hooks/state"

const [firt,setFirt] = state(true)
const root = document.getElementById("root")
const content = document.createElement("div")
root.append(content)
content.id = "content"

export const router = (route) => {

  const [,page,...param] = route.split("/")
  content.innerHTML = ""
  console.log(firt)
  if (firt()) root.prepend(Navegador())

  switch (page) {
    case "": {
         content.append(Inicio())
         break
    }
    case "productos": {
        content.append(Productos())
        break
    }
    case "producto":{
      content.append(ProductoPage(param[0]))
      break
    }
    default: {
      content.append(NotFound())
      break
  }
}
  if(firt()) root.append(Footer())
  setFirt(false)
}  

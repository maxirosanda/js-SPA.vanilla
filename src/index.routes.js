import Inicio from "./components/inicio/index"
import Productos from "./components/productos/index"
import ProductoPage from "./components/productoPage"
import Navegador from "./components/navegador/index"
import Footer from "./components/footer/index"
import NotFound from "./components/notFound/index"

export const router = (route) => {
  
  const [,page,...param] = route.split("/")
  const content = document.getElementById("root")
  content.innerHTML = ""
  content.append(Navegador())
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
content.append(Footer())

}

import Inicio from "./pages/inicio/index"
import Productos from "./pages/productos/index"
import ProductoPage from "./pages/productoPage"
import Navegador from "./components/navegador/index"
import Footer from "./components/footer/index"
import NotFound from "./pages/notFound/index"

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

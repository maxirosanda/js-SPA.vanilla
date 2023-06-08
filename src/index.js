import './index.scss'
import  {router}  from "./index.routes";


const init = () => {
  router(window.location.hash);

  window.addEventListener("hashchange", () => {
    router(window.location.hash);
  });
};

window.addEventListener("load", init);
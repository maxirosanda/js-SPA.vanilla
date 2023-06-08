import view from "./view.hbs"
import Handlebars from 'handlebars/dist/handlebars';
console.log(view)
export default () => {
  const divElement = document.createElement("div");
  const template = Handlebars.compile(view);
  const data = {
    buttonId: 'btnClick',
    buttonText: 'click me'
  };
  const renderedTemplate = template(data);
  divElement.innerHTML = renderedTemplate;
  const btnClick = divElement.querySelector("#btnClick");
  btnClick.addEventListener("click", () => {
    alert("clicked");
  });

  return divElement;
};
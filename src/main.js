import Handlebars from "handlebars";
import buttonTemplate from "./partials/button.js";

document.addEventListener("DOMContentLoaded", () => {
  const main = document.querySelector("#app");
  const template = Handlebars.compile(buttonTemplate);
  main.innerHTML = template({ name: "Isa" });
});

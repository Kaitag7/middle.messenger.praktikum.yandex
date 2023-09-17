import Handlebars from "handlebars";
import Block from "./core/Block";
// import * as Components from "./components/button";
import LoginPage from "./pages/login";
import MenuNav from "./pages/menu-nav";
import { registerComponent } from "./core/registerComponent";
import { Button, InputField, Input, FormAuth, Link, FormRegister } from "./components";
import "./styles.scss";
import { RegisterPage } from "./pages/register";

Handlebars.registerPartial("FormAuth", FormAuth);
Handlebars.registerPartial("FormRegister", FormRegister);
registerComponent("Button", Button);
registerComponent("InputField", InputField);
registerComponent("Input", Input);
registerComponent("Link", Link);

document.addEventListener("DOMContentLoaded", () => {
  const index = document.querySelector("#app");
  const queryParams = new URLSearchParams(window.location.search);
  const urlPage = queryParams.get("page");

  const loadPage = () => {
    switch (urlPage) {
      case "register":
        return new RegisterPage();

      case "login":
        return new LoginPage();

      // case "profile":
      //   return profileUser();

      // case "chat":
      //   return chat();

      // case "error404":
      //   return error404();

      // case "error500":
      //   return error500();

      default:
        return new MenuNav();
    }
  };

  const page: Block = loadPage();

  index?.append(page.getContent() as HTMLElement);
});

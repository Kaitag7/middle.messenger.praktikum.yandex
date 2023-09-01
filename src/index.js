import { loginUser } from "./partials/login/index.js";
import { registerUser } from "./partials/register/index.js";
import { profileUser } from "./partials/profile/index.js";
import { error404, error500 } from "./partials/errors/index.js";
import { routes } from "./routes.tmpl.js";
import { chat } from "./partials/chat/index.js";
import "./styles.scss";

document.addEventListener("DOMContentLoaded", () => {
  const index = document.querySelector("#app");
  const queryParams = new URLSearchParams(window.location.search);
  const page = queryParams.get("page");

  const loadPage = (pagename) => {
    switch (pagename) {
      case "register":
        return registerUser();

      case "login":
        return loginUser();

      case "profile":
        return profileUser();

      case "chat":
        return chat();

      case "error404":
        return error404();

      case "error500":
        return error500();

      default:
        return routes();
    }
  };

  index.innerHTML = loadPage(page);
});

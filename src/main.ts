import Handlebars from "handlebars";
import { Error404, Error500 } from "./pages/errors";
import { registerComponent } from "./core/registerComponent";
import {
  Button,
  InputField,
  Input,
  Link,
  ReturnButton,
  ProfileMain,
  ProfileInfo,
  ProfileEdit,
  ProfileButton,
  ChatHeader,
  ChatMessage,
  ChatListItem,
  SearchChatInputField,
  AttachInput,
  SendButton,
  ErrorLine,
  ChatMessages,
  Dialog,
  DialogAddUser,
  DialogCreateChat,
  DialogDeleteUser,
  ProfilePasswordEdit,
} from "./components";
import "./styles.scss";
import { FormAuth, FormProfile, FormRegister } from "./partials";
import { Router } from "./core/Router";
import Block from "./core/Block";
import { Store } from "./core/Store";
import { AppState } from "./types.global";
import { initApp } from "./services/initApp";
import LoginPage from "./pages/login";
import { RegisterPage } from "./pages/register";
import ChatPage from "./pages/chat";
import ProfilePage from "./pages/profile";

declare global {
  interface Window {
    store: Store<AppState>;
    router: Router;
  }

  type Nullable<T> = T | null;
}

const initState: AppState = {
  error: null,
  user: null,
  isOpenDialogChat: false,
  chats: [],
  activeChat: null,
  activeChatId: null,
  messages: [],
  isOpenDialogAddUser: false,
  isOpenDialogDeleteUser: false,
};

window.store = new Store<AppState>(initState);

Handlebars.registerPartial("FormAuth", FormAuth);
Handlebars.registerPartial("FormRegister", FormRegister);
Handlebars.registerPartial("FormProfile", FormProfile);

type registerComponents = {
  [key: string]: typeof Block<Record<string, any>>;
};

const componentsToRegister: registerComponents = {
  Button,
  InputField,
  Input,
  Link,
  ReturnButton,
  ProfileMain,
  ProfileInfo,
  ProfileEdit,
  ProfileButton,
  ChatHeader,
  ChatMessage,
  ChatListItem,
  SearchChatInputField,
  AttachInput,
  SendButton,
  ErrorLine,
  ChatMessages,
  Dialog,
  DialogAddUser,
  DialogCreateChat,
  DialogDeleteUser,
  ProfilePasswordEdit,
};

Object.keys(componentsToRegister).forEach((componentName) => {
  registerComponent(componentName, componentsToRegister[componentName]);
});

const router = new Router("#app");
window.router = router;

router
  .use("/", LoginPage)
  .use("/sign-up", RegisterPage)
  .use("/messenger", ChatPage)
  .use("/settings", ProfilePage)
  .use("/error404", Error404)
  .use("/error500", Error500);

router.start();

document.addEventListener("click", (e) => {
  const target = e.target as HTMLElement;
  const page = target.getAttribute("page");
  if (page) {
    router.go(page);
    e.preventDefault();
    e.stopImmediatePropagation();
  }
});

document.addEventListener("DOMContentLoaded", () => initApp());

// document.addEventListener('DOMContentLoaded', () => {
//   const index = document.querySelector('#app');
//   const queryParams = new URLSearchParams(window.location.search);
//   const urlPage = queryParams.get('page');

//   const loadPage = () => {
//     switch (urlPage) {
//       case 'register':
//         return new RegisterPage();

//       case 'login':
//         return new LoginPage();

//       case 'profile':
//         return new ProfilePage({ editProfile: (e: Event) => console.log(e) });

//       case 'chat':
//         return new ChatPage();

//       case 'error404':
//         return new Error404();

//       case 'error500':
//         return new Error500();

//       default:
//         return new MenuNav();
//     }
//   };

//   const page: Block = loadPage();

//   index?.append(page.getContent() as HTMLElement);
// });

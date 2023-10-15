import AuthService from "./authService";
import { getChats } from "./chat";

const authService = new AuthService();

const initApp = async () => {
  let me = null;
  try {
    me = await authService.getUser();
  } catch (error) {
    window.router.go(window.location.pathname === "/sign-up" ? "/sign-up" : "/");
    return;
  }

  const chats = await getChats();
  window.store.set({ user: me, chats });
  const isLoginOrRegister = window.location.pathname === "/sign-up" || window.location.pathname === "/";
  if (isLoginOrRegister) {
    window.router.go("/messenger");
  }
};

const initChatPage = async () => {
  const chats = await getChats();
  window.store.set({ chats });
};

const initProfilePage = async () => {
  const user = await authService.getUser();
  window.store.set({ user });
};

export { initApp, initChatPage, initProfilePage };

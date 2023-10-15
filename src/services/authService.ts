import AuthApi from "../api/authApi";
import { CreateUser, LoginRequestData } from "../api/types.api";
import { apiHasError } from "../utils/apiHasError";
import { transformUser } from "../utils/apiTransformers";

const authApi = new AuthApi();

export default class AuthService {
  async getUser() {
    const responseUser = await authApi.getUser();
    if (apiHasError(responseUser)) {
      throw Error(responseUser.response.reason);
    }

    return transformUser(JSON.parse(responseUser.response));
  }

  async signin(data: LoginRequestData) {
    const response = await authApi.signin(data);
    if (apiHasError(response)) {
      throw Error(response.response.reason);
    }

    const me = await this.getUser();

    window.store.set({ user: me });
    window.router.go("/messenger");
  }

  async signup(data: CreateUser) {
    const response = await authApi.signup(data);
    if (response.status !== 200) {
      throw Error(response.response.reason);
    }

    const me = await this.getUser();
    window.store.set({ user: me });
    window.router.go("/messenger");
  }

  async logout() {
    await authApi.logout();
    window.store.set({ user: null, chats: [] });
    window.router.go("/");
  }
}

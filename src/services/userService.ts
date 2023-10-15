import { Avatar, PasswordDTO, ProfileDTO } from "../api/types.api";
import UserAPI from "../api/userApi";
import { apiHasError } from "../utils/apiHasError";
import AuthService from "./authService";

const userApi = new UserAPI();
const authService = new AuthService();

export default class UserService {
  async changeUserProfile(data: ProfileDTO) {
    const response = await userApi.changeUserProfile(data);
    if (apiHasError(response)) {
      throw Error(response.response.reason);
    }

    const me = await authService.getUser();
    window.store.set({ user: me });
  }

  async changeUserPassword(data: PasswordDTO) {
    const response = await userApi.changeUserPassword(data);
    if (apiHasError(response)) {
      throw Error(response.response.reason);
    }

    const me = await authService.getUser();
    window.store.set({ user: me });
  }

  async changeUserAvatar(data: Avatar) {
    const response = await userApi.changeUserAvatar(data);
    if (apiHasError(response)) {
      throw Error(response.response.reason);
    }

    const me = await authService.getUser();
    window.store.set({ user: me });
  }
}

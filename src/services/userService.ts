import { apiHasError } from "../utils/apiHasError";
import { getUser } from "./authService.ts";
import UserAPI from "../api/userApi.ts";
import { Avatar, PasswordDTO, ProfileDTO } from "../api/types.api.ts";

const userApi = new UserAPI();

const profile = async (data: ProfileDTO) => {
  const response = await userApi.profile(data);
  if (apiHasError(response)) {
    throw Error(response.response.reason);
  }

  const me = await getUser();
  window.store.set({ user: me });
};

const avatar = async (data: Avatar) => {
  const response = await userApi.avatar(data);
  if (apiHasError(response)) {
    throw Error(response.response.reason);
  }

  const me = await getUser();
  window.store.set({ user: me });
};

const password = async (data: PasswordDTO) => {
  const response = await userApi.password(data);
  if (apiHasError(response)) {
    throw Error(response.response.reason);
  }

  const me = await getUser();
  window.store.set({ user: me });
};

export { profile, avatar, password };

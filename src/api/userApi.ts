import { HTTPTransport } from "../core/HTTPTransport";
import { Avatar, PasswordDTO, ProfileDTO } from "./types.api";

const userApi = new HTTPTransport("/user");

export default class UserApi {
  async profile(data: ProfileDTO): Promise<XMLHttpRequest> {
    return userApi.put("/profile", { data });
  }

  async avatar(data: Avatar): Promise<XMLHttpRequest> {
    return userApi.put("/profile/avatar", { data, isFile: true });
  }

  async password(data: PasswordDTO): Promise<XMLHttpRequest> {
    return userApi.put("/password", { data });
  }
}

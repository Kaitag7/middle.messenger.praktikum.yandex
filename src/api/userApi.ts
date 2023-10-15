import { HTTPTransport } from "../core/HTTPTransport";
import { Avatar, PasswordDTO, ProfileDTO } from "./types.api";

export type FindUserData = {
  // дальше обдумать
  login: string;
};

const userApi = new HTTPTransport("/user");

export default class UserAPI {
  async getUserProfile(userId: number): Promise<XMLHttpRequest> {
    // дальше обдумать
    return userApi.get(`/${userId}`);
  }

  async findUserByLogin(data: FindUserData): Promise<XMLHttpRequest> {
    // дальше обдумать
    return userApi.post("/search", { data });
  }

  async changeUserProfile(data: ProfileDTO): Promise<XMLHttpRequest> {
    return userApi.put("/profile", { data });
  }

  async changeUserPassword(data: PasswordDTO): Promise<XMLHttpRequest> {
    return userApi.put("/password", { data });
  }

  async changeUserAvatar(data: Avatar): Promise<XMLHttpRequest> {
    return userApi.put("/profile/avatar", { data, isFile: true });
  }
}

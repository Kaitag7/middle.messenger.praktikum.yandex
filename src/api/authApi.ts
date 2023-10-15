import { HTTPTransport } from "../core/HTTPTransport";
import { CreateUser, LoginRequestData } from "./types.api";

const authApi = new HTTPTransport("/auth");

export default class AuthApi {
  async getUser(): Promise<XMLHttpRequest> {
    return authApi.get("/user");
  }

  async signin(data: LoginRequestData): Promise<XMLHttpRequest> {
    return authApi.post("/signin", { data });
  }

  async signup(data: CreateUser): Promise<XMLHttpRequest> {
    return authApi.post("/signup", { data });
  }

  async logout(): Promise<XMLHttpRequest> {
    return authApi.post("/logout");
  }
}

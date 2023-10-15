import { HTTPTransport } from "../core/HTTPTransport";
import { APIError, ChatDTO, CreateChat, DeleteChat, UsersData } from "./types.api";

const chatApi = new HTTPTransport("/chats");

export default class ChatApi {
  public async create(data: CreateChat): Promise<void | APIError> {
    return chatApi.post("/", { data });
  }

  public async getChats(): Promise<ChatDTO[] | APIError> {
    return chatApi.get("/");
  }

  public async deleteChatById(data: DeleteChat) {
    return chatApi.delete("/", data);
  }

  public async addUsers(data: UsersData) {
    return chatApi.put("/users", data);
  }

  public async deleteUsers(data: UsersData) {
    return chatApi.delete("/users", data);
  }

  public async getRequestToken(id: number) {
    return chatApi.post(`/token/${id}`);
  }

  public async getNewMessagesCount(id: number) {
    return chatApi.post(`/new/${id}`);
  }

  public async getChatUsers(id: number) {
    return chatApi.get(`/${id}/users`);
  }

  public async changeChatAvatar(data: FormData) {
    return chatApi.put("/avatar", data);
  }
}

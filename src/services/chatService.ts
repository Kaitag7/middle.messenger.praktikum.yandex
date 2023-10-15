import ChatApi from "../api/chatApi";
import { webSocketService } from "../core/WebSocket";
import { transformChats } from "../utils/apiTransformers";

const chatApi = new ChatApi();

export default class ChatService {
  async getChats() {
    const responseChat = await chatApi.getChats();
    if (responseChat.status !== 200) {
      throw Error(responseChat.response.reason);
    }

    return transformChats(JSON.parse(responseChat.response));
  }

  async createChat(title: string) {
    const response = await chatApi.create({ title });
    if (response.status !== 200) {
      throw Error(response.response.reason);
    }

    const responseChat = await chatApi.getChats();
    if (responseChat.status !== 200) {
      throw Error(responseChat.response.reason);
    }

    const chats = await this.getChats();
    window.store.set({ chats });
  }

  async connectToChat(chatId: number) {
    const token = await chatApi.getToken(chatId);
    const userId = window.store.getState().user?.id;
    const wsUrl = `wss://ya-praktikum.tech/ws/chats/${userId}/${chatId}/${
      JSON.parse(token.response).token
    }`;

    webSocketService.connect(wsUrl);
  }

  async addUser(userId: number) {
    const chatId = window.store.getState().activeChatId;
    if (!chatId) {
      return;
    }

    const response = await chatApi.addUser(userId, +chatId);
    if (response.status !== 200) {
      throw Error(response.response.reason);
    }
  }

  async deleteUser(userId: number) {
    const chatId = window.store.getState().activeChatId;
    if (!chatId || !userId) {
      return;
    }

    const response = await chatApi.deleteUser(+userId, +chatId);
    if (response.status !== 200) {
      throw Error(response.response.reason);
    }

    const chats = await this.getChats();
    window.store.set({ chats, activeChatId: null, activeChat: null });
  }
}

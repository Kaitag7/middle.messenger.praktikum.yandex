import { Message } from "./api/types.api";

type LastMessage = {
  user: User;
  time: string;
  content: string;
};

export type Chat = {
  id: number;
  title: string;
  avatar: Nullable<string>;
  active: boolean;
  unreadCount: number;
  lastMessage: LastMessage | null;
};

export type User = {
  id: number;
  login: string;
  firstName: string;
  secondName: string;
  displayName: string;
  avatar: string;
  phone: string;
  email: string;
};

export type AppState = {
  error: string | null;
  user: User | null;
  isOpenDialogChat: boolean;
  isOpenDialogAddUser: boolean;
  isOpenDialogDeleteUser: boolean;
  chats: Chat[];
  activeChatId: number | null;
  activeChat: Chat | null;
  messages: Message[] | null;
};

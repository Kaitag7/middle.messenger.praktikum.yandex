import Block from "../../core/Block";
import ChatService from "../../services/chatService";
import { Chat } from "../../types.global";

interface Props {
  classes: string;
  active: boolean;
  value: Chat;
  events: {
    click: () => void;
  };
  onClick: () => void;
}

export class ChatListItem extends Block<Props> {
  chatService = new ChatService();

  constructor(props: Props) {
    super(props);
    this.props.events = {
      click: async () => {
        const { chats } = window.store.getState();
        const updatedChats = chats.map((chat) => {
          chat.active = chat.id === this.props.value.id;
          return chat;
        });

        window.store.set({
          chats: [...updatedChats],
          activeChatId: this.props.value.id,
          activeChat: this.props.value,
        });

        await this.chatService.connectToChat(this.props.value.id);
      },
    };
  }

  get preparedDate() {
    if (this.props.value?.lastMessage?.time) {
      const dateStr = this.props.value.lastMessage.time;
      const date = new Date(dateStr);

      const hours = date.getUTCHours().toString().padStart(2, "0");
      const minutes = date.getUTCMinutes().toString().padStart(2, "0");

      return `${hours}:${minutes}`;
    }

    return "";
  }

  protected render(): string {
    const { classes, value } = this.props;

    return `
            <div class="chat-list-item  ${value.active ? "chat-list-item_active" : ""} ${classes}">
               <div>
                  <img class="chat-list-item__img" src="${value.avatar}" alt="image">
               </div>

               <div>
                 <div class="chat-list-item__name">${value.title}</div>
                 <div class="chat-list-item__preview">${
  value.lastMessage ? value.lastMessage.content : "Начните диалог"
}</div>
               </div>

               <div class="time-and-counter">
                 <div class="chat-list-item__time">${this.preparedDate}</div>
                 {{#if value.unreadCount}}
                 <div class="chat-list-item__counter">
                  <span class="time-and-counter__count">${value.unreadCount}</span>
                 </div>
                 {{/if}}
               </div>
            </div>
        `;
  }
}

// <div>
//                   <img class="chat-list-item__img" src="https://home.adelphi.edu/~ni21572/Monica.jpg" alt="image">
//                </div>
//                <div>
//                  <div class="chat-list-item__name">
//                   Monica
//                  </div>
//                  <div class="chat-list-item__preview">
//                   I cooked a dinner! I'm waiting you!
//                  </div>
//                </div>
//                <div class="time-and-counter">
//                  <div class="chat-list-item__time">
//                   12:04
//                  </div>
//                  <div class="chat-list-item__counter">
//                   <span class="time-and-counter__count">3</span>
//                  </div>
//                </div>

//                <div>
//                   <img class="chat-list-item__img"
//                   src="https://upload.wikimedia.org/wikipedia/en/6/66/Matthew_Perry_as_Chandler_Bing.png" alt="image">
//                </div>
//                <div>
//                  <div class="chat-list-item__name">
//                   Chandler
//                  </div>
//                  <div class="chat-list-item__preview">
//                   You are my best friend! 🖤
//                  </div>
//                </div>
//                <div class="time-and-counter">
//                  <div class="chat-list-item__time">
//                   12:04
//                  </div>
//                  <div class="chat-list-item__counter">
//                   <span class="time-and-counter__count">1</span>
//                  </div>
//                </div>

//                <div>
//                   <img class="chat-list-item__img"
//                   src="https://upload.wikimedia.org/wikipedia/en/6/6f/David_Schwimmer_as_Ross_Geller.jpg" alt="image">
//                </div>
//                <div>
//                  <div class="chat-list-item__name">
//                   Ross
//                  </div>
//                  <div class="chat-list-item__preview">
//                   Where are you? I sent you email
//                  </div>
//                </div>
//                <div class="time-and-counter">
//                  <div class="chat-list-item__time">
//                   10:54
//                  </div>
//                  <div class="chat-list-item__counter">
//                   <span class="time-and-counter__count">2</span>
//                  </div>
//                </div>

import Block from "../../core/Block";
import ChatService from "../../services/chatService";
import { Chat } from "../../types.global";

interface Props {
  classes: string;
  value: Chat;
  openAddUserDialog: () => void;
  openDeleteUserDialog: () => void;
  closeAddUserDialog: () => void;
  closeDeleteUserDialog: () => void;
  onAddUser: () => void;
  onLeave: () => void;
}

export class ChatHeader extends Block<Props> {
  chatService = new ChatService();

  constructor(props: Props) {
    super({
      ...props,
      openAddUserDialog: () => window.store.set({ isOpenDialogAddUser: true }),
      closeAddUserDialog: () => window.store.set({ isOpenDialogAddUser: false }),
      openDeleteUserDialog: () => window.store.set({ isOpenDialogDeleteUser: true }),
      closeDeleteUserDialog: () => window.store.set({ isOpenDialogDeleteUser: false }),
      onAddUser: () => {
        const userId: number = +(this.refs.addUser as any).getChatTitle();
        if (!userId) {
          window.store.set({ isOpenDialogAddUser: false });
          return;
        }

        this.chatService.addUser(userId).catch((error) => console.error(error));

        window.store.set({ isOpenDialogChat: false });
      },
      onDeleteUser: () => {
        const userId: number = +(this.refs.deleteUser as any).getUserId();
        if (!userId) {
          window.store.set({ isOpenDialogDeleteUser: false });
          return;
        }

        this.chatService.deleteUser(userId).catch((error) => console.error(error));

        window.store.set({ isOpenDialogDeleteUser: false });
      },
      onLeave: () => {
        const userId = window.store.getState().user?.id;
        if (userId) {
          this.chatService.deleteUser(userId).catch((error) => console.error(error));
        }
      },
    });
  }

  protected render(): string {
    const { classes, value } = this.props;
    return `
            <div class="chat-header ${classes || ""}">
              <div class="short-info">
                <img class="short-info__img" src="${value.avatar}" alt="UserPhoto">
                <div class="short-info__name">${value.title}</div>
              </div>

              <div class="chat-header__actions">
                {{{ Button type="primary" label="Добавить пользователя" onClick=openAddUserDialog}}}
                {{{ Button type="primary" label="Убрать пользователя" onClick=openDeleteUserDialog}}}
                {{{ Button type="primary" label="Выйти из чата" onClick=onLeave}}}
              </div>

              {{{ DialogAddUser onSave=onAddUser onClose=closeAddUserDialog ref="addUser"}}}
              {{{ DialogDeleteUser onSave=onDeleteUser onClose=closeDeleteUserDialog ref="deleteUser"}}}
             </div>
        `;
  }
}

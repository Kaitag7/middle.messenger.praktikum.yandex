import Block from "../../core/Block";

interface Props {
  classes: string;
  message: string;
  currentUserId: number;
  messageUserId: number;
}

export class ChatMessage extends Block<Props> {
  protected render(): string {
    const {
      classes, message, currentUserId, messageUserId,
    } = this.props;
    return `
            <div class="message-container ${
  currentUserId === messageUserId ? "message-container_to" : ""
} ${classes || ""}">
              <div class="message-container__message">
                <div class="message__text">
                  ${message}
                </div>
              </div>
            </div>
        `;
  }
}

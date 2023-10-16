import Block from "../../core/Block";
import { connect } from "../../utils/connect.ts";

interface Props {
  messages: string;
  userId: number;
}

export class ChatMessages extends Block<Props> {
  protected render(): string {
    return `
            <div class="chat__body">
              {{#messages}}
                {{{ ChatMessage message=this.content messageUserId=this.user_id currentUserId=${this.props?.userId} }}}
              {{/messages}}
            </div>
        `;
  }
}

export default connect(({ messages }) => ({
  messages,
}))(ChatMessages);

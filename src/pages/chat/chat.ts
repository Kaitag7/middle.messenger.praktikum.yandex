import Block from "../../core/Block";

export class ChatPage extends Block {
  protected render(): string {
    return `
            <div class="chat">
              <aside class="chat-list">
                <div class="chat-list__header">
                  {{{ ProfileButton }}}
                  {{{ SearchChatInputField }}}
                </div>

                <div class="chat-list__content">
                  {{{ ChatListItem classes="chat-list__item" }}}
                </div>
              </aside>

              <section class="chat__container">
                 {{{ ChatHeader }}}

                 <div class="chat__body">
                    {{{ ChatMessage isMessageTo=true message="I'm fine, what are you doing?" }}}
                    {{{ ChatMessage isMessageTo=false message="Hello Joey! How are you?" }}}
                 </div>

                 <div class="chat__footer">
                    {{{ AttachInput }}}
                    {{{ Input name="message" classes="chat__input" placeholder="Сообщение" }}}
                    {{{ SendButton }}}
                 </div>
              </section>
            </div>
        `;
  }
}

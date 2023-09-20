import Block from '../../core/Block';

interface IProps {
  classes: string;
  active: boolean;
}

export class ChatListItem extends Block<IProps> {
  protected render(): string {
    const { classes, active } = this.props;

    return `
            <div class="chat-list-item  ${active ? 'chat-list-item_active' : ''} ${classes}">
               <div>
                  <img class="chat-list-item__img" 
                  src="https://d2lxnqjjgohlq9.cloudfront.net/S/Assets/Files/Users/134528/ot21cvkg.jpg" alt="image">
               </div>
               <div>
                 <div class="chat-list-item__name">
                  Rachel
                 </div>
                 <div class="chat-list-item__preview">
                  Hello Joey! How are you?
                 </div>
               </div>
               <div class="time-and-counter">
                 <div class="chat-list-item__time">
                  19:05
                 </div>
                 <div class="chat-list-item__counter">
                  <span class="time-and-counter__count">1</span>
                 </div>
               </div>

               <div>
                  <img class="chat-list-item__img" src="https://home.adelphi.edu/~ni21572/Monica.jpg" alt="image">
               </div>
               <div>
                 <div class="chat-list-item__name">
                  Monica
                 </div>
                 <div class="chat-list-item__preview">
                  I cooked a dinner! I'm waiting you!
                 </div>
               </div>
               <div class="time-and-counter">
                 <div class="chat-list-item__time">
                  12:04
                 </div>
                 <div class="chat-list-item__counter">
                  <span class="time-and-counter__count">3</span>
                 </div>
               </div>

               <div>
                  <img class="chat-list-item__img" 
                  src="https://upload.wikimedia.org/wikipedia/en/6/66/Matthew_Perry_as_Chandler_Bing.png" alt="image">
               </div>
               <div>
                 <div class="chat-list-item__name">
                  Chandler
                 </div>
                 <div class="chat-list-item__preview">
                  You are my best friend! 🖤
                 </div>
               </div>
               <div class="time-and-counter">
                 <div class="chat-list-item__time">
                  12:04
                 </div>
                 <div class="chat-list-item__counter">
                  <span class="time-and-counter__count">1</span>
                 </div>
               </div>

               <div>
                  <img class="chat-list-item__img" 
                  src="https://upload.wikimedia.org/wikipedia/en/6/6f/David_Schwimmer_as_Ross_Geller.jpg" alt="image">
               </div>
               <div>
                 <div class="chat-list-item__name">
                  Ross
                 </div>
                 <div class="chat-list-item__preview">
                  Where are you? I sent you email
                 </div>
               </div>
               <div class="time-and-counter">
                 <div class="chat-list-item__time">
                  10:54
                 </div>
                 <div class="chat-list-item__counter">
                  <span class="time-and-counter__count">2</span>
                 </div>
               </div>
            </div>
        `;
  }
}

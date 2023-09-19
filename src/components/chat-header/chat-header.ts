import Block from '../../core/Block';

interface IProps {
  classes: string;
}

export class ChatHeader extends Block<IProps> {
  protected render(): string {
    const { classes } = this.props;
    return `
            <div class="chat-header ${classes || ""}">
              <div class="short-info">
                 <img class="short-info__img" src="https://upload.wikimedia.org/wikipedia/en/d/da/Matt_LeBlanc_as_Joey_Tribbiani.jpg" alt="UserPhoto">
                 <div class="short-info__name">Joey</div>
              </div>

              <div class="chat-header__actions">
                <svg xmlns="http://www.w3.org/2000/svg" width="3" height="16" viewBox="0 0 3 16" fill="none">
                <circle cx="1.5" cy="2" r="1.5" fill="#1E1E1E"/>
                <circle cx="1.5" cy="8" r="1.5" fill="#1E1E1E"/>
                <circle cx="1.5" cy="14" r="1.5" fill="#1E1E1E"/>
                </svg>
              </div>
             </div>
        `;
  }
}

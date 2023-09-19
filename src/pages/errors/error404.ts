import Block from '../../core/Block';

export class Error404 extends Block {
  protected render(): string {
    return `
            <div class="error">
              <h1 class="error__status">404</h1>

              <p class="error__text">Не туда попали</p>

              {{{ Link href="/?page=chat" text="Назад к чатам" }}}
            </div>
        `;
  }
}

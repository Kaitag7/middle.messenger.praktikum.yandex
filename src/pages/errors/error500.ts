import Block from '../../core/Block';

export class Error500 extends Block {
  protected render(): string {
    return `
            <div class="error">
              <h1 class="error__status">500</h1>

              <p class="error__text">Мы уже фиксим</p>

              {{{ Link href="/messenger" text="Назад к чатам" }}}
            </div>
        `;
  }
}

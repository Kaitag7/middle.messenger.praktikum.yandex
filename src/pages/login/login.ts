import Block from "../../core/Block";

export class LoginPage extends Block {
  constructor() {
    super({
      validate: {
        login: (value: string) =>
          value.length < 3 && value.length !== 0
            ? "Длина логина должна быть не менее 3 символов"
            : "",
        password: (value: string) =>
          value.length < 8 && value.length !== 0
            ? "Длина пароля должна быть не менее 8 символов"
            : "",
      },
      onLogin: (event: Event) => {
        event.preventDefault();
        const login = this.refs.login.value ? this.refs.login.value() : "";
        const password = this.refs.password.value ? this.refs.password.value() : "";

        console.log({
          login,
          password,
        });
      },
    });
  }

  protected render(): string {
    return `
                  <div class="login-container">
                    <h2 class="login-container__title">Вход</h2>
                      {{#> FormAuth}}
                          {{{ InputField name="login" label="Логин" ref="login" validate=validate.login }}}
                          {{{ InputField name="password" type="password" label="Пароль" ref="password" validate=validate.password }}}
                          {{{ Button label="Авторизоваться" type="primary" page="chat" onClick=onLogin }}}
                          <div class="not-profile-link">
                            {{{ Link href="/?page=register" text="Нет аккаунта?" }}}
                          </div>
                      {{/FormAuth}}
                  </div>
            `;
  }
}

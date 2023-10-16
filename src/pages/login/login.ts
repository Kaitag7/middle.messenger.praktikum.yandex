import { LoginRequestData } from "../../api/types.api.ts";
import Block from "../../core/Block";
import { signin } from "../../services/authService.ts";
import { validateLogin, validatePassword } from "../../utils/validateData.ts";

export class LoginPage extends Block {
  constructor() {
    super({
      validate: {
        login: validateLogin,
        password: validatePassword,
      },
      onLogin: (event: Event) => {
        event.preventDefault();

        const newUser: LoginRequestData = {
          login: this.refs.login?.value?.()!,
          password: this.refs.password?.value?.()!,
        };

        signin(newUser).catch((error) => console.error(error));
      },
    });
  }

  /* eslint-disable max-len */
  protected render(): string {
    return `
            <div>
              <div class="login-container">
                <h2 class="login-container__title">Вход</h2>
                  {{#> FormAuth}}
                      {{{ InputField name="login" label="Логин" ref="login" validate=validate.login }}}
                      {{{ InputField name="password" type="password" label="Пароль" ref="password" validate=validate.password }}}
                      {{{ Button label="Авторизоваться" type="primary" page="chat" onClick=onLogin }}}
                      <div class="register-link">
                        {{{ Link href="/sign-up" text="Нет аккаунта?" }}}
                      </div>
                  {{/FormAuth}}
              </div>
            </div>
        `;
  }
}

import Block from '../../core/Block';
import { validateLogin, validatePassword } from '../../utils/validateData';

export class LoginPage extends Block {
  constructor() {
    super({
      validate: {
        login: validateLogin,
        password: validatePassword,
      },
      onLogin: (event: Event) => {
        event.preventDefault();
        const login = this.refs.login.value ? this.refs.login.value() : '';
        const password = this.refs.password.value ? this.refs.password.value() : '';

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
                    <h2>Вход</h2>

                      {{#> FormAuth}}
                          {{{ InputField name="login" label="Логин" ref="login" validate=validate.login }}}
                          
                          {{{ InputField name="password" type="password" label="Пароль" ref="password" 
                          validate=validate.password }}}

                          {{{ Button label="Авторизоваться" type="primary" page="chat" onClick=onLogin }}}
                      {{/FormAuth}}

                      <div class="register-link">
                          {{{ Link href="/?page=register" text="Нет аккаунта?" }}}
                      </div>
                  </div>
            `;
  }
}

import Block from "../../core/Block";
// import { Store, StoreEvents } from "../../core/Store";
import AuthService from "../../services/authService";
import { validateLogin, validatePassword } from "../../utils/validateData";

interface Props {}

export class LoginPage extends Block {
  authService = new AuthService();

  constructor(props: Props) {
    super({
      ...props,
      validate: {
        login: validateLogin,
        password: validatePassword,
      },
      onLogin: (event: SubmitEvent) => {
        event.preventDefault();

        const login = this.refs.login.value ? this.refs.login.value() : "";
        const password = this.refs.password.value ? this.refs.password.value() : "";

        if (login && password) {
          this.authService.signin({ login, password }).catch((error) => console.error(error));
        }
      },
    });

    // Store.on(StoreEvents.Updated, () => {
    //   this.setProps(Store.getState());
    // });
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
                          {{{ Link href="/sign-up" text="Нет аккаунта?" }}}
                      </div>
                  </div>
            `;
  }
}

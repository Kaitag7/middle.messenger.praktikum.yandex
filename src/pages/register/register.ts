import Block from "../../core/Block";
import AuthService from "../../services/authService";
import {
  validateEmail,
  validateLogin,
  validateName,
  validatePassword,
  validatePhone,
} from "../../utils/validateData";

interface Props {}

export class RegisterPage extends Block {
  authService = new AuthService();

  constructor(props: Props) {
    super({
      ...props,
      validate: {
        login: validateLogin,
        password: validatePassword,
        firstName: validateName,
        secondName: validateName,
        email: validateEmail,
        phone: validatePhone,
      },
      onSignup: (event: SubmitEvent) => {
        event.preventDefault();

        const login = this.refs.login.value ? this.refs.login.value() : "";
        const password = this.refs.password.value ? this.refs.password.value() : "";
        const firstName = this.refs.firstName.value ? this.refs.firstName.value() : "";
        const secondName = this.refs.secondName.value ? this.refs.secondName.value() : "";
        const phone = this.refs.phone.value ? this.refs.phone.value() : "";
        const email = this.refs.email.value ? this.refs.email.value() : "";

        if (login && firstName && secondName && phone && email && password) {
          this.authService
            .signup({
              login,
              password,
              first_name: firstName,
              second_name: secondName,
              phone,
              email,
            })
            .catch((error) => console.error(error));
        }
      },
    });
  }

  protected render(): string {
    return `
              <div class="register-container">
                <h2>Регистрация</h2>

                  {{#> FormRegister}}
                      {{{ InputField name="first_name" label="Имя" ref="firstName" validate=validate.name }}}

                      {{{ InputField name="second_name" label="Фамилия" ref="secondName" validate=validate.name }}}

                      {{{ InputField name="login" label="Логин" ref="login" validate=validate.login }}}

                      {{{ InputField name="email" label="Почта" ref="email" validate=validate.email }}}

                      {{{ InputField name="phone" label="Телефон" ref="phone" validate=validate.phone }}}

                      {{{ InputField name="password" type="password" label="Пароль" ref="password" validate=validate.password }}}

                      {{{ InputField name="password_confirm" type="password" label="Пароль (еще раз)" ref="password_confirm" 
                      validate=validate.password }}}

                      {{{ Button label="Зарегистрироваться" type="primary" onClick=onSignup }}}
                  {{/FormRegister}}

                  <div class="login-link">
                      {{{ Link href="/" text="Войти" }}}
                  </div>
              </div>
        `;
  }
}

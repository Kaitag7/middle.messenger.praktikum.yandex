import Block from "../../core/Block";

export class RegisterPage extends Block {
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
        name: () => "",
        email: (value: string) => (!value.includes("@") ? "Почта невалидна" : ""),
        phone: (value: string) =>
          value.length < 11 && value.length !== 0 ? "Номер должен быть не менее 11 цифр" : "",
      },
      onRegister: (event: Event) => {
        event.preventDefault();

        const values = Object.entries(this.refs).reduce<Record<string, string>>(
          (acc, [key, ref]) => {
            acc[key] = ref.value ? ref.value() : "";
            return acc;
          },
          {}
        );

        console.log(values);
      },
    });
  }

  protected render(): string {
    return `
              <div class="register-container">
                <h2>Регистрация</h2>

                  {{#> FormRegister}}
                      {{{ InputField name="first_name" label="Имя" ref="first_name" validate=validate.name }}}

                      {{{ InputField name="second_name" label="Фамилия" ref="second_name" validate=validate.name }}}

                      {{{ InputField name="login" label="Логин" ref="login" validate=validate.login }}}

                      {{{ InputField name="email" label="Почта" ref="email" validate=validate.email }}}

                      {{{ InputField name="phone" label="Телефон" ref="phone" validate=validate.phone }}}

                      {{{ InputField name="password" type="password" label="Пароль" ref="password" validate=validate.password }}}

                      {{{ InputField name="password_confirm" type="password" label="Пароль (еще раз)" ref="password_confirm" validate=validate.password }}}

                      {{{ Button label="Зарегистрироваться" type="primary" page="chat" onClick=onRegister }}}
                  {{/FormRegister}}

                  <div class="login-link">
                      {{{ Link href="/?page=login" text="Войти" }}}
                  </div>
              </div>
        `;
  }
}

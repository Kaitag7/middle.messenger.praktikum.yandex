import Block from '../../core/Block';

interface IProps {
  validate: { [key: string]: () => string | null };
}

export class ProfileMainInfoEdit extends Block<IProps> {
  constructor() {
    super({
      validate: {
        login: (value: string) =>
          value.length < 3 && value.length !== 0
            ? "Длина логина должна быть не менее 3 символов"
            : "",

        name: () => "",
        email: (value: string) => (!value.includes("@") ? "Почта невалидна" : ""),
        phone: (value: string) =>
          value.length < 11 && value.length !== 0 ? "Номер должен быть не менее 11 цифр" : "",
        required: (value: string) => (!value.trim() ? "Обязательное поле" : ""),
      },
    });
  }

  protected render(): string {
    return `
          {{#> FormProfile}}
            <div class="profile-form__main-info main-info">
              <div class="main-info__container">
                  {{{ InputField name="email" label="Почта" ref="email" validate=validate.email }}}

                  {{{ InputField name="login" label="Login" ref="login" validate=validate.login }}}

                  {{{ InputField name="first_name" label="Имя" ref="first_name" validate=validate.name }}}

                  {{{ InputField name="second_name" label="Фамилия" ref="second_name" validate=validate.name }}}

                  {{{ InputField name="display_name" label="Имя в чате" ref="display_name" validate=validate.required }}}

                  {{{ InputField name="phone" label="Телефон" ref="phone" validate=validate.phone }}}
              </div>
            </div>
          {{/ FormProfile}}
        `;
  }
}

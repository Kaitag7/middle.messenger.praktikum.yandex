import Block from "../../core/Block";
import { logout } from "../../services/authService.ts";
import { connect } from "../../utils/connect.ts";
import { initProfilePage } from "../../services/initApp.ts";
import { password, profile, avatar } from "../../services/userService.ts";
import { PasswordDTO, ProfileDTO } from "../../api/types.api.ts";
import { User } from "../../types.global.ts";

interface IProps {
  editProfile: (e: Event) => void;
  editPassword: (e: Event) => void;
  uploadAvatar: (e: Event) => void;
  user: User;
  editPasswordMode: boolean;
}

export class ProfilePage extends Block<IProps> {
  private editMode: boolean;

  constructor(props: IProps) {
    super({
      ...props,
      editProfile: (e: Event) => this.editProfile(e),
      editPassword: (e: Event) => this.editPassword(e),
      uploadAvatar: (e: Event) => this.uploadAvatar(e),
      logout: (e: Event) => this.logout(e),
      editPasswordMode: false,
    });

    this.editMode = false;
    initProfilePage().catch((e) => console.error(e));
  }

  editProfile(event: Event) {
    event.preventDefault();
    if (this.editMode) {
      const formRefs = this.refs?.profileMain?.refs?.ProfileEdit?.refs;
      if (formRefs) {
        const values = Object.entries(formRefs).reduce<Record<string, string>>(
          (acc, [key, ref]) => {
            acc[key] = ref.value ? ref.value() : "";
            return acc;
          },
          {},
        );

        profile(values as ProfileDTO).catch((error) => console.error(error.message));
      }
    }

    this.editMode = !this.editMode;
    this.refs.profileMain.setProps({ editMode: this.editMode, user: this.props.user });
    this.refs.editProfile.setProps({ text: this.editMode ? "Сохранить" : "Изменить данные" });

    event.preventDefault();
  }

  editPassword(event: Event) {
    event.preventDefault();
    if (this.props.editPasswordMode) {
      const formRefs = this.refs?.profilePasswordEdit?.refs;
      if (formRefs) {
        const values = Object.entries(formRefs).reduce<Record<string, string>>(
          (acc, [key, ref]) => {
            acc[key] = ref.value ? ref.value() : "";
            return acc;
          },
          {},
        );

        password(values as PasswordDTO).catch((error) => console.error(error.message));
      }
    }

    this.setProps({ editPasswordMode: !this.props.editPasswordMode });

    this.refs.editPasswordButton.setProps({
      text: this.props.editPasswordMode ? "Сохранить" : "Изменить пароль",
    });

    event.preventDefault();
  }

  uploadAvatar(event: Event) {
    event.preventDefault();
    const avatarValue = (this.refs.avatarInput.element as HTMLInputElement).files?.[0];
    if (avatarValue) {
      const formData = new FormData();
      formData.append("avatar", avatarValue);
      avatar(formData as any).catch();
    }
  }

  async logout(event: Event) {
    event.preventDefault();
    await logout();
  }

  /* eslint-disable max-len */
  protected render(): string {
    const { login, avatar: userAvatar } = this.props?.user || {};
    return `
            <div class="profile">
                {{{ ReturnButton }}}
                
                <section class="profile-form">
                    <div class="profile-form__container">
                      <div class="profile-form-header">
                          <div>
                              ${
  userAvatar
    ? `<img class="profile-form-header__img" src="${userAvatar}" alt="profile image">`
    : ""
}
                          <div>
                            {{{ Input
                              ref="avatarInput"
                              name=name
                              type="file"
                            }}}
                            {{{ Button label="Загрузить аватар" type="primary" onClick=uploadAvatar }}}
                          </div>
                          <div class="profile-form-header__name">${login || ""}</div>
                        </div>
                      </div>

                      {{{ ProfileMain user=user ref="profileMain" editMode=false }}}

                      {{#if editPasswordMode }}{{{ ProfilePasswordEdit ref="profilePasswordEdit" }}}{{/if}}

                      <div class="profile-form__actions">
                          <div class="profile-form__actions-container">
                              <div>
                                {{{ Link onClick=editProfile href="/" text="Изменить данные" ref="editProfile" }}}
                              </div>

                              <div>
                                {{{ Link onClick=editPassword href="/" text="Изменить пароль" ref="editPasswordButton"}}}
                              </div>

                              <div>
                                {{{ Link onClick=logout text="Выйти" className="link_danger" }}}
                              </div>
                          </div>
                      </div>
                    </div>
                </section>
            </div>
        `;
  }
}

export default connect(({ user }) => ({ user }))(ProfilePage);

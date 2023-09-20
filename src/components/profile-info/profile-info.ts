import Block from '../../core/Block';

export class ProfileInfo extends Block {
  protected render(): string {
    return `
            <div class="profile-form__main-info main-info">
              <div class="main-info__container">
                  <div class="main-info__item">
                    <div class="main-info__item-label">Почта</div>
                    <div class="main-info__item-value">joeyfriends@gmail.com</div>
                  </div>

                  <div class="main-info__item">
                    <div class="main-info__item-label">Логин</div>
                    <div class="main-info__item-value">joeytribbiani</div>
                  </div>

                  <div class="main-info__item">
                    <div class="main-info__item-label">Имя</div>
                    <div class="main-info__item-value">Joey</div>
                  </div>

                  <div class="main-info__item">
                    <div class="main-info__item-label">Фамилия</div>
                    <div class="main-info__item-value">Tribbiani</div>
                  </div>

                  <div class="main-info__item">
                    <div class="main-info__item-label">Имя в чате</div>
                    <div class="main-info__item-value">Best Friend</div>
                  </div>

                  <div class="main-info__item">
                    <div class="main-info__item-label">Телефон</div>
                    <div class="main-info__item-value">+7 (999) 000 00 00</div>
                  </div>
              </div>
            </div>
        `;
  }
}

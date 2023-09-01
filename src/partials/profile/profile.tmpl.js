export const template = `    
     <div class="profile">
        <div class="return-button">
            <a href="/">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                    <circle cx="14" cy="14" r="14" transform="rotate(-180 14 14)" fill="#3369F3"/>
                    <rect x="20" y="14.8" width="11" height="1.6" transform="rotate(-180 20 14.8)" fill="white"/>
                    <path d="M13 19L9 14L13 9" stroke="white" stroke-width="1.6"/>
                </svg>
            </a>
        </div>

        <form action="/?page=chat" method="post">
            <div class="profile-form">
                <div class="profile-form__container">
                    <div class="profile-form-header">
                        <div>
                            <img class="profile-form-header__img" src="https://upload.wikimedia.org/wikipedia/en/d/da/Matt_LeBlanc_as_Joey_Tribbiani.jpg" alt="">
                            <div class="profile-form-header__name">Joey</div>
                        </div>
                    </div>

                    <div class="profile-form__main-info main-info">
                        <div class="main-info__container">
                            <div class="main-info__item">
                                <div class="main-info__item-label">Почта</div>
                                <input class="main-info__item-value main-info__input" type="text" name="email" value="joeyfriends@gmail.com">
                            </div>

                            <div class="main-info__item">
                                <div class="main-info__item-label">Логин</div>
                                <input class="main-info__item-value main-info__input" type="text" name="login" value="joeytribbiani">
                            </div>

                            <div class="main-info__item">
                                <div class="main-info__item-label">Имя</div>
                                <input class="main-info__item-value main-info__input" type="text" name="first_name" value="Joey">
                            </div>

                            <div class="main-info__item">
                                <div class="main-info__item-label">Фамилия</div>
                                <input class="main-info__item-value main-info__input" type="text" name="second_name" value="Tribbiani">
                            </div>

                            <div class="main-info__item">
                                <div class="main-info__item-label">Имя в чате</div>
                                <input class="main-info__item-value main-info__input" type="text" name="display_name" value="Joey">
                            </div>

                            <div class="main-info__item">
                                <div class="main-info__item-label">Телефон</div>
                                <input class="main-info__item-value main-info__input" type="text" name="phone" value="+7 (999) 000 00 00">
                            </div>
                        </div>
                    </div>

                    <div class="profile-form__actions">
                        <div class="profile-form__actions-container">
                            <div>
                                <a href="/?page=login" class="link">Изменить данные</a>
                            </div>

                            <div>
                                <a href="/?page=login" class="link">Изменить пароль</a>
                            </div>

                            <div>
                                <a href="/?page=login" class="link link_danger">Выйти</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </div>
`;

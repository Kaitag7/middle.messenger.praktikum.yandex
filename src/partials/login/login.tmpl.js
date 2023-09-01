export const template = `
    <div class="login-container">
        <h2>Вход</h2>

        <form action="/?page=chat" method="post">
            <div class="input-container">
                <div class="input-container__input">
                    <input type="text" id="login" name="login">
                    <label for="login">Логин</label>
                    <div class="input-container__border"></div>
                </div>

                <div class="input-container__validation">Ошибка валидации</div>
            </div>

            <div class="input-container">
                <div class="input-container__input">
                    <input type="password" id="password" name="password">
                    <label for="password">Пароль</label>
                    <div class="input-container__border"></div>
                </div>
            </div>

            <button type="submit">Авторизоваться</button>
        </form>
        
        <div class="register-link">
            <a href="/?page=register" class="link">Нет аккаунта?</a>
        </div>
    </div>
`;

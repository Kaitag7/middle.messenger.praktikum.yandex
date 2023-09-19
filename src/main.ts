import Handlebars from 'handlebars';
import Block from './core/Block';
import LoginPage from './pages/login';
import MenuNav from './pages/menu-nav';
import RegisterPage from './pages/register';
import ProfilePage from './pages/profile';
import ChatPage from './pages/chat';
import { Error404, Error500 } from './pages/errors';
import { registerComponent } from './core/registerComponent';
import {
  Button,
  InputField,
  Input,
  FormAuth,
  Link,
  FormRegister,
  ReturnButton,
  ProfileMain,
  ProfileInfo,
  ProfileEdit,
  FormProfile,
  ProfileButton,
  ChatHeader,
  ChatMessage,
  ChatListItem,
  SearchChatInputField,
  AttachInput,
  SendButton,
  ErrorLine,
} from './components';
import './styles.scss';

Handlebars.registerPartial('FormAuth', FormAuth);
Handlebars.registerPartial('FormRegister', FormRegister);
Handlebars.registerPartial('FormProfile', FormProfile);
registerComponent('Button', Button);
registerComponent('InputField', InputField);
registerComponent('Input', Input);
registerComponent('Link', Link);
registerComponent('ReturnButton', ReturnButton);
registerComponent('ProfileMain', ProfileMain);
registerComponent('ProfileInfo', ProfileInfo);
registerComponent('ProfileEdit', ProfileEdit);
registerComponent('ProfileButton', ProfileButton);
registerComponent('ChatHeader', ChatHeader);
registerComponent('ChatMessage', ChatMessage);
registerComponent('ChatListItem', ChatListItem);
registerComponent('SearchChatInputField', SearchChatInputField);
registerComponent('AttachInput', AttachInput);
registerComponent('SendButton', SendButton);
registerComponent('ErrorLine', ErrorLine);

document.addEventListener('DOMContentLoaded', () => {
  const index = document.querySelector('#app');
  const queryParams = new URLSearchParams(window.location.search);
  const urlPage = queryParams.get('page');

  const loadPage = () => {
    switch (urlPage) {
      case 'register':
        return new RegisterPage();

      case 'login':
        return new LoginPage();

      case 'profile':
        return new ProfilePage({ editProfile: (e: Event) => console.log(e) });

      case 'chat':
        return new ChatPage();

      case 'error404':
        return new Error404();

      case 'error500':
        return new Error500();

      default:
        return new MenuNav();
    }
  };

  const page: Block = loadPage();

  index?.append(page.getContent() as HTMLElement);
});

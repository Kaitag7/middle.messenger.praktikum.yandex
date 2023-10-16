import Block from '../../core/Block';

export class MenuNav extends Block {
  protected render(): string {
    return `
        <nav>
          <ul class="main-nav-ul">
            <li>{{{ Link href="/sign-up" text="Create a profile" }}}</li>

            <li>{{{ Link href="/" text="Login" }}}</li>

            <li>{{{ Link href="/settings" text="Profile" }}}</li>

            <li>{{{ Link href="/messenger" text="Chat" }}}</li>

            <li>{{{ Link href="/error404" text="Error 404" }}}</li>
            
            <li>{{{ Link href="/error500" text="Error 500" }}}</li>
          </ul>
        </nav>
        `;
  }
}

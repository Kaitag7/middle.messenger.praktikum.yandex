import Block from "../../core/Block";

export class MenuNav extends Block {
  protected render(): string {
    return `
        <nav>
          <ul class="main-nav-ul">
            <li>{{{ Link href="/?page=register" text="Create a profile" }}}</li>

            <li>{{{ Link href="/?page=login" text="Login" }}}</li>

            <li>{{{ Link href="/?page=profile" text="Profile" }}}</li>

            <li>{{{ Link href="/?page=chat" text="Chat" }}}</li>

            <li>{{{ Link href="/?page=error404" text="Error 404" }}}</li>
            
            <li>{{{ Link href="/?page=error500" text="Error 500" }}}</li>
          </ul>
        </nav>
        `;
  }
}

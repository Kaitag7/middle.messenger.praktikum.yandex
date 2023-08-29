import Handlebars from "handlebars";

export const template = `
    <nav>
        <ul>
            <li><a href="/?page=register">Create a profile</a></li>
            <li><a href="/?page=login">Login</a></li>
            <li><a href="/?page=chat">Chat</a></li>
            <li><a href="/?page=error404">Error 404</a></li>
            <li><a href="/?page=error500">Error 500</a></li>
        </ul>
    </nav>
`;

export const routes = Handlebars.compile(template);

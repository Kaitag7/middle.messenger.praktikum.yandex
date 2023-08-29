import { template } from "./login.tmpl.js";
import Handlebars from "handlebars";
import "./login.scss";

export const loginUser = Handlebars.compile(template);

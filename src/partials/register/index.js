import { template } from "./register.tmpl.js";
import Handlebars from "handlebars";
import "./register.scss";

export const registerUser = Handlebars.compile(template);

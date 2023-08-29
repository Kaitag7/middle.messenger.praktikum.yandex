import { template as template404 } from "./404.tmpl.js";
import { template as template500 } from "./500.tmpl.js";
import Handlebars from "handlebars";
import "./errors.scss";

export const error404 = Handlebars.compile(template404);
export const error500 = Handlebars.compile(template500);

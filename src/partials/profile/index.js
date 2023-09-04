import { template } from "./profile.tmpl.js";
import Handlebars from "handlebars";
import "./profile.scss";

export const profileUser = Handlebars.compile(template);

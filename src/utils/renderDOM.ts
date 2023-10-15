import Block from "../core/Block.ts";

export default function renderDOM(rootSelector: string, component: Block) {
  const root = document.querySelector(rootSelector);

  if (!root) throw new Error("Root not found");

  root.innerHTML = "";

  root.append(component.getContent() as HTMLElement);
}

import "./style.css";
import { setupCounter } from "./counter.ts";
import header from "./components/header.ts";
import footer from "./components/footer.ts";
import main from "./components/main-section.ts";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  
    ${header()}
    ${main()}
    ${footer()}
`;

setupCounter(document.querySelector<HTMLButtonElement>("#counter")!);

import "./style.css";
import header from "./components/header.ts";
import footer from "./components/footer.ts";
import main from "./components/main-section.ts";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  
    ${header()}
    ${main()}
    ${footer()}
`;

import { removeClassAll } from "./utils/removeClassAll.js";

export function faq() {
  const dataFaqTitulo = document.querySelectorAll("[data-faq-titulo]");
  const dataFaqDescricao = document.querySelectorAll("[data-faq-descricao]");

  dataFaqDescricao[0].classList.add("on");

  dataFaqTitulo.forEach((item, index) => {
    item.addEventListener("click", () => {
      removeClassAll(dataFaqDescricao);
      dataFaqDescricao[index].classList.toggle("on");
    });
  });
}

import { removeClassAll } from "./utils/removeClassAll.js";

export function tabNav() {
  const dataConteudoAnimais = document.querySelectorAll(
    "[data-conteudo-animais]",
  );
  const dataImagemConteudo = document.querySelectorAll(
    "[data-imagem-conteudo]",
  );

  dataImagemConteudo.forEach((item, index) => {
    item.addEventListener("click", () => {
      removeClassAll(dataConteudoAnimais, "on");
      dataConteudoAnimais[index].classList.add("on");
    });
  });

  dataConteudoAnimais[0].classList.add("on");
}

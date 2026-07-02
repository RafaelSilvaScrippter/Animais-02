export function tabNav() {
  const dataConteudoAnimais = document.querySelectorAll(
    "[data-conteudo-animais]",
  );
  const dataImagemConteudo = document.querySelectorAll(
    "[data-imagem-conteudo]",
  );

  function removeAllClass(element) {
    element.forEach((item) => {
      item.classList.remove("on");
    });
  }

  dataImagemConteudo.forEach((item, index) => {
    item.addEventListener("click", () => {
      removeAllClass(dataConteudoAnimais);
      dataConteudoAnimais[index].classList.add("on");
    });
  });

  dataConteudoAnimais[0].classList.add("on");
}

export function scrollBehavior() {
  const dataLink = document.querySelectorAll("[data-link]");
  const dataConteudoScroll = document.querySelectorAll(
    "[data-conteudo-scroll]",
  );

  function scroll(index) {
    const distanciaHeight =
      dataConteudoScroll[index].getBoundingClientRect().top;
    console.log();

    window.scrollTo({ behavior: "smooth", top: distanciaHeight });
  }

  dataLink.forEach((item, index) => {
    item.addEventListener("click", (e) => {
      e.preventDefault();
      scroll(index);
    });
  });
}

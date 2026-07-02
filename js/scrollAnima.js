export function animaScroll() {
  const dataConteudoScroll = document.querySelectorAll(
    "[data-conteudo-scroll]",
  );

  const windowScroll = window.addEventListener("scroll", () => {
    dataConteudoScroll.forEach((item) => {
      if (item.getBoundingClientRect().top <= 250) {
        item.classList.add("on");
      }
    });

    return () => {
      removeEventListener(windowScroll);
    };
  });
}

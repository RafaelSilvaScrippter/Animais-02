export function MenuMobile() {
  const dataMenuMobile = document.querySelector("[data-menu-mobile]");
  const dataHeader = document.querySelector("[data-header]");
  const dataUlMenuMobile = document.querySelector("[data-ul-menu-mobile]");
  const dataAbrirMenuMobile = document.querySelector(
    "[data-abrir-menu-mobile]",
  );
  let menuMobile = false;

  dataAbrirMenuMobile.addEventListener("click", () => {
    dataUlMenuMobile.classList.toggle("on");
    dataMenuMobile.classList.toggle("on");
  });

  window.addEventListener("click", (e) => {
    if (!dataHeader.contains(e.target)) {
      dataUlMenuMobile.classList.remove("on");
      dataMenuMobile.classList.remove("on");
    }
  });

  dataHeader.appendChild(dataMenuMobile);
}

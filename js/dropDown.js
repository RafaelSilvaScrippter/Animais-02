export function dropDownMenu() {
  const dataMenuDropdown = document.querySelector("[data-menu-dropdown]");
  const dataSobreMenu = document.querySelector("[data-sobre-menu]");
  const dataHeader = document.querySelector("[data-header]");

  dataSobreMenu.appendChild(dataMenuDropdown);

  dataSobreMenu.addEventListener("mouseover", () => {
    dataMenuDropdown.classList.add("on");
  });

  dataHeader.addEventListener("mouseleave", () => {
    dataMenuDropdown.classList.remove("on");
  });
}

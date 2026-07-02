export function modal() {
  const dataModal = document.querySelector("[data-modal]");
  const dataItemModal = document.querySelector("[data-item-modal]");
  const dataModalLink = document.querySelector("[data-modal-link]");
  const dataFechar = document.querySelector("[data-fechar]");

  dataModalLink.addEventListener("click", (e) => {
    e.preventDefault();
    dataModal.classList.add("on");
  });

  function fecharModal() {
    dataModal.classList.remove("on");
  }

  dataFechar.addEventListener("click", () => {
    fecharModal();
  });

  dataModal.addEventListener("click", (e) => {
    let elemento = e.target;
    if (!elemento.contains(dataItemModal) === false) fecharModal();
  });
}

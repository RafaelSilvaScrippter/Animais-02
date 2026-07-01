export function tooltip() {
  const tooltipDiv = document.createElement("div");
  const dataTooltip = document.querySelector("[data-tooltip]");
  const dataContainerContato = document.querySelector(
    "[data-container-contato]",
  );

  dataTooltip.addEventListener("mouseover", (e) => createTooltip(e));
  function createTooltip(e) {
    tooltipDiv.classList.add("tooltip");
    tooltipDiv.innerHTML = `<p>${dataTooltip.dataset.tooltip}</p>`;
    console.log(dataTooltip.dataset.tooltip);
    dataContainerContato.append(tooltipDiv);
  }

  dataTooltip.addEventListener("mousemove", (e) => followMouseTooltip(e));

  function followMouseTooltip(e) {
    console.log(e);
    tooltipDiv.style.left = `${e.offsetX - -50}px`;
    tooltipDiv.style.top = `${e.offsetY}px`;

    return () => {
      dataTooltip.removeEventListener("mousemove");
    };
  }

  dataTooltip.addEventListener("mouseleave", (e) => removeTooltip(e));

  function removeTooltip(e) {
    dataContainerContato.removeChild(tooltipDiv);
  }
}

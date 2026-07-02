export function removeClassAll(element, classe) {
  element.forEach((item) => {
    if (classe) {
      item.classList.remove(classe);
    }
  });
}

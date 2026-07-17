export async function Numeros() {
  const dataNumeros = document.querySelector("[data-numeros]");
  const response = await fetch("./json/animais.json");
  const dados = await response.json();

  dados.forEach((item) => {
    dataNumeros.innerHTML += `
    
    <div>
        <h2>${item.nome}</h2>
        <p>${item.numeros}</p>
    </div>

    `;
  });
}

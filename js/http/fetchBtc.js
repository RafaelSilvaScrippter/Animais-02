export async function FetchBitcoin() {
  const dataSpanBitcoin = document.querySelector("[data-span-bitcoin]");
  const response = await fetch("https://www.blockchain.com/ticker");

  const dados = await response.json();
  dataSpanBitcoin.innerText = (100 / dados.BRL.sell).toFixed(6);

  console.log(1000 / dados.BRL.sell);
}

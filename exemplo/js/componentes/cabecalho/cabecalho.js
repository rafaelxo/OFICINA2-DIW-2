import { carregar } from "../carregar.js";

export async function componenteCabecalho() {
  const cabecalho = document.querySelector('#cabecalho');
  await carregar('./js/componentes/cabecalho/cabecalho.html', cabecalho);
}
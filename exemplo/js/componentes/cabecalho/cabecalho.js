import { carregar } from "../carregar.js";

export function componenteCabecalho() {
  const cabecalho = document.querySelector('#cabecalho');
  carregar('./js/componentes/cabecalho/cabecalho.html', cabecalho);
}
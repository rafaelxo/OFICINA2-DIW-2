import { carregar } from "../carregar.js";

export function componenteRodape() {
  const rodape = document.querySelector('#rodape');
  carregar('./js/componentes/rodape/rodape.html', rodape);
}
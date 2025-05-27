import { carregar } from "../carregar.js";

export async function componenteRodape() {
  const rodape = document.querySelector('#rodape');
  await carregar('./js/componentes/rodape/rodape.html', rodape);
}
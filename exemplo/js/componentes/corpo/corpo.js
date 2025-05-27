import { carregar } from "../carregar.js";

export function componenteCorpo() {
  const corpo = document.querySelector('#corpo');
  carregar('./js/componentes/corpo/corpo.html', corpo);
}
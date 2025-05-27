import { carregar } from "../../../carregar.js";

export function componenteBotao() {
  const formulario = document.querySelector('#formulario');
  carregar('./js/componentes/corpo/formulario/botao/botao.html', formulario);
}
import { carregar } from "../../../carregar.js";

export async function componenteBotao() {
  const formulario = document.querySelector('#formulario');
  await carregar('./js/componentes/corpo/formulario/botao/botao.html', formulario);
}
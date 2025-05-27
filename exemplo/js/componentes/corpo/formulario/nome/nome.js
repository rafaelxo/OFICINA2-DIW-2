import { carregar } from "../../../carregar.js";

export function componenteNome() {
  const formulario = document.querySelector('#formulario');
  carregar('./js/componentes/corpo/formulario/nome/nome.html', formulario);
}
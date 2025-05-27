import { carregar } from "../../../carregar.js";

export function componenteNascimento() {
  const formulario = document.querySelector('#formulario');
  carregar('./js/componentes/corpo/formulario/nascimento/nascimento.html', formulario);
}
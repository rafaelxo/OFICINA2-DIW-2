import { carregar } from "../../../carregar.js";

export function componenteEmail() {
  const formulario = document.querySelector('#formulario');
  carregar('./js/componentes/corpo/formulario/email/email.html', formulario);
}
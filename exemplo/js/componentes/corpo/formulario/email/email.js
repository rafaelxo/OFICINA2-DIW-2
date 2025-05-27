import { carregar } from "../../../carregar.js";

export async function componenteEmail() {
  const formulario = document.querySelector('#formulario');
  await carregar('./js/componentes/corpo/formulario/email/email.html', formulario);
}
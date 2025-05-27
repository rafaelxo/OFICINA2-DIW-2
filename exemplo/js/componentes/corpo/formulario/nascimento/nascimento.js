import { carregar } from "../../../carregar.js";

export async function componenteNascimento() {
  const formulario = document.querySelector('#formulario');
  await carregar('./js/componentes/corpo/formulario/nascimento/nascimento.html', formulario);
}
import { carregar } from "../carregar.js";
import { componenteFormulario } from "./formulario/formulario.js";

export async function componenteCorpo() {
  const corpo = document.querySelector('#corpo');
  await carregar('./js/componentes/corpo/corpo.html', corpo);

  componenteFormulario();
}
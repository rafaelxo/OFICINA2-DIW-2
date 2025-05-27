import { carregar } from "../carregar.js";
import { componenteFormulario } from "./formulario/formulario.js";

export function componenteCorpo() {
  const corpo = document.querySelector('#corpo');
  carregar('./js/componentes/corpo/corpo.html', corpo);
  
  componenteFormulario();
}
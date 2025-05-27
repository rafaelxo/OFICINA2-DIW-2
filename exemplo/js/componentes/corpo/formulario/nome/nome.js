import { carregar } from "../../../carregar.js";

export async function componenteNome() {
    const formulario = document.querySelector('#formulario');
    await carregar('./js/componentes/corpo/formulario/nome/nome.html', formulario);
}
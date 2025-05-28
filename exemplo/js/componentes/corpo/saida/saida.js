import { carregar } from "../../carregar.js";

export async function componenteSaida() {
    const painelDireito = document.querySelector('#painelDireiro');
    await carregar('./js/componentes/corpo/saida/saida.html', painelDireito);
}
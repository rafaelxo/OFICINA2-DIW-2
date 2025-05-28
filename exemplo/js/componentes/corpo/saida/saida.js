import { carregar } from "../../carregar.js";

export async function componenteSaida() {
    const painelDireito = document.querySelector('#painelDireito');
    await carregar('./js/componentes/corpo/saida/saida.html', painelDireito);
}
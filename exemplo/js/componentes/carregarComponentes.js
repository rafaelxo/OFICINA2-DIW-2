import { componenteCabecalho } from "./cabecalho/cabecalho.js";
import { componenteCorpo } from "./corpo/corpo.js";
import { componenteRodape } from "./rodape/rodape.js";

export function carregarComponentes() {
    componenteCabecalho();
    componenteCorpo();
    componenteRodape();
}
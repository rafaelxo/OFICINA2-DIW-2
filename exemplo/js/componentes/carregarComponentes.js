import { componenteCabecalho } from "./cabecalho/cabecalho.js";
import { componenteCorpo } from "./corpo/corpo.js";
import { componenteRodape } from "./rodape/rodape.js";

export async function carregarComponentes() {
    await componenteCabecalho();
    await componenteCorpo();
    await componenteRodape();
}
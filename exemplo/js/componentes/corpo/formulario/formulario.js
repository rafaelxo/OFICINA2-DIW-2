import { carregar } from "../../carregar.js";
import { componenteNome } from "./nome/nome.js";
import { componenteNascimento } from "./nascimento/nascimento.js";
import { componenteEmail } from "./email/email.js";
import { componenteBotao } from "./botao/botao.js";

async function carregarCampos() {
    await componenteNome();
    await componenteNascimento();
    await componenteEmail();
    await componenteBotao();
}

export async function componenteFormulario() {
    const container = document.querySelector('#container');
    await carregar('./js/componentes/corpo/formulario/formulario.html', container);

    carregarCampos();
}
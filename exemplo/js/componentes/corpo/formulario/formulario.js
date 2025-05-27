import { carregar } from "../../carregar.js";
import { componenteNome } from "./nome/nome.js";
import { componenteNascimento } from "./nascimento/nascimento.js";
import { componenteEmail } from "./email/email.js";
import { componenteBotao } from "./botao/botao.js";

function carregarCampos() {
    componenteNome();
    componenteNascimento();
    componenteEmail();
    componenteBotao();
}

export function componenteFormulario() {
    const container = document.querySelector('#container');
    carregar('./js/componentes/corpo/formulario/formulario.html', container);

    //carregarCampos();
}
import { carregar } from "../../../carregar.js";

function validarCampoNome(nome) {
    let mensagem = document.querySelector('#mensagemErroNome');

    if (nome.value.trim().length < 2) {
        nome.classList.add('invalido');
        mensagem.innerHTML = "Nome inválido.";
    } else {
        nome.classList.remove('invalido');
        mensagem.innerHTML = "";
    }
}

export async function componenteNome() {
    const formulario = document.querySelector('#formulario');
    await carregar('./js/componentes/corpo/formulario/nome/nome.html', formulario);

    const nome = formulario.querySelector('#nome');

    nome.addEventListener('blur', (event) => validarCampoNome(event.target));
}

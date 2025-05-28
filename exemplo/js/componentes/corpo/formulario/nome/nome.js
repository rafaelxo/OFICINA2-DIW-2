import { carregar } from "../../../carregar.js";

// Valida o campo nome
function comportamentoCampoNome(nome) {
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

    // Buscando o input dentro do formulário que recebeu o HTML
    const nome = formulario.querySelector('#nome');

    // Agora o evento será amarrado corretamente
    nome.addEventListener('blur', (event) => comportamentoCampoNome(event.target));
}

import { carregar } from "../../../carregar.js";

function comportamentoDataNascimento(evento) {
    const input = evento.target;

    if (evento.key === 'Backspace' || evento.key === 'Delete') {
        return;
    }

    if (input.value.length === 10) {
        evento.preventDefault();
        return;
    }

    if (evento.key < '0' || evento.key > '9') {
        evento.preventDefault();
        return;
    }

    if ((input.value.length === 2) || (input.value.length === 5)) {
        input.value += '/';
    }
}

function validarCampoNascimento(nascimento) {
    let mensagem = document.querySelector('#mensagemErroNascimento');
    const valor = nascimento.value;

    const regex = /^\d{2}\/\d{2}\/\d{4}$/;
    if (!regex.test(valor)) {
        nascimento.classList.add('invalido');
        mensagem.innerHTML = "Data de nascimento inválida. Use o formato dd/mm/yyyy.";
    } else {
        nascimento.classList.remove('invalido');
        mensagem.innerHTML = "";
    }
}

export async function componenteNascimento() {
    const formulario = document.querySelector('#formulario');
    await carregar('./js/componentes/corpo/formulario/nascimento/nascimento.html', formulario);

    const nascimento = formulario.querySelector('#nascimento');

    nascimento.addEventListener('keydown', (event) => comportamentoDataNascimento(event));
    nascimento.addEventListener('blur', (event) => validarCampoNascimento(event.target));
}
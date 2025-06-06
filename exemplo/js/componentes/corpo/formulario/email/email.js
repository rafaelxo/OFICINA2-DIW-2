import { carregar } from "../../../carregar.js";

function validarCampoEmail(email) {
    let mensagem = document.querySelector('#mensagemErroEmail');
    
    if (!email.value.includes('@')) {
        email.classList.add('invalido');
        mensagem.innerHTML = "Email inválido. Deve conter '@'.";
    } else {
        email.classList.remove('invalido');
        mensagem.innerHTML = "";
    }
}

export async function componenteEmail() {
    const formulario = document.querySelector('#formulario');
    await carregar('./js/componentes/corpo/formulario/email/email.html', formulario);

    const email = formulario.querySelector('#email');
    
    email.addEventListener('blur', (event) => validarCampoEmail(event.target));
}
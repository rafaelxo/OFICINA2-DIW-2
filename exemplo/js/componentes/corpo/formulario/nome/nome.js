import { carregar } from "../../../carregar.js";

// Verificar se foram informados, pelo menos, 2 caracteres como nome: 
function comportamentoCampoNome(nome) {
    //const input = document.querySelector('#nome');
    let mensagem = document.querySelector('#mensagemErroNome');

    if (nome.value.length < 2) {
        nome.classList.add('invalido');
        mensagem.innerHTML = "Nome inválido."
    } else {
        nome.classList.remove('invalido');
        mensagem.innerHTML = ""
    }
}

export async function componenteNome() {
    const formulario = document.querySelector('#formulario');
    await carregar('./js/componentes/corpo/formulario/nome/nome.html', formulario);

    const nome = container.querySelector('#nome');
  
    nome.addEventListener('blur', (nome) => comportamentoCampoNome(nome));
}
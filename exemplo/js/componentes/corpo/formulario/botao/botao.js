import { carregar } from "../../../carregar.js";
import { enviarDados, lerTodos, lerPorId, atualizar, excluir, imprimeObjetoJson } from "../../../../api/criar.js";

function lerDadosFormulario() {
    const nome = document.getElementById("nome").value;
    const nascimento = document.getElementById("nascimento").value;
    const email = document.getElementById("email").value;
    const id = document.getElementById("id").value;

    return { id, nome, nascimento, email };
}

function limparDadosFormulario() {
    document.getElementById("nome").value = "";
    document.getElementById("nascimento").value = "";
    document.getElementById("email").value = "";
    document.getElementById("id").value = "";
}

function formularioValido() {
    const nome = document.getElementById("nome");
    const nascimento = document.getElementById("nascimento");
    const email = document.getElementById("email");

    // Dispara a validação de todos os campos
    validarCampoNome(nome);
    validarCampoNascimento(nascimento);
    validarCampoEmail(email);

    // Verifica se algum campo possui a classe 'invalido'
    return !nome.classList.contains('invalido') &&
           !nascimento.classList.contains('invalido') &&
           !email.classList.contains('invalido');
}

export async function componenteBotao() {
    const formulario = document.querySelector('#formulario');
    await carregar('./js/componentes/corpo/formulario/botao/botao.html', formulario);

    const botaoCriar = formulario.querySelector('#botaoCriar');
    const botaoLerTodos = formulario.querySelector('#botaoLerTodos');
    const botaoLerPorId = formulario.querySelector('#botaoLerPorId');
    const botaoAtualizar = formulario.querySelector('#botaoAtualizar');
    const botaoExcluir = formulario.querySelector('#botaoExcluir');
    const corpoPainelDeSaida = document.getElementById("corpoPainelDeSaida");

    botaoCriar.addEventListener('click', async (event) => {
        event.preventDefault();
        if (formularioValido()) {
            const dados = lerDadosFormulario();
            const json = await enviarDados(dados);
            corpoPainelDeSaida.innerHTML = imprimeObjetoJson(json);
            limparDadosFormulario();
        } else {
            alert("Por favor, corrija os campos inválidos antes de enviar.");
        }
    });

    botaoLerTodos.addEventListener('click', async (event) => {
        event.preventDefault();
        const json = await lerTodos();
        corpoPainelDeSaida.innerHTML = imprimeObjetoJson(json);
    });

    botaoLerPorId.addEventListener('click', async (event) => {
        event.preventDefault();
        const id = document.getElementById("id").value;
        if (!id) {
            alert("Por favor, informe o ID para leitura.");
            return;
        }
        const json = await lerPorId(id);
        corpoPainelDeSaida.innerHTML = imprimeObjetoJson(json);
    });

    botaoAtualizar.addEventListener('click', async (event) => {
        event.preventDefault();
        const id = document.getElementById("id").value;
        if (!id) {
            alert("Por favor, informe o ID para atualização.");
            return;
        }
        if (formularioValido()) {
            const dados = lerDadosFormulario();
            const json = await atualizar(id, dados);
            corpoPainelDeSaida.innerHTML = imprimeObjetoJson(json);
            limparDadosFormulario();
        } else {
            alert("Por favor, corrija os campos inválidos antes de atualizar.");
        }
    });

    botaoExcluir.addEventListener('click', async (event) => {
        event.preventDefault();
        const id = document.getElementById("id").value;
        if (!id) {
            alert("Por favor, informe o ID para exclusão.");
            return;
        }
        if (confirm("Tem certeza que deseja excluir o registro?")) {
            const json = await excluir(id);
            corpoPainelDeSaida.innerHTML = imprimeObjetoJson(json);
            limparDadosFormulario();
        }
    });
}
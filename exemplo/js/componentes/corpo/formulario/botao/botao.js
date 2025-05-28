import { carregar } from "../../../carregar.js";
import { enviarDados, imprimeObjetoJson } from "../../../../api/criar.js";

function lerDadosFormulario() {
  const nome = document.getElementById("nome").value;
  const nascimento = document.getElementById("nascimento").value;
  const email = document.getElementById("email").value;

  return { nome, nascimento, email };
}

function limparDadosFormulario() {
  document.getElementById("nome").value = "";
  document.getElementById("nascimento").value = "";
  document.getElementById("email").value = "";
}

export async function componenteBotao() {
  const formulario = document.querySelector('#formulario');
  await carregar('./js/componentes/corpo/formulario/botao/botao.html', formulario);

  const botao = container.querySelector('button');
  botao.addEventListener('click', async (event) => {
    event.preventDefault();

    var dados = lerDadosFormulario();
    var json = await enviarDados(dados);

    const corpoPainelDeSaida = document.getElementById("corpoPainelDeSaida");
    corpoPainelDeSaida.innerHTML = imprimeObjetoJson(json);
    
    limparDadosFormulario();
  });
}

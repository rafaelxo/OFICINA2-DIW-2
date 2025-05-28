import { carregar } from "../../../carregar.js";
import { enviarDados, imprimeObjetoJson } from "../../../../api/criar.js";

function lerDados() {
  const corpoPainelDeSaida = document.getElementById("corpoPainelDeSaida");
  const nome = document.getElementById("nome").value;
  const nascimento = document.getElementById("nascimento").value;
  const email = document.getElementById("email").value;
  return { nome, nascimento, email };
}

export async function componenteBotao() {
  const formulario = document.querySelector('#formulario');
  await carregar('./js/componentes/corpo/formulario/botao/botao.html', formulario);

  const botao = container.querySelector('button');
  botao.addEventListener('click', async (event) => {
    event.preventDefault();
    var dados = lerDados();
    var json = await enviarDados(dados);
    corpoPainelDeSaida.innerHTML = imprimeObjetoJson(json);
  });
}

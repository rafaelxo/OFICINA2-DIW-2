import { carregar } from "../../../carregar.js";
import { enviarDados } from "../../../../api/criar.js";

export async function componenteBotao() {
  const formulario = document.querySelector('#formulario');
  await carregar('./js/componentes/corpo/formulario/botao/botao.html', formulario);

  const botao = container.querySelector('button');
  botao.addEventListener('click', async (event) => {
    event.preventDefault();
    const corpoPainelDeSaida = document.getElementById("corpoPainelDeSaida");
    var json = 
    corpoPainelDeSaida.innerHTML = await enviarDados();
  });
}


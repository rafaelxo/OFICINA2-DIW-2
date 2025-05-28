export async function carregar(caminhoDoComponente, elementoPai) {
  const resposta = await fetch(caminhoDoComponente);
  const htmlDoComponente = await resposta.text();
  elementoPai.insertAdjacentHTML('beforeend', htmlDoComponente);
}

/*
=> insertAdjacentHTML(posicao, html):
   * Insere html no DOM na posição informada, sem substituir o conteúdo original.

=> As 4 posições possíveis:
   * "beforebegin": antes do próprio elemento.
   * "afterbegin": logo após a abertura da tag do elemento (como primeiro filho).
   * "beforeend": logo antes do fechamento da tag do elemento (como último filho).0
   * "afterend": depois do próprio elemento.
*/
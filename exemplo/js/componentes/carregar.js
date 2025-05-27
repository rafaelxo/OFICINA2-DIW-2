export async function carregar(caminhoDoComponente, elementoPai) {
  const resposta = await fetch(caminhoDoComponente);
  const htmlDoComponente = await resposta.text();
  elementoPai.innerHTML += htmlDoComponente;
}

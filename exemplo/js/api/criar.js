export async function enviarDados(dados) {
    const url = "https://69b80b63-8cf8-4b49-a783-414584180b17-00-3phqtvl5yso6k.janeway.replit.dev/";
    const urlUsuarios = url + "usuarios";

    try {
        const resposta = await fetch(urlUsuarios, {
            method: 'POST',
            headers: { "Content-type": "application/json; charset=UTF-8" },
            body: JSON.stringify(dados),
        });

        if (!resposta.ok) {
            throw new Error('Erro no envio dos dados!');
        }

        return await resposta.json();
    } catch (erro) {
        console.error('Erro ao enviar dados:', erro);
        throw erro;
    }
}

export function imprimeObjetoJson(objetoJson){
  return `<div>ID: ${objetoJson.id}</div> 
          <div>Nome: ${objetoJson.nome}</div> 
          <div>Nascimento: ${objetoJson.nascimento}</div>
          <div>E-mail: ${objetoJson.email}</div>`;
}

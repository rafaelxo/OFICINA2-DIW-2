export async function enviarDados(dados) {
    const url = "https://01c72ea2-dc83-4f76-b4e6-f998346028e2-00-1fmk7t8gu8uk4.picard.replit.dev/";
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

/*
export async function enviarDados(dados) {
    const url = "";
    const resposta = "";

    await fetch(url, {
        method: 'POST',
        headers: { "Content-type": "application/json; charset=UTF-8" },
        body: JSON.stringify(dados)
    })
    .then((response) => response.json())
    .then((json) => resposta = json);

    return resposta;
}
*/

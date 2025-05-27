export async function enviarDados(dados) {
    const url = "";

    try {
        const resposta = await fetch(url, {
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

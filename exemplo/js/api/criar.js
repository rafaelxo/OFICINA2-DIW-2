const BASE_URL = "https://69b80b63-8cf8-4b49-a783-414584180b17-00-3phqtvl5yso6k.janeway.replit.dev/usuarios";

export async function enviarDados(dados) {
    try {
        const resposta = await fetch(BASE_URL, {
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
        return { erro: "Falha ao criar registro" };
    }
}

export async function lerTodos() {
    try {
        const resposta = await fetch(BASE_URL, {
            method: 'GET',
            headers: { "Content-type": "application/json; charset=UTF-8" },
        });

        if (!resposta.ok) {
            throw new Error('Erro ao ler registros!');
        }

        return await resposta.json();
    } catch (erro) {
        console.error('Erro ao ler registros:', erro);
        return { erro: "Falha ao ler registros" };
    }
}

export async function lerPorId(id) {
    try {
        const resposta = await fetch(`${BASE_URL}/${id}`, {
            method: 'GET',
            headers: { "Content-type": "application/json; charset=UTF-8" },
        });

        if (!resposta.ok) {
            throw new Error('Registro não encontrado!');
        }

        return await resposta.json();
    } catch (erro) {
        console.error('Erro ao ler registro por ID:', erro);
        return { erro: "Falha ao ler registro por ID" };
    }
}

export async function atualizar(id, dados) {
    try {
        const resposta = await fetch(`${BASE_URL}/${id}`, {
            method: 'PUT',
            headers: { "Content-type": "application/json; charset=UTF-8" },
            body: JSON.stringify(dados),
        });

        if (!resposta.ok) {
            throw new Error('Erro ao atualizar registro!');
        }

        return await resposta.json();
    } catch (erro) {
        console.error('Erro ao atualizar registro:', erro);
        return { erro: "Falha ao atualizar registro" };
    }
}

export async function excluir(id) {
    try {
        const resposta = await fetch(`${BASE_URL}/${id}`, {
            method: 'DELETE',
            headers: { "Content-type": "application/json; charset=UTF-8" },
        });

        if (!resposta.ok) {
            throw new Error('Erro ao excluir registro!');
        }

        return { mensagem: "Registro excluído com sucesso" };
    } catch (erro) {
        console.error('Erro ao excluir registro:', erro);
        return { erro: "Falha ao excluir registro" };
    }
}

export function imprimeObjetoJson(objetoJson) {
    if (objetoJson.erro) {
        return `<div class="erro">${objetoJson.erro}</div>`;
    }
    if (Array.isArray(objetoJson)) {
        return objetoJson.length > 0
            ? `<div>${objetoJson.map(item => `<div>ID: ${item.id}</div><div>Nome: ${item.nome}</div><div>Nascimento: ${item.nascimento}</div><div>E-mail: ${item.email}</div><hr>`).join("")}</div>`
            : `<div>Nenhum registro encontrado.</div>`;
    }
    return `<div>ID: ${objetoJson.id}</div><div>Nome: ${objetoJson.nome}</div><div>Nascimento: ${objetoJson.nascimento}</div><div>E-mail: ${objetoJson.email}</div>`;
}
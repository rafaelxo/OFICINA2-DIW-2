import { carregarComponentes } from './componentes/carregarComponentes.js';

/*import { aplicarComportamentoNome, validarNome } from '../componentes/nome/nome.js';
import { aplicarComportamentoEmail, validarEmail } from '../componentes/email/email.js';
import { aplicarComportamentoNascimento, validarNascimento } from '../componentes/nascimento/nascimento.js';

import { enviarDados } from '../api/fetchAPI.js';
*/

window.addEventListener('DOMContentLoaded', () => {
    carregarComponentes();    
    
    /*    aplicarComportamentoNome();
    aplicarComportamentoEmail();
    aplicarComportamentoNascimento();

    document.querySelector('form').addEventListener('submit', async (e) => {
        e.preventDefault();

        const dados = {
            nome: document.querySelector('#nome').value,
            email: document.querySelector('#cpf').value,
            nascimento: document.querySelector('#nascimento').value,
        };

        const resposta = await enviarDados(dados);
        if (resposta != "")
            alert('Cadastro enviado com sucesso!');
    });*/
});

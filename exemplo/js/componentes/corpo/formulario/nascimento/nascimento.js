import { carregar } from "../../../carregar.js";

function comportamentoDataNascimento(evento) {
  var input = evento.target;

  // Permitir apagar com as teclas Backspace e Delete.
  if (evento.key === 'Backspace' || evento.key === 'Delete') {
    return true;
  }

  // Impedir que sejam digitados mais de 10 caracteres (dd/mm/yyyy).
  if (input.value.length == 10) {
    return false;
  }

  // Verifica se a tecla pressionada está entre '0' e '9'
  if (evento.key < '0' || evento.key > '9') {
    //alert("Informe somente números.");
    return false;
  }

  /* Quando o usuário digitar dois dígitos (dd), ou 
     dois mais dois (dd/mm), o código insere automaticamente
     a barra. Isso constrói a máscara da data conforme a 
     pessoa digita.
  */
  if ((input.value.length == 2) || (input.value.length == 5)) {
    input.value = input.value + '/';
  }

  return true;
}

export async function componenteNascimento() {
  const formulario = document.querySelector('#formulario');
  await carregar('./js/componentes/corpo/formulario/nascimento/nascimento.html', formulario);

  const nascimento = formulario.querySelector('#nascimento');

  nascimento.addEventListener('keydown', (event) => comportamentoDataNascimento(event));
}
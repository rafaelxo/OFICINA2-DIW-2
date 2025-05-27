import { componenteNome } from "./nome/nome.js";
import { componenteNascimento } from "./nascimento/nascimento.js";
import { componenteEmail } from "./email/email.js";

export function componenteFormulario() {
    componenteNome();
    componenteNascimento();
    componenteEmail();
}
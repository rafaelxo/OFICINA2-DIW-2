import { carregarComponentes } from './componentes/carregarComponentes.js';
import { enviarDados } from './api/criar.js';

window.addEventListener('DOMContentLoaded', async () => {
    await carregarComponentes();
});

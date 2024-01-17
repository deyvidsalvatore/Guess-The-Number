let numeroMaximo = 10;
let numeroSecreto = gerarNumeroAleatorio(numeroMaximo);

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirTextoNaTela('h1', 'Número secreto');
exibirTextoNaTela('p', `Escolha um número entre 1 e ${numeroMaximo}`);

function verificarChute() {
    let chute = document.querySelector('input').value;
    console.log(chute == numeroSecreto);
}

function gerarNumeroAleatorio(max) {
    return parseInt(Math.random() * max + 1);
}
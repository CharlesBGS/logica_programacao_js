alert('Boas-vindas ao jogo do Número Secreto!');
let dificuldade = 100;
let numeroSecreto = parseInt(Math.random() * dificuldade + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 1;


// Adicione um console.log para verificar a comparação entre "chute" e "numeroSecreto"
// console.log(`Resultado da comparação: `, chute == numeroSecreto);

while (chute != numeroSecreto) {
    chute = prompt(`Escolha um número entre 01 e ${dificuldade}`);

    // Adicione um console.log para verificar o valor de "chute" após a entrada do usuário
    // console.log(`Valor do chute: `, chute);

    // se chute for igual ao numeroSecreto
    if (chute == numeroSecreto) {
        break;

    } else {
        // Adicione um console.log para verificar o valor de "numeroSecreto" quando o jogador erra
        // console.log(`Valor do numero secreto: `, numeroSecreto);
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}.`);
        } else {
            alert(`O número secreto é maior que ${chute}.`);
        }
        tentativas++;
    // alert('Você Errou! :(');
    }
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}!`);

/*
if (tentativas > 1) {
    alert(`Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas!`);
} else {
    alert(`Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativa!`);
}
*/
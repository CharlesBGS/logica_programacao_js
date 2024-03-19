alert('Boas-vindas ao jogo do Número Secreto!');
let numeroSecreto = 9;
console.log(numeroSecreto);
let chute;
let tentativas = 1;


// Adicione um console.log para verificar a comparação entre "chute" e "numeroSecreto"
// console.log(`Resultado da comparação: `, chute == numeroSecreto);

while (chute != numeroSecreto) {
    chute = prompt('Escolha um número entre 01 e 30');

    // Adicione um console.log para verificar o valor de "chute" após a entrada do usuário
    // console.log(`Valor do chute: `, chute);

    // se chute for igual ao numeroSecreto
    if (chute == numeroSecreto) {
        alert(`Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas!`);
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
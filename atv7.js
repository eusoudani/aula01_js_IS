// Solicita ao usuário que insira o valor em metros
var valorEmMetros = prompt("Digite o valor em metros:");

// Converte o valor para centímetros (1 metro = 100 centímetros)
var valorEmCentimetros = parseFloat(valorEmMetros) * 100;

// Exibe o valor em centímetros no console
console.log("O valor em centímetros é: " + valorEmCentimetros.toFixed(2));
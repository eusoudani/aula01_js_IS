// Solicita ao usuário que insira o valor em dólares
var valorEmDolares = prompt("Digite o valor em dólares:");

// Converte o valor para euros (1 dólar = 0,85 euros)
var valorEmEuros = parseFloat(valorEmDolares) * 0.85;

// Exibe o valor em euros no console
console.log("O valor em euros é: " + valorEmEuros.toFixed(2));
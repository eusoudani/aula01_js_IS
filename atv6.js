// Solicita ao usuário que insira o preço do produto
var precoOriginal = prompt("Digite o preço do produto:");

// Converte o preço para um número decimal
var precoNumerico = parseFloat(precoOriginal);

// Calcula o preço com desconto (10%)
var precoComDesconto = precoNumerico * 0.9;

// Exibe o preço com desconto no console
console.log("O preço com desconto é: " + precoComDesconto.toFixed(2));

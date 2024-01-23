// Solicita ao usuário que insira o raio do círculo
var raio = prompt("Digite o raio do círculo:");

// Calcula a área do círculo (A = π * r^2)
var area = 3.14 * (raio*raio);

//Math.pow(base, expoente);
//var area = Math.PI * Math.pow(parseFloat(raio), 2);

// Exibe a área do círculo no console
//O método toFixed(2) é utilizado para limitar o número de casas decimais na exibição do valor
console.log("A área do círculo é: " + area.toFixed(2));
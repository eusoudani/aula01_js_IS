// Solicita ao usuário o valor da hora trabalhada e o número de horas no mês
var valorHora = prompt("Digite o valor da hora trabalhada:");
var horasTrabalhadas = prompt("Digite o número de horas trabalhadas no mês:");

// Converte os valores para números decimais
var valorHoraDecimal = parseFloat(valorHora);
var horasTrabalhadasDecimal = parseFloat(horasTrabalhadas);

// Calcula o salário bruto
var salarioBruto = valorHoraDecimal * horasTrabalhadasDecimal;

// Calcula os descontos
var descontoIR = salarioBruto * 0.11;
var descontoINSS = salarioBruto * 0.08;
var descontoSindicato = salarioBruto * 0.05;

// Calcula o salário líquido
var salarioLiquido = salarioBruto - descontoIR - descontoINSS - descontoSindicato;

// Exibe os resultados
console.log("1. Salário Bruto: R$" + salarioBruto.toFixed(2));
console.log("2. Desconto INSS: R$" + descontoINSS.toFixed(2));
console.log("3. Desconto Sindicato: R$" + descontoSindicato.toFixed(2));
console.log("4. Salário Líquido: R$" + salarioLiquido.toFixed(2));
console.log("5. Descontos: R$" + (descontoIR + descontoINSS + descontoSindicato).toFixed(2));

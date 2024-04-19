

let primeironumero = window.prompt("digite um número:" )
 primeironumero = parseFloat (primeironumero)

let segundonumero = window.prompt("digite outro número:" )
 segundonumero = parseFloat (segundonumero) //aqui foi convertido os valores para que fosse possivel fazer a soma

let soma = primeironumero + segundonumero // soma dos valores digitados
let multiplicacao = primeironumero * segundonumero
let divisao = primeironumero / segundonumero
let subtracao = primeironumero - segundonumero

window.alert("Resultados:\n" +
"\nSoma: " + soma +
"\nSubtração: " + subtracao +
"\nMultiplicação: " + multiplicacao +
"\nDivisão: " + divisao
)
